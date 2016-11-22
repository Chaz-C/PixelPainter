

console.log("hi");


window.onload = function pixelPainterModule() {


  createGrid(10,10);

  function createGrid(width, height) {
    var table = document.createElement('table');
    table.id = 'grid';
    pixelPainter.appendChild(table);

    for ( var i = 0; i < height; i ++ ) {
      var rows = document.createElement('tr');
      grid.appendChild(rows);
       
      

     
      for ( var j = 0; j < width; j ++ ) {
        var columns = document.createElement('td');
        rows.appendChild(columns);
        rows.className = "cells";
        columns.addEventListener('click', function (){
           this.style.backgroundColor = selectedColor;
         });
         
        
       
      }
    }

  }


/*document.getElementById('grid').addEventListener('click', function(){
    this.style.backgroundColor = selectedColor;
});  */



  var colorArray = ["red", "blue", "yellow", "green",
  "black", "orange", "purple", "pink", "brown", "aqua"];


  var paletteTable = document.createElement('table');
  paletteTable.id = "palette";
  pixelPainter.appendChild(paletteTable);


  for(var i =0; i < colorArray.length; i++){
    var rows = document.createElement('div');
    rows.id = i;
    rows.style.backgroundColor= colorArray[i];
    rows.style.width= 20;
    rows.style.height = 20;
    paletteTable.appendChild(rows);

  }

  var selectedColor = " ";

  document.getElementById(0).addEventListener('click', function (){
    selectedColor = colorArray[0];
    console.log(selectedColor);
  });

  document.getElementById(1).addEventListener('click', function (){
    selectedColor = colorArray[1];
    console.log(selectedColor);
  });

  document.getElementById(2).addEventListener('click', function (){
    selectedColor = colorArray[2];
    console.log(selectedColor);
  });

document.getElementById(3).addEventListener('click', function (){
    selectedColor = colorArray[3];
    console.log(selectedColor);
  });

document.getElementById(4).addEventListener('click', function (){
    selectedColor = colorArray[4];
    console.log(selectedColor);
  });


document.getElementById(5).addEventListener('click', function (){
    selectedColor = colorArray[5];
    console.log(selectedColor);
  });

document.getElementById(6).addEventListener('click', function (){
    selectedColor = colorArray[6];
    console.log(selectedColor);
  });

document.getElementById(7).addEventListener('click', function (){
    selectedColor = colorArray[7];
    console.log(selectedColor);
  });

document.getElementById(8).addEventListener('click', function (){
    selectedColor = colorArray[8];
    console.log(selectedColor);
  });

document.getElementById(9).addEventListener('click', function (){
    selectedColor = colorArray[9];
    console.log(selectedColor);
  });







  function colorPicker(color) {
    grid.onclick= function(){
      this.style.backgroundColor= selectedColor;
      console.log(selectedColor);



    };



  }


    function clear() {
  }

  function erase() {
  }

  return {
    clear: clear,
    erase: erase,
    colorPicker: colorPicker,
    createGrid: createGrid
  };

};

//var myPainter = pixelPainterModule();

