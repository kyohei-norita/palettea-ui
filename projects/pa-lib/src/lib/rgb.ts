export type RGB = {
  r: number,
  g: number,
  b: number,
}

export const toRGB = (imageData: ImageData): RGB => ({
  r: imageData.data[0],
  g: imageData.data[1],
  b: imageData.data[2],
});

export const formatAsRgb = (rgb: RGB) => `rgb(${rgb.r},${rgb.g},${rgb.b})`
