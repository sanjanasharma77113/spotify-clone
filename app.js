

// console.log("Lets write Javascript");
// async function getSongs() {
//   let a = await fetch("http://localhost:5500/songs/");
//   let response = await a.text();
//   // console.log(response);
//   let div = document.createElement("div");
//   div.innerHTML = response;
//   let as = div.getElementsByTagName("a");
//   let songs = [];
//   for (let index = 0; index < as.length; index++) {
//     const element = as[index];
//     if (element.href.endsWith(".mp3")) {
//       songs.push (element.href.split("/songs/")[1]);
//     }
//   }


  
//   return songs;
// }
// async function main() {
//   //Get the list of all the songs
//   let songs = await getSongs()
//   console.log(songs);

//   let songUL = document.querySelector(".songList").getElementByTagName("ul")[0];
//   for(const song of songs){
//     songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20", "")}</li>`;
//   } 


//  //play the first song
//   var audio = new Audio(songs[0]); 
//   //audio.play();

//   audio.addEventListener("loadeddata", () => {
//     console.log(audio.duration,audio.currentSrc,audio.currentTime)

//   })
// }



// main()



///////***************************/////// 


//Chat GPT//

console.log("Let's write Javascript");

async function getSongs() {
  let a = await fetch("http://localhost:5500/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }

  return songs;
}

async function main() {
  // Get the list of all the songs
  let songs = await getSongs();
  console.log(songs);

  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
  let listItems = "";

  for (const song of songs) {
    listItems += `<li>${song.replaceAll("%20", "")}</li>`;
  }

  songUL.innerHTML = listItems;

  // Play the first song
  var audio = new Audio(songs[0]);
  // audio.play();

  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
  });
}

main();
