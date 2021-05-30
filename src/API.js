import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (article) => {
  try {
    let articles = await getDataFromHistory();
    articles = articles ? articles : [];
    articles =  articles.filter((item) => item.title !== article.title)
    articles.unshift(article)
    const jsonValue = JSON.stringify(articles)
    await AsyncStorage.setItem('articles', jsonValue)
  } catch (e) {
  }
}

export const getDataFromHistory = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('articles')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
  }
}


export const getTopHeadlines = async(source,history) => {

    if (source) {
      const response = await fetchAPI(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=8fd8bd5acd39446b858df29a1b62d1fc`)
      return response
    }else if(history){
      const response = await getDataFromHistory()
      return {articles: response}
    }else{
      const response = await fetchAPI('https://newsapi.org/v2/top-headlines?country=ae&category=business&apiKey=8fd8bd5acd39446b858df29a1b62d1fc')
      return response
    }
   
   
}

export const getNewsSources = async() => {
    const response = await fetchAPI('https://newsapi.org/v2/sources?apiKey=8fd8bd5acd39446b858df29a1b62d1fc')
    return response
  }

const fetchAPI = async (api) => {
  try {
    const response = await fetch(api);
    const result = await response.json();
    return result
  } catch (error) { }

}







