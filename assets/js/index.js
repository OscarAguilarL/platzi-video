import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const $video = document.querySelector('video');
const $buttonPlay = document.querySelector('#buttonPlay');
const $buttonMute = document.querySelector('#buttonMute');

const player = new MediaPlayer({
  video: $video,
  plugins: [
    // new AutoPlay()
  ],
});

$buttonPlay.onclick = () => {
  player.togglePlay();
};

$buttonMute.onclick = () => {
  player.toggleMute();
};
