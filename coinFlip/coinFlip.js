// Coin Flip Application

//Set variables
var heads = 0;
var tails = 0;
var headsTally = 0;
var tailsTally = 0;
var headsPercent = 0;
var tailsPercent = 0;

function displayValue(){
  //Clear images
  for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);
  //Randomize coin flip
  var result = Math.random();
  if(result > .5){
    headsTally ++;
    document.getElementById("value").innerHTML = " heads";
    show_image("http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head-thumb.jpg", 75, 75, "Heads");
  } else {
    tailsTally ++;
    document.getElementById("value").innerHTML = " tails";
    show_image("http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-tail.jpg", 75, 75, "Heads");
  }
    headsPercent = (headsTally / (headsTally + tailsTally))*100;
    tailsPercent = (tailsTally / (headsTally + tailsTally))*100;
    //Show all results
    document.getElementById("tallyHeads").innerHTML = headsTally;
    document.getElementById("tallyTails").innerHTML = tailsTally;
    document.getElementById("headsPercent").innerHTML = headsPercent.toFixed(1)+"%";
    document.getElementById("tailsPercent").innerHTML = tailsPercent.toFixed(1)+"%";
};

//Show image
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
