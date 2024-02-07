const music = new Audio('songs/WhatsApp Audio')
 music.play();

const songs = [
    {        id:1,
        songName:`On My Way<br>
         <div class="subtitle">
           Alan Walkar</div> `,
            poster:"assests/faded.2.jpg"

     },
    {
        id:1,
       songName:`On My Way<br>
//         <div class="subtitle">
//             Alan Walkar</div> `,
            poster:"assests/faded.2.jpg"

    },
    {
       id:1,
     songName:`On My Way<br>
//         <div class="subtitle">
//             Alan Walkar</div> `,
            poster:"assests/faded.2.jpg"

    },
   {
        id:1,        songName:`On My Way<br>
       <div class="subtitle">
           Alan Walkar</div> `,
          poster:"assests/faded.2.jpg"

   },     {
        id:1,
        songName:`On My Way<br>
       <div class="subtitle">
            Alan Walkar</div> `,
             poster:"assests/faded.2.jpg"

     },

 ]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('assests')[0].src = songs[i]. poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].poster;

});

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();

    } else{
        music.pause(); 

    }

})



function setupContinuousScroll(container, scrollAmount) {
   // Duplicate content for continuous scrolling (only if not duplicated before)
   if (!container.classList.contains('duplicated')) {
       const clonedContent = container.cloneNode(true);
       container.appendChild(clonedContent);
       container.classList.add('duplicated');
   }

   document.getElementById('pop_song_right').addEventListener('click', () => {
       container.scrollLeft += scrollAmount;
   });

   document.getElementById('pop_song_left').addEventListener('click', () => {
       container.scrollLeft -= scrollAmount;
   });
}

let pop_song = document.querySelector('.pop_song');
setupContinuousScroll(pop_song, 330);

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});
