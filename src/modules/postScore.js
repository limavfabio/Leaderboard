// a function that posts the score to the API
async function postScore(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response);
  return response.json();
}

export default postScore;
