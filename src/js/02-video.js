import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

 const iframe = document.querySelector('iframe');
 const player = new Vimeo.Player(iframe);

 function datalocalKeyTime (data) {
        console.log('played the video!');
        const dataSecond = JSON.stringify(data.seconds)
        console.log(dataSecond)
        localStorage.setItem(LOCALSTORAGE_KEY, dataSecond);
        //const parsedData = JSON.parse(savedData);//
};
    player.on('timeupdate', throttle( datalocalKeyTime, 1000));

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(savedData).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});




