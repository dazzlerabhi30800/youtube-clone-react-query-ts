const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const homeUrl = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";

export const fetchHome = async () => {
  const response = await fetch(homeUrl, options);
  const result = await response.json();
  return result;
};

export const fetchCategory = async (category: string) => {
  const response = await fetch(
    `https://youtube138.p.rapidapi.com/search/?q=${category}&hl=en&gl=US`,
    options
  );
  const result = await response.json();
  return result;
};

export const fetchVideoById = async (id: string) => {
  if (!id) return;
  const response = await fetch(
    `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`,
    options
  );
  const result = await response.json();
  return result;
};

export const fetchRelatedVideo = async (id: string) => {
  if (!id) return;
  const response = await fetch(
    `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`,
    options
  );
  const result = await response.json();
  return result;
};

export const channelDetails = async (id: string) => {
  if (!id) return;
  const response = await fetch(
    `https://youtube138.p.rapidapi.com/channel/details/?id=${id}&hl=en&gl=US`,
    options
  );
  const result = await response.json();
  return result;
};

export const channelVideo = async (id: string) => {
  if (!id) return;
  const response = await fetch(
    `https://youtube138.p.rapidapi.com/channel/videos/?id=${id}&hl=en&gl=US`,
    options
  );
  const result = await response.json();
  return result;
};

export const formatTime = (time: number) => {
  const minutes = time >= 3600 ? Math.floor(time % 60) : Math.floor(time / 60);
  const hours = Math.floor(time / 3600);
  const seconds = Math.floor(time % 60);
  return `${hours >= 1 ? hours + ":" : "00" + ":"}${
    minutes <= 0 ? "00" : minutes < 10 ? "0" + minutes : minutes
  }:${seconds <= 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}`;
};

export const formatViews = (view: number) => {
  let formatViews: string | number = view;
  if (view >= 1000) {
    formatViews = (view / 1000).toFixed(1) + "K";
  }
  if (view >= 1000000) {
    formatViews = (view / 1000000).toFixed(1) + "M";
  }
  return formatViews;
};

export const handleCategory = (cat: string, type: string) => {
  switch (type) {
    case "home":
      return "New";
    case "category":
      return cat;
    default:
      break;
  }
};
