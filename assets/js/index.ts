import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const $video: HTMLElement = document.querySelector('video');
const $buttonPlay: HTMLElement = document.querySelector('#buttonPlay');
const $buttonMute: HTMLElement = document.querySelector('#buttonMute');

const player = new MediaPlayer({
  video: $video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
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
