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

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}: ${seconds}`;
};
