// TODO: write your code here
import Goblin from './goblin';
import Field from './field';
import State from './state';

let start;
const field = new Field();;
const goblin = new Goblin(field.cellsCount);
const state = new State();
const nGButton = document.querySelector('.new-game-button');

function refresh() {
  if (state.emptyTurns === goblin.maxMoves) {
    clearInterval(start);
    alert('GameOver!');
    return;
  }
  state.emptyTurns += 1;
  goblin.changePos();
  field.redraw(goblin.position);
}

function newGame() {
  state.clear();
  clearInterval(start);
  state.points = 0;
  state.emptyTurns = 0;
  goblin.position = Math.floor(0 + Math.random() * (field.cellsCount - 1));
  field.redraw(goblin.position);
  state.emptyTurns += 1;
  start = setInterval(refresh, 1000);
}


function checkGoblin(event) {
  event.preventDefault();
  if (event.target.id === 'goblin') {
    field.clearField();
    state.refresh();
    state.emptyTurns = 0;
    refresh();
    clearInterval(start);
    start = setInterval(refresh, 1000);
  }
}

field.element.addEventListener('click', checkGoblin);
nGButton.addEventListener('click', newGame);


// const startPos = Math.floor(0 + Math.random() * (cellsCount - 1));
// let currPos;

// export default function insertPic(position) {
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < cells.length; i++) {
//     if (i === position && position !== currPos) {
//       cells[i].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">';
//       currPos = position;
//       return;
//     }
//   }
// }

// insertPic(startPos);

// <img src="https://github.com/netology-code/ahj-homeworks/blob/master/dom/pic/goblin.png?raw=true" alt="goblin" id="goblin" class="goblin">
// function changePos() {
//   document.getElementById('goblin').remove();
//   let newPos = Math.floor(0 + Math.random() * (cellsCount - 1));
//   do {
//     newPos = Math.floor(0 + Math.random() * (cellsCount - 1));
//   }
//   while (currPos === newPos);

//   insertPic(newPos);
// }
