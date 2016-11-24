var pixelPainterModule = (function() {


  // GRID FORM INPUTS //

  var gridSizeForm = document.createElement('form');
  gridSizeForm.id = 'gridForm';
  pixelPainter.appendChild(gridSizeForm);

  var inputBoxWidth = document.createElement('input');
  inputBoxWidth.setAttribute('type', 'text');
  inputBoxWidth.setAttribute('placeholder', 'Width');
  gridSizeForm.appendChild(inputBoxWidth);

  var inputBoxHeight = document.createElement('input');
  inputBoxHeight.setAttribute('type', 'text');
  inputBoxHeight.setAttribute('placeholder', 'Height');
  gridSizeForm.appendChild(inputBoxHeight);

  // GRID CREATE BUTTON //

  var gridButton = document.createElement('div');
  gridButton.id = 'grid-button';
  gridButton.innerHTML = 'CREATE GRID';
  pixelPainter.appendChild(gridButton);
  gridButton.addEventListener('click', function() {
    createGrid(document.getElementById("gridForm").elements[0].value, document.getElementById("gridForm").elements[1].value);
    console.log('grid created!');
  });

  // DELETE GRID //

  var deleteGrid = document.createElement('div');
  deleteGrid.id = 'delete-grid';
  deleteGrid.innerHTML = 'DELETE GRID';
  pixelPainter.appendChild(deleteGrid);
  deleteGrid.addEventListener('click', function() {
    canvas.removeChild(grid);
    console.log('grid deleted');
  });

  // CREATE GRID FUNCTION //

  var canvas = document.createElement('div');
  canvas.id = 'canvas';
  pixelPainter.appendChild(canvas);

  function createGrid(width, height) {
    var table = document.createElement('table');
    table.id = 'grid';
    canvas.appendChild(table);

    for ( var i = 0; i < height; i ++ ) {
      var rows = document.createElement('tr');
      grid.appendChild(rows);

      for ( var j = 0; j < width; j ++ ) {
        var columns = document.createElement('td');
        rows.appendChild(columns);
        columns.className = "cells";
        columns.addEventListener('click', function (){
           this.style.backgroundColor = selectedColor;
         });
      }
    }
  }

  // COLOR PALETTE //

  var selectedColor;

  var colorArray = ["red", "blue", "yellow", "green",
  "black", "orange", "purple", "pink", "brown", "aqua"];

  var fullColorArray = [ ['#E92525', '#FF4C4C', '#FF6B6B', '#FF8F8F', '#FFBABA'], ['#BE1E72', '#D13E8C', '#DF5DA2', '#EC84BB', '#F6B4D7'], ['#70209C', '#843AAD', '#9F59C6', '#BC80DC', '#DAB2F0'], ['#4529A0', '#5D43B2', '#7A62C9', '#9C88DE', '#C5B7F1'], ['#264A9C', '#4061AD', '#5F7EC6', '#85A0DD', '#B6C7F0'], ['#168C8C', '#2E9C9C', '#4EBABA', '#77D5D5', '#ACEDED'], ['#1DBB1D', '#3DCD3D', '#5CDD5C', '#83EA83', '#B3F6B3'], ['#A1DB23', '#BBF047', '#C8F466', '#D6F98B', '#E7FCB8'], ['#E9E925', '#FFFF4C', '#FFFF6B', '#FFFF8F', '#FFFFBA'], ['#E9C625', '#FFDF4C', '#FFE56B', '#FFEB8F', '#FFF3BA'], ['#E9A825', '#FFC34C', '#FFCE6B', '#FFDA8F', '#FFE8BA'], ['#E97E25', '#FF9D4C', '#FFAE6B', '#FFC18F', '#FFD9BA'], ['#040303', '#313131', '#696969', '#979696', '#C6C5C5']];

  console.log(fullColorArray);


  var paletteTable = document.createElement('table');
  paletteTable.id = "palette";
  paletteTable.style.borderCollapse = 'collapse';
  canvas.appendChild(paletteTable);

  for ( var i = 0; i < fullColorArray.length; i ++ ) {
    var rows = document.createElement('tr');
    rows.style.borderCollapse = 'collapse';
    palette.appendChild(rows);

    for ( var j = 0; j < fullColorArray[i].length; j ++ ) {
      var colorColumns = document.createElement('td');
      colorColumns.className = 'color-palette';
      colorColumns.style.backgroundColor = fullColorArray[i][j];
      colorColumns.style.width = 20;
      colorColumns.style.height = 20;
      colorColumns.style.borderCollapse = 'collapse';
      rows.appendChild(colorColumns);
      colorColumns.addEventListener('click', function() {
        selectedColor = this.style.backgroundColor;
        console.log(selectedColor);
      });
      colorColumns.addEventListener('click', function() {
        for ( var b = 0; b < colorList.length; b ++ ) {
          colorList[b].style.outline = '';
        }
        this.style.outline = '3px yellow solid';
      });
    }
  }

  /*for(var i =0; i < colorArray.length; i++){
    var rows = document.createElement('div');
    rows.id = i;
    rows.className = 'color-palette';
    rows.style.backgroundColor= colorArray[i];
    rows.style.width= 20;
    rows.style.height = 20;
    paletteTable.appendChild(rows);
    rows.addEventListener('click', function() {
      selectedColor = this.style.backgroundColor;
      console.log(selectedColor);
    });
  }*/

  var colorList = document.querySelectorAll('.color-palette');

  // CLEAR BUTTON //

  function clear() {
    var tdList = document.querySelectorAll('.cells');
    console.log(tdList.length);
    console.log('clearing!');
    for ( var i = 0; i < tdList.length; i ++ ) {
      tdList[i].style.backgroundColor = 'white';
    }
  }

  var clearButton = document.createElement('div');
  clearButton.id = 'clear-button';
  clearButton.innerHTML = 'CLEAR';
  pixelPainter.appendChild(clearButton);
  clearButton.addEventListener('click', function() {
    clear();
  });

  // ERASE BUTTON //

  var eraseButton = document.createElement('div');
  eraseButton.id = 'erase-button';
  eraseButton.innerHTML = 'ERASE';
  pixelPainter.appendChild(eraseButton);
  eraseButton.addEventListener('click', function() {
    console.log('eraser active');
    selectedColor = 'white';
  });

})();
