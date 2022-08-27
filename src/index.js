import './style.css';
import fetchScores from './modules/fetchScores.js';
import postScore from './modules/postScore.js';

const gameId = 'gE1zkIUmQuffiG69WajW';
const gamesApi = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
const submitButton = document.querySelector('.submit-button');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const refreshButton = document.querySelector('.refresh-button');

const printScores = () => {
  document.querySelector('table').innerHTML = `<tr>
  <th>Name</th>
  <th>Score</th>
</tr>`;
  fetchScores(gamesApi).then((scores) => {
    document.querySelector('table').innerHTML += scores.result
      .map(
        (items) => `<tr>
        <td>${items.user}</td>
        <td>${items.score}</td>
        </tr>`,
      )
      .join(' ');
  });
};

printScores();

refreshButton.addEventListener('click', () => {
  printScores();
});

submitButton.addEventListener('click', () => {
  if (nameInput.value === '' || scoreInput.value === '') {
    nameInput.style.outline = '2px solid red';
    scoreInput.style.outline = '2px solid red';
    setTimeout(() => {
      nameInput.style.outline = 'none';
      scoreInput.style.outline = 'none';
    }, 2000);
  } else {
    const requestBody = {
      user: nameInput.value,
      score: parseInt(scoreInput.value, 10),
    };
    postScore(gamesApi, requestBody);
  }
});
