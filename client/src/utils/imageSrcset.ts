export default function imageSrcset(srcset: string[] | undefined) {
  if (!srcset) return;

  return srcset
    .map((item, i) => {
      return `${item} ${i + 1}x`;
    })
    .join(", ");
}
