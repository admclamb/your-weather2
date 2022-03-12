export async function getNews() {
  const newsKey = process.env.REACT_APP_NEWS_KEY;
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${newsKey}&q=weather`
  );
  const newsFromAPI = await response.json();
  if (newsFromAPI) {
    return newsFromAPI;
  }
}
