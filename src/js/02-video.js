import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const setDataToStorage = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(setDataToStorage, 1000));
