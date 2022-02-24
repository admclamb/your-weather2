export async function getNews() {
  const newsKey = process.env.REACT_APP_NEWS_KEY;
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${newsKey}&q=weather`
  );
  console.log("here");
  const newsFromAPI = await response.json();
  console.log(newsFromAPI, "<=");
  if (newsFromAPI) {
    return newsFromAPI;
  }
  return {};
}
