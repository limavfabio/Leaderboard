import './style.css';
import addScoresContainer from './modules/addScores.js';
import scoresTable from './modules/scoresTable.js';

document.querySelector('main').innerHTML += scoresTable;
document.querySelector('main').innerHTML += addScoresContainer;
