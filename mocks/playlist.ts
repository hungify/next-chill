import type { Playlist, PlaylistType } from "~/models/Playlist";

const playlist: Record<PlaylistType, Playlist> = {
  lofi: {
    title: "Lo-fi & Jazz",
    value: "lofi",
    list: [
      "https://www.youtube.com/watch?v=5qap5aO4i9A",
      "https://www.youtube.com/watch?v=5yx6BWlEVcY",
      "https://www.youtube.com/watch?v=-5KAN9_CzSA",
      "https://www.youtube.com/watch?v=lTRiuFIWV54",
      "https://www.youtube.com/playlist?list=PL5FeYIiqkJGoJPMzA1UACc40G-tP29Yqe",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGpbQSM1par2UH7oDh6Hy_Ny",
    ],
  },
  kpop: {
    title: "Korean",
    value: "kpop",
    list: [
      "https://youtube.com/playlist?list=PL5FeYIiqkJGrIHcXmkcUvQUCHN-h3eyay",
      "https://www.youtube.com/watch?v=lKlSesz-V-8",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGrnMju-F4cL8wYmme31a5ko",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGq5yBy2MmxZDV5_qEGN5EjD",
      "https://www.youtube.com/watch?v=ntOYV6mz_7Q",
    ],
  },
  anime: {
    title: "Animation",
    value: "anime",
    list: [
      "https://www.youtube.com/watch?v=NAbQimfaRyw",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGo3f96VYm4nkJXQZOXLV7Bv",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGqxzZ3WCbsw0P__gNN2a7K7",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGqMqAf8o-_Qh60WZ25VkZCb",
      "https://youtube.com/playlist?list=PL5FeYIiqkJGqsW5C3vMfFyjLN-NoTRWLd",
    ],
  },
  own: {
    title: "Use My Own",
    value: "own",
  },
};

export default playlist;
