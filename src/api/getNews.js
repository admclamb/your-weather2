export async function getNews() {
  try {
    const newsKey = process.env.REACT_APP_NEWS_KEY;
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${newsKey}&q=weather`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
}
