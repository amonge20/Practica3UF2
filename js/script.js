const video = document.getElementById("video");

const compruebaPantalla = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      video.play();
      console.log("play")
    } else {
      video.pause(); 
      console.log("pausado")
    }
  });
});

compruebaPantalla.observe(video);

const playPauseButton = document.getElementById('playpause');
const muteButton = document.getElementById('mute');

playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.classList.remove('play');
    playPauseButton.classList.add('pause');
  } else {
    video.pause();
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
    
  }
});

muteButton.addEventListener('click', () => {
  video.muted = !video.muted;

  muteButton.classList.toggle('unmute');
});