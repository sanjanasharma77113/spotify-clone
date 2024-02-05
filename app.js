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

