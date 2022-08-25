import './style.css';
import * as dom from './modules/DOM.js';
import fetchScores from './modules/fetchScores.js';

const gameId = 'gE1zkIUmQuffiG69WajW';
const gamesApi = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

document.querySelector('main').innerHTML += dom.scoresTable;
document.querySelector('main').innerHTML += dom.addScoresContainer;

const printScores = () => {
  fetchScores(gamesApi).then((scores) => {
    document.querySelector('table').innerHTML += scores.result
      .map(
        (items) => `<tr>
        <td>${items.user}</td>
        <td>${items.score}</td>
        </tr>`
      )
      .join(' ');
  });
};

printScores();
