import fetch from 'node-fetch';

function scoreBody(user, score) {
  return {
    user: user,
    score: score,
  };
}

const gameId = 'gE1zkIUmQuffiG69WajW';
async function postScore(user, score) {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: scoreBody(user, score),
  });
  return response.json();
}
