export async function getNews() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=weather&apiKey=${process.env.REACT_APP_NEWS_KEY}`
  );
  const newsFromAPI = await response.json();
  if (newsFromAPI) {
    return newsFromAPI;
  }
  return {};
}
