const SAMPLE_RESPONSE = '{"suggestedTags": ["ANDROID"], "tips": ["You should add more <code> tags to your question. Questions with no code have lower scores on average, and are more likely to be flagged as vague or off-topic", "You should think about adding a title.  Questions with descriptive titles tend to get 50% more views."], "similarQuestionUrl": "http://www.stackoverflow.com/questions/41212274"}'

export const analyzeStackOverflowQuestion = async (question) => {
  // TODO uncomment this
  // const url = "http://www.poop.com"
  // const headers = new Headers({
  //   'Content-Type': 'application/json',
  // })
  // const body = JSON.stringify({
  //   question,
  // })
  // const response = await fetch(url, {
  //   method: 'POST',
  //   headers,
  //   body,
  // })

  // if (!response.ok) {
  //   throw new Error(`${response.status}`)
  // }
  // return response.json()

  // TODO remove this
  return JSON.parse(SAMPLE_RESPONSE)
}

export default {
  analyzeStackOverflowQuestion
}
