
export const getTopHeadlines = async() => {
  try {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=ae&category=business&apiKey=8fd8bd5acd39446b858df29a1b62d1fc')
    const result = await response.json();
    return result
  } catch (error) {
    
  }
}

export const getNewsSources = async() => {
  try {
  const response = await fetch('https://newsapi.org/v2/sources?apiKey=8fd8bd5acd39446b858df29a1b62d1fc')
  const result = await response.json();
  return result
  } catch (error) {
    
  } 
}







