import fs from 'node:fs';

/**
 * Lê largura/altura de um JPEG ou PNG direto do arquivo, em tempo de build.
 *
 * Existe porque o `ratio` do Photo.astro era um prop escrito à mão: trocar a
 * foto por uma de proporção diferente deixava o valor desatualizado e o
 * `object-fit: cover` recortava a imagem em silêncio. Derivando do arquivo, a
 * proporção nunca mais mente.
 */
export interface ImageSize {
  width: number;
  height: number;
}

function jpegSize(buf: Buffer): ImageSize | null {
  // SOI
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;

  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1]!;

    // Marcadores sem payload
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    // SOS: daqui para frente é dado comprimido, não há mais cabeçalho
    if (marker === 0xda) return null;

    const len = buf.readUInt16BE(i + 2);

    // SOF0-3, SOF5-7, SOF9-11, SOF13-15 carregam as dimensões.
    // 0xC4 (DHT), 0xC8 (JPG) e 0xCC (DAC) caem na faixa e não são SOF.
    const isSOF =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;

    if (isSOF) {
      return {
        height: buf.readUInt16BE(i + 5),
        width: buf.readUInt16BE(i + 7),
      };
    }

    i += 2 + len;
  }
  return null;
}

function pngSize(buf: Buffer): ImageSize | null {
  const assinatura = buf.subarray(0, 8).toString('hex');
  if (assinatura !== '89504e470d0a1a0a') return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

export function imageSize(caminho: string): ImageSize | null {
  let buf: Buffer;
  try {
    // 64 KB cobre o cabeçalho de qualquer JPEG/PNG com folga
    const fd = fs.openSync(caminho, 'r');
    buf = Buffer.alloc(65536);
    const lidos = fs.readSync(fd, buf, 0, 65536, 0);
    fs.closeSync(fd);
    buf = buf.subarray(0, lidos);
  } catch {
    return null;
  }
  return pngSize(buf) ?? jpegSize(buf);
}
