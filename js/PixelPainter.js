

console.log("hi");


function pixelPainterModule() {


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
      }
    }
  }

  var colorArray = ["red", "blue", "yellow", "green",
  "black", "orange", "purple", "pink", "brown", "aqua"];


  var paletteTable = document.createElement('table');
  paletteTable.id = "palette";
  pixelPainter.appendChild(paletteTable);

  
    for(var i =0; i < colorArray.length; i++){
      var rows = document.createElement('div');
      rows.id = "thisColor";
      rows.style.backgroundColor=colorArray[i];
      rows.style.width= 20;
      rows.style.height = 20;
      paletteTable.appendChild(rows);

    }


  function clear() {
  }

  function erase() {
  }

  function colorPicker(color) {
    var colors = " ";
    document.getElementById('thisColor').addEventListenter('click', function picker(){
            colors = this.colorArray[i];


        });

      grid.onclick= function(){
        this.style.backgroundColor= colors;
      };


      }

  return {
    clear: clear,
    erase: erase,
    colorPicker: colorPicker,
    createGrid: createGrid
  };
}

var myPainter = pixelPainterModule();

