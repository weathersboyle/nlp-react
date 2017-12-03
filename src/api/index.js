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

  if (!response.ok) {
    throw new Error(`${response.status}`)
  }
  return response.json()
}

export default {
  analyzeStackOverflowQuestion
}
