export function getEmbedId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch|\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

export function getListId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|playlist|\?list=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 34 ? match[2] : null;
}

export function generateEmbedYoutubeUrl(embedId: string, listId: string) {
  const prefix = "https://www.youtube.com/embed";
  const config =
    "autoplay=1&autohide=2&keyboard=1&modestbranding=1&fs=0&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&showsearch=0";

  return embedId
    ? `${prefix}/${embedId}?${config}`
    : `${prefix}?listType=playlist&list=${listId}&${config}`;
}
