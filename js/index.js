function createSongList() {
  let text = "";  
  for (song in songs) {
      text += songs[song].title
      text += songs[song].performer
      text += songs[song].author
      text += songs[song].genre
      }
  
  document.getElementById("list").innerHTML = text;  
}

