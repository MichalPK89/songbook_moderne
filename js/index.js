function createSongList() {
  let list = "";
  var x = document.createElement("TABLE");
  x.setAttribute("id", "index");
 
  var tbody = document.createElement("tbody");
  x.appendChild(tbody);
  document.body.appendChild(x);
  
  
  var row = document.createElement("TR");
  
  var cell = document.createElement("TH");
  var text = document.createTextNode("Názov");
  cell.appendChild(text);
  row.appendChild(cell);
  
  var cell = document.createElement("TH");
  var text = document.createTextNode("Interpret");
  cell.appendChild(text);
  row.appendChild(cell);
  
  var cell = document.createElement("TH");
  var text = document.createTextNode("Autor");
  cell.appendChild(text);
  row.appendChild(cell);
  
  var cell = document.createElement("TH");
  var text = document.createTextNode("žáner");
  cell.appendChild(text);
  row.appendChild(cell);
  
  x.appendChild(row);
  
  for (song in songs) {
		
		var row = document.createElement("TR");
		
		var cell = document.createElement("TD");
		var text = document.createTextNode(songs[song].title);
		cell.appendChild(text);
		row.appendChild(cell);
		
		var cell = document.createElement("TD");
		var text = document.createTextNode(songs[song].performer);
		cell.appendChild(text);
		row.appendChild(cell);
		
		var cell = document.createElement("TD");
		var text = document.createTextNode(songs[song].author);
		cell.appendChild(text);
		row.appendChild(cell);
		
		var cell = document.createElement("TD");
		var text = document.createTextNode(songs[song].genre);
		cell.appendChild(text);
		row.appendChild(cell);
		
		x.appendChild(row);
      }

  
  document.getElementById("list").innerHTML = list;  
}
