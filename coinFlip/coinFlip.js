// Coin Flip Application
var heads = 0;
var tails = 0;
var headsTally = 0;
var tailsTally = 0;
var headsPercent = 0;
var tailsPercent = 0;

function displayValue(){
  var result = Math.random();
  if(result > .5){
    headsTally ++;
    document.getElementById("value").innerHTML = " heads";
  } else {
    tailsTally ++;
    document.getElementById("value").innerHTML = " tails";
  }
    headsPercent = (headsTally / (headsTally + tailsTally))*100;
    tailsPercent = (tailsTally / (headsTally + tailsTally))*100;
    document.getElementById("tallyHeads").innerHTML = headsTally;
    document.getElementById("tallyTails").innerHTML = tailsTally;
    document.getElementById("headsPercent").innerHTML = headsPercent.toFixed(1)+"%";
    document.getElementById("tailsPercent").innerHTML = tailsPercent.toFixed(1)+"%";
};
