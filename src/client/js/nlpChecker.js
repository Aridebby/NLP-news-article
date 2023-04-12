var returnedData = {}
function checkNLP(inputText) {
  
  var API_KEY = getApiKeyFromEnv(process.env.API_KEY)
  var API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
  var articleUrl = inputText // 2-letter code, like en es fr ...
    const response = fetch(`${API_URL}?key=${API_KEY}&url=${articleUrl}`)
      .then(async response => {
        const data =  await response.json()
        returnedData = {
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony
          };
          console.log(returnedData)
        document.getElementById('score-tag').innerHTML = returnedData.score_tag
        document.getElementById('agreement').innerHTML = returnedData.agreement
        document.getElementById('subjectivity').innerHTML = returnedData.subjectivity
        document.getElementById('confidence').innerHTML = returnedData.confidence
        document.getElementById('irony').innerHTML = returnedData.irony
        
      })
      .catch(error => console.log('error', error));
    
}
function getApiKeyFromEnv(apiKey){
  return apiKey
}

export { checkNLP,
  getApiKeyFromEnv
}
