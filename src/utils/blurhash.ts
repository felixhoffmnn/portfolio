import { blurhashToCssGradientString } from "@unpic/placeholder";
import { encode } from "blurhash";
import sharp from "sharp";

export async function generateBlurhashCss(image: ImageMetadata): Promise<string> {
  // fsPath is available at runtime via Astro's Proxy but not in the type definition
  const fsPath = (image as ImageMetadata & { fsPath: string }).fsPath;
  const size = 32;
  const { data, info } = await sharp(fsPath)
    .resize(size, size, { fit: "cover" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const hash = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);

  return blurhashToCssGradientString(hash);
}
