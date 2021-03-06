import goblinpath from '../pic/goblin.png'

export default class Field {
  constructor() {
    this.element = document.getElementById('field');
    this.cells = document.getElementsByClassName('cells');
    this.cellsCount = this.element.children.length;
  }


  clearField() {
    if (document.getElementById('goblin')) {
      document.getElementById('goblin').remove();
    }
  }

  redraw(goblinPosition) {
    // eslint-disable-next-line no-plusplus
    this.clearField();
    for (let i = 0; i < this.cells.length; i++) {
      if (i === goblinPosition) {
        this.cells[i].innerHTML = `<img src="${goblinpath}" alt="goblin" id="goblin" class="goblin">`;
      }
    }
  }
}
