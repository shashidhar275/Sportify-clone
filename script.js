console.log('Shashidhar is the goat');

let songIndex = 0;
let audioElement =  new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let text = '';
let songs= [
    {songName: 'Pathaan', filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName: 'Maahi ve', filePath:'songs/2.mp3', coverPath:'covers/2.jpg'},
    {songName: 'Raatan Lambiya', filePath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName: 'Yavanig Gottu', filePath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName: 'Paramatma', filePath:'songs/5.mp3', coverPath:'covers/5.jpg'},
    {songName: 'Shape of you', filePath:'songs/6.mp3', coverPath:'covers/6.jpg'},
    {songName: 'Desparcito', filePath:'songs/7.mp3', coverPath:'covers/7.jpg'},
    {songName: 'I love you', filePath:'songs/8.mp3', coverPath:'covers/8.jpg'},
    {songName: 'Binte dil', filePath:'songs/9.mp3', coverPath:'covers/9.jpg'}
]


songs.forEach((song,i)=>{
    text += `<div class="songItem">
              <img src="./cover/${i+1}.jpeg" alt="${song.songName}">
              <span>${song.songName}</span>
              <span class="songlistplay"><span class="timestamp">5:32 <i class="fa-solid play-button fa-play fa-2xl"></i></span>  </span>
              </div>`
})


document.querySelector('.songItemContainer').innerHTML = text;
let playButton = Array.from(document.getElementsByClassName('play-button'));
console.log(playButton);

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

function makeAllPlays()
{
    Array.from(document.getElementsByClassName('play-button')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

playButton.forEach((element,index)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        //audioElement.pause();
        audioElement.src = `./songs/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        songIndex = index+1;
    })
})

audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==9){
        songIndex = 1;
    }
    else{
        songIndex +=1 ;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==1){
        songIndex = 9;
    }
    else{
        songIndex -=1 ;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})