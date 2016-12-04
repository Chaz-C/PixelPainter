var pixelPainterModule = (function() {

  var banner = document.createElement('div');
  banner.id = 'banner';
  document.body.appendChild(banner);

  var title = document.getElementsByTagName('h1');
  banner.appendChild(title[0]);
  document.body.appendChild(pixelPainter);

  // CREATE GRID FUNCTION //

  var canvas = document.createElement('div');
  canvas.id = 'canvas';
  pixelPainter.appendChild(canvas);

  var gridUp;

  function createGrid(width, height) {

    if ( width > 100 || width < 1 || height < 1 ) {
      alert('INVALID SIZE. Width: 1 - 62 & Height: 1 - ∞');
    } else if ( gridUp === true ) {
      alert('DELETE CURRENT GRID FIRST');
    } else {
    var table = document.createElement('table');
    table.id = 'grid';
    pixelPainter.appendChild(table);

    gridUp = true;

    for ( var i = 0; i < height; i ++ ) {
      var rows = document.createElement('tr');
      grid.appendChild(rows);

      for ( var j = 0; j < width; j ++ ) {
        var columns = document.createElement('td');
        rows.appendChild(columns);
        columns.id = i + '-' + j;
        columns.className = "cells";
        columns.addEventListener('click', function (e) {
           this.style.backgroundColor = selectedColor;
           console.log(e);
        });

        columns.addEventListener('mouseover', function() {
          if ( event.buttons === 1 ) {
            this.style.backgroundColor = selectedColor;
          }
        });
      }
    }
    }
  }

  // COLOR PALETTE //

  var selectedColor;

  var fullColorArray = [ ['#E92525', '#FF4C4C', '#FF6B6B', '#FF8F8F', '#FFBABA'], ['#BE1E72', '#D13E8C', '#DF5DA2', '#EC84BB', '#F6B4D7'], ['#70209C', '#843AAD', '#9F59C6', '#BC80DC', '#DAB2F0'], ['#4529A0', '#5D43B2', '#7A62C9', '#9C88DE', '#C5B7F1'], ['#264A9C', '#4061AD', '#5F7EC6', '#85A0DD', '#B6C7F0'], ['#168C8C', '#2E9C9C', '#4EBABA', '#77D5D5', '#ACEDED'], ['#1DBB1D', '#3DCD3D', '#5CDD5C', '#83EA83', '#B3F6B3'], ['#A1DB23', '#BBF047', '#C8F466', '#D6F98B', '#E7FCB8'], ['#E9E925', '#FFFF4C', '#FFFF6B', '#FFFF8F', '#FFFFBA'], ['#E9C625', '#FFDF4C', '#FFE56B', '#FFEB8F', '#FFF3BA'], ['#E9A825', '#FFC34C', '#FFCE6B', '#FFDA8F', '#FFE8BA'], ['#E97E25', '#FF9D4C', '#FFAE6B', '#FFC18F', '#FFD9BA'], ['#551E00', '#803A15', '#AA6039', '#D48F6A', '#FFC8AA'], ['#040303', '#313131', '#696969', '#979696', '#C6C5C5']];

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
  clearButton.innerHTML = 'Clear';
  canvas.appendChild(clearButton);
  clearButton.addEventListener('click', function() {
    clear();
  });

  // ERASE BUTTON //

  var eraseButton = document.createElement('div');
  eraseButton.id = 'erase-button';
  eraseButton.innerHTML = 'Erase';
  canvas.appendChild(eraseButton);
  eraseButton.addEventListener('click', function() {
    console.log('eraser active');
    selectedColor = 'white';
    for ( var b = 0; b < colorList.length; b ++ ) {
          colorList[b].style.outline = '';
        }
  });

  // GRID FORM INPUTS //

  var gridSizeForm = document.createElement('form');
  gridSizeForm.id = 'gridForm';
  canvas.appendChild(gridSizeForm);

  var inputBoxWidth = document.createElement('input');
  inputBoxWidth.setAttribute('type', 'text');
  inputBoxWidth.setAttribute('placeholder', 'W: 1 - 62');
  gridSizeForm.appendChild(inputBoxWidth);

  var inputBoxHeight = document.createElement('input');
  inputBoxHeight.setAttribute('type', 'text');
  inputBoxHeight.setAttribute('placeholder', 'H: 1 - ∞');
  gridSizeForm.appendChild(inputBoxHeight);

  // GRID CREATE BUTTON //

  var gridButton = document.createElement('div');
  gridButton.id = 'grid-button';
  gridButton.innerHTML = 'Create Grid';
  canvas.appendChild(gridButton);
  gridButton.addEventListener('click', function() {
    createGrid(document.getElementById("gridForm").elements[0].value, document.getElementById("gridForm").elements[1].value);
    console.log('grid created!');
  });

  // DELETE GRID //

  var deleteGrid = document.createElement('div');
  deleteGrid.id = 'delete-grid';
  deleteGrid.innerHTML = 'Delete Grid';
  canvas.appendChild(deleteGrid);
  deleteGrid.addEventListener('click', function() {
    pixelPainter.removeChild(grid);
    console.log('grid deleted');
    gridUp = false;
  });

   // SAVE GRID //

  var saveGrid = document.createElement('div');
  saveGrid.id = 'save-grid';
  saveGrid.innerHTML = 'Save Grid';
  canvas.appendChild(saveGrid);
  var savedGrid = [];



  saveGrid.addEventListener('click', function (){
     var tdCells = document.querySelectorAll('.cells');
     if (savedGrid,length === 0){
      savedGrid =[];
    for(var s = 0; s < tdCells.length; s++){
     savedGrid.push(tdCells[s].style.backgroundColor);
     console.log(tdCells[s]);
     //savedGrid.push(tdCells[s]);
     }
     } else {
      savedGrid = [];
    }
     console.log(savedGrid);
    //console.log('grid saved');
   // localStorage.setItem('savedGrid', savedGrid);

  });

  //load grid//

  var loadGrid = document.createElement('div');
  loadGrid.id = 'load-grid';
  loadGrid.innerHTML = 'Load Grid';
  canvas.appendChild(loadGrid);
  loadGrid.addEventListener('click', function(){
    var nodeCells = document.querySelectorAll('.cells');
    for(var r = 0; r < nodeCells.length; r++){
      nodeCells[r].style.backgroundColor = savedGrid[r];
    }

  });

  var stampBox = document.createElement('div');
  stampBox.id = 'stamp-box';
  pixelPainter.appendChild(stampBox);

  var stampLabel = document.createElement('div');
  stampLabel.id = 'Stamps';
  stampLabel.innerHTML = 'Stamps';
  stampBox.appendChild(stampLabel);

  // SQUARE STAMP BUTTON

  var stampSq = document.createElement('div');
  stampSq.id = 'stamp-square';
  stampSq.innerHTML = 'Square';
  stampBox.appendChild(stampSq);
  stampSq.addEventListener('click', function() {
    var stampList = document.querySelectorAll('.cells');
    console.log('stamp active');
    for ( var i = 0; i < stampList.length; i ++ ) {
      stampList[i].addEventListener('click', squareStamp);
    }
  });

  // SQUARE STAMP

  function squareStamp(e) {
    var x;
    var y;
    var thisId = e.target.id.split('-');
    console.log(thisId);
    x = parseInt(thisId[0]);
    y = parseInt(thisId[1]);
    console.log(x, y);

    for ( var j = x - 2; j < x + 3; j ++ ) {
      for ( var i = y - 2; i < y + 3; i ++ ) {
        document.getElementById( j + '-' + i ).style.backgroundColor = selectedColor;
      }
    }

    var stampList = document.querySelectorAll('.cells');
    console.log('stop stamp');
    for ( var q = 0; q < stampList.length; q ++ ) {
      stampList[q].removeEventListener('click', squareStamp);
    }
  }

  //CIRCLE STAMP BUTTON

  var stampCircle = document.createElement('div');
  stampCircle.id = 'stamp-circle';
  stampCircle.innerHTML = 'Circle';
  stampBox.appendChild(stampCircle);
  stampCircle.addEventListener('click', function() {
    var stampList = document.querySelectorAll('.cells');
    console.log('stamp active');
    for ( var i = 0; i < stampList.length; i ++ ) {
      stampList[i].addEventListener('click', circleStamp);
    }
  });

  //CIRCLE STAMP FUNCTION

  function circleStamp(e) {
    var thisId = e.target.id.split('-');
    var x = parseInt(thisId[0]);
    var y = parseInt(thisId[1]);
    console.log(x, y);

    for ( var i = x - 3; i < x + 4; i ++ ) {
      for ( var j = y - 1; j < y + 2; j ++ ) {
        document.getElementById( i + '-' + j ).style.backgroundColor = selectedColor;
      }
    }

    for ( var q = x - 2; q < x + 3; q ++ ) {
      for ( var w = y - 2; w < y + 3; w ++ ) {
        document.getElementById( q + '-' + w ).style.backgroundColor = selectedColor;
      }
    }

    for ( var t = x - 1; t < x + 2; t ++ ) {
      for ( var r = y - 3; r < y + 4; r ++ ) {
        document.getElementById( t + '-' + r ).style.backgroundColor = selectedColor;
      }
    }

    var stampList = document.querySelectorAll('.cells');
    console.log('stop stamp');
    for ( var p = 0; p < stampList.length; p ++ ) {
      stampList[p].removeEventListener('click', circleStamp);
    }
  }

    createGrid(62, 50);


})();
