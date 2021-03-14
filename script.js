// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = []
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var temp = false;
var volume = 0.75;
var guessCounter = 0;
var clueHoldTime = 1000;
var strikes = 0
var id;
var elem = document.getElementById("bar");
var width = 0;
var time = true;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generatePattern(){
  var pattern = []
  for(let i = 0; i < 5; i++){
    pattern.push(getRandomInt(1,6));
  }
  console.log('There are ' + pattern.length - 1)
  return pattern
}

function startGame(){
    //initialize game variables
    strikes = 0
    progress = 0;
    gamePlaying = true;
    pattern = generatePattern();
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("progress").classList.remove("hidden");
    document.getElementById("win").classList.add("hidden");
    document.getElementById("lose").classList.add("hidden");
    document.getElementById("strikeLabel").classList.remove("hidden")
    document.getElementById('strikeOut').innerHTML = strikes
    resetTimer()
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("progress").classList.add("hidden");
    document.getElementById("strikeLabel").classList.add("hidden")
}

// Sound Synthesis Functions
const freqMap = {
  1: 210,
  2: 280,
  3: 300,
  4: 350,
  5: 450
}

function resetTimer(){
    width = 0
    clearInterval(id);
    id = setInterval(frame, 100);
}

function frame() {
  if (width >= 0 && width < 50){
    elem.style.background = "#4CAF50"
  }
  if (width >= 50 && width < 75){
    elem.style.background = "#FFFF00";
  }
  if (width >= 75){
    elem.style.background = "#FF0000";
  }
  if (width == 100) {
    clearInterval(id)
    loseGame()
  } else {
    width++; 
    elem.style.width = width + '%'; 
  }
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  guessCounter = 0
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clueHoldTime = clueHoldTime - 100
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    }
  }

function loseGame(){
  stopGame();
  document.getElementById("lose").classList.remove("hidden");
}
function winGame(){
  stopGame();
  clearInterval(id)
  document.getElementById("win").classList.remove("hidden");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if (pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if (progress == pattern.length -1) {
        winGame();
      }else{
        progress++;
        playClueSequence();
        resetTimer();
      }
    }else{
      guessCounter++;
    }
  }else{
      strikes = strikes + 1
      document.getElementById('strikeOut').innerHTML = strikes
    }
    if (strikes == 3) {
      loseGame()
  }
}