import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const videoplayerCurrentTime = 'videoplayer-current-time';
const _ = require('lodash');
const saveCurrnetTime = _.throttle((seconds) => localStorage.setItem(videoplayerCurrentTime, seconds), 1000);

let currentTime = localStorage.getItem(videoplayerCurrentTime);

if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}

player.on('timeupdate', ({seconds}) => saveCurrnetTime(seconds));

