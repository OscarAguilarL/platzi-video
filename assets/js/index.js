import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const $video = document.querySelector('video');
const $buttonPlay = document.querySelector('#buttonPlay');
const $buttonMute = document.querySelector('#buttonMute');

const player = new MediaPlayer({
  video: $video,
  plugins: [new AutoPlay(), new AutoPause()],
});

$buttonPlay.onclick = () => {
  player.togglePlay();
};

$buttonMute.onclick = () => {
  player.toggleMute();
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((err) => console.log(err));
}
