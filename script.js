console.log('Shashidhar is the goat');

let songIndex = 0
let audioElement =  new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs= [
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'}
]

// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})