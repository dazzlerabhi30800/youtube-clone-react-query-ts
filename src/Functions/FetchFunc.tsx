const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "11cbd1ad6fmsh0a817753b0087c5p1e4529jsn2e3582618183",
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
  console.log(category);
  const response = await fetch(`https://youtube138.p.rapidapi.com/search/?q=${category}&hl=en&gl=US`, options);
  const result = await response.json();
  return result;
}

export const formatTime = (time: number) => {
  const hours = Math.floor(100 / 60);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${hours >= 1 && hours}:${minutes <= 0 ? "00" : minutes}:${seconds <= 0 ? "00" : seconds}`;
};


export const formatViews = (view: number) => {
  let formatViews;
  if (view >= 1000) {
    formatViews = (view / 1000).toFixed(1) + "K";
  }
  if (view >= 1000000) {
    formatViews = (view / 1000000).toFixed(1) + "M";
  }
  return formatViews;
}