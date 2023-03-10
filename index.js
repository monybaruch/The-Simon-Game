let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNum];
  gamePattern.push(randomChosenColour);
  $("." + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  let audioDirectory = "sounds/" + randomChosenColour + ".mp3";
  let playAudio = new Audio(audioDirectory);
  playAudio.play();
}

$("body").on("keypress", function (event) {
  let keyPress = event.key;
  console.log(keyPress);
  nextSequence();
});
