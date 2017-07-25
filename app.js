'use strict';


function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = [];
Image.selectionCounter = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}


Image.imgEl = document.getElementById('image1');
Image.imgEl2 = document.getElementById('image2');
Image.imgEl3 = document.getElementById('image3');

function randomImage() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
  console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + ' times.');
  Image.selectionCounter.push("");
  if (Image.selectionCounter.length === 5) {
    Image.imgEl.removeEventListener('click', randomImage);
    Image.imgEl.removeEventListener('click', randomImage2);
    Image.imgEl.removeEventListener('click', randomImage3);
    Image.imgEl2.removeEventListener('click', randomImage);
    Image.imgEl2.removeEventListener('click', randomImage2);
    Image.imgEl2.removeEventListener('click', randomImage3);
    Image.imgEl3.removeEventListener('click', randomImage);
    Image.imgEl3.removeEventListener('click', randomImage2);
    Image.imgEl3.removeEventListener('click', randomImage3);
  }
}

function randomImage2() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
  console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + ' times.');

}

function randomImage3() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
  console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + ' times.');
}

// EVENT LISTENERS
Image.imgEl.addEventListener('click', randomImage);
Image.imgEl.addEventListener('click', randomImage2);
Image.imgEl.addEventListener('click', randomImage3);

Image.imgEl2.addEventListener('click', randomImage);
Image.imgEl2.addEventListener('click', randomImage2);
Image.imgEl2.addEventListener('click', randomImage3);

Image.imgEl3.addEventListener('click', randomImage);
Image.imgEl3.addEventListener('click', randomImage2);
Image.imgEl3.addEventListener('click', randomImage3);

randomImage();
randomImage2();
randomImage3();


// if (Image.selectionCounter.length === 3) {
//   document.getElementById('image1').removeEventListener('click', randomImage);
//   document.getElementById('image1').removeEventListener('click', randomImage2);
//   document.getElementById('image1').removeEventListener('click', randomImage3);
//   document.getElementById('image2').removeEventListener('click', randomImage);
//   document.getElementById('image2').removeEventListener('click', randomImage2);
//   document.getElementById('image2').removeEventListener('click', randomImage3);
//   document.getElementById('image3').removeEventListener('click', randomImage);
//   document.getElementById('image3').removeEventListener('click', randomImage2);
//   document.getElementById('image3').removeEventListener('click', randomImage3);
//
// }
