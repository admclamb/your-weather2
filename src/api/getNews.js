export async function getNews() {
  try {
    const newsKey = process.env.REACT_APP_NEWS_KEY;
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${newsKey}&q=weathersss`
    );
    const newsFromAPI = await response.json();
    return newsFromAPI;
  } catch (error) {
    return error;
  }
}
