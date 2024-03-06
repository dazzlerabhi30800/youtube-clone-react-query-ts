/// <reference types="vite/client" />

type videoType = {
    type: string;
    video: videoData;
}

type videoData = {
  author: author;
  badges: Array<string>;
  descriptionSnippet: string;
  isLiveNow?: boolean;
  lengthSeconds?: number;
  movingThunbnails: Array<imageContent>;
  publishedTimeText: string;
  stats: {
      views: number;
  };
  thumbnails: Array<imageContent>;
  title: string;
  videoId: string;
};

type author = {
  avatar: Array<imageContent>;
  badges: Array<string>
  canonicalBaseUrl: any;
  channelId: string;
  title: string;
};

type imageContent = {
  height: number;
  url: string;
  width: number;
};
