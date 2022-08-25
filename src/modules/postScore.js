import fetch from 'node-fetch';

function scoreBody(name, score) {
  return {
    user: name,
    score: score,
  };
}
const gameId = 'gE1zkIUmQuffiG69WajW';
// postScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gameId/scores/', scoreBody('John', 100))

let testPromise = postScore('John', 100);

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
  console.log(response.json());
  return response.json().then((json) => {console.log(json)});
}
