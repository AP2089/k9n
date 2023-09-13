export default function metaHead(title: string | undefined) {
  if (title) {
    document.title = title;
  }
}
