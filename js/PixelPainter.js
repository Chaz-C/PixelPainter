
console.log("hi");





  var paletteTable = document.createElement('table');
  paletteTable.id = "palette";
  pixelPainter.appendChild(paletteTable);

  
    for(var i =0; i < 5; i++){
      var rows = document.createElement('tr');
      paletteTable.appendChild(rows);

      for(var c =0; c < 5; c++){
      var columns = document.createElement('td');
      rows.appendChild(columns);
    }

    }



  



