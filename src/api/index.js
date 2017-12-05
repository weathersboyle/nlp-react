export const analyzeStackOverflowQuestion = async (question) => {
  // TODO use Heroku url
  const url = "www.poop.com"
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  const body = JSON.stringify({
    question,
  })
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  })

  // TODO uncomment this
  // if (!response.ok) {
  //   throw new Error(`${response.status}`)
  // }
  // return response.json()

  // TODO remove this
  return JSON.parse('{"suggestedTags" : ["JAVA", "ANDROID"], "tips" : ["tip1", "tip2"], "similarQuestionUrl" : "http://www.google.com"}')
}

export default {
  analyzeStackOverflowQuestion
}
