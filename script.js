/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const divPalette = document.getElementById('color-palette');
const divGrid = document.getElementById('pixel-board');
const inputVqv = document.getElementById('board-size');
const btnVqv = document.getElementById('generate-board');

function createPallete() {
  const color = ['black'];

  for (let index = 0; index < 10 ; index += 1) {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const colorRandom = 'rgb(' + `${red}, ${blue}, ${green} ` + ')';
    color.push(colorRandom);
  }
  for (let index = 0; index < color.length; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    const className = color[index];
    div.style.background = className;
    divPalette.appendChild(div);
    if (div.style.background === 'black') {
      div.className += ' selected';
    }
  }
}

function grid() {
  const table = document.createElement('table');
  for (let index = 0; index < 5; index += 1) {
    const rows = document.createElement('tr');
    for (let i = 0; i < 5; i += 1) {
      const lines = document.createElement('td');
      lines.className = 'pixel';
      rows.appendChild(lines);
    }
    table.append(rows);
  }
  divGrid.appendChild(table);
}

function selectColor() {
  function selectionColor(element) {
    const elementClick = element.target;
    for (let index = 0; index < divPalette.children.length; index += 1) {
      const children = divPalette.children[index];
      children.className = 'color';
      if (children === elementClick) {
        children.className += ' selected';
      }
    }
  }
  divPalette.addEventListener('click', selectionColor);
}

function fillColor() {
  const selectSquare = document.getElementById('pixel-board');
  const palleteColor = document.getElementById('color-palette');
  function fill(element) {
    const elementLocal = element;
    for (let index = 0; index < palleteColor.children.length; index += 1) {
      const children = palleteColor.children[index].className;
      if (children === 'color selected') {
        const colorSelected = palleteColor.children[index].style.background;
        elementLocal.target.style.background = colorSelected;
      }
    }
  }
  selectSquare.addEventListener('click', fill);
}
const button = document.getElementById('clear-board');
function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.background = 'white';
  }
}button.addEventListener('click', clear);

function CreateGrid() {
  let valueInput = inputVqv.value;
  divGrid.innerHTML = '';
  if (valueInput === '') {
    alert('Board inválido!');
  }
  if (valueInput < 5) {
    valueInput = 5;
  }
  if (valueInput > 50) {
    valueInput = 50;
  }
  const table = document.createElement('table');
  for (let index = 0; index < valueInput; index += 1) {
    const rows = document.createElement('tr');
    for (let i = 0; i < valueInput; i += 1) {
      const lines = document.createElement('td');
      lines.className = 'pixel';
      rows.appendChild(lines);
    }
    table.append(rows);
  }
  divGrid.appendChild(table);
}btnVqv.addEventListener('click', CreateGrid);

grid();
createPallete();
selectColor();
fillColor();
