'use strict';

function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.imgEl = document.getElementById('image1');
Image.imgEl2 = document.getElementById('image2');
Image.imgEl3 = document.getElementById('image3');

function randomImage() {
  // console.log(e.target.alt);
  // if(e.target.alt === 'nine') {
  //   alert('OMG A BABY GOAT');
  // }
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  var randomIndex2 = Math.floor(Math.random() * Image.all.length);
  var randomIndex3 = Math.floor(Math.random() * Image.all.length);
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
}

function randomImage2() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
}

function randomImage3() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
}


document.getElementById('image1').addEventListener('click', randomImage);
document.getElementById('image1').addEventListener('click', randomImage2);
document.getElementById('image1').addEventListener('click', randomImage3);
document.getElementById('image2').addEventListener('click', randomImage);
document.getElementById('image2').addEventListener('click', randomImage2);
document.getElementById('image2').addEventListener('click', randomImage3);
document.getElementById('image3').addEventListener('click', randomImage);
document.getElementById('image3').addEventListener('click', randomImage2);
document.getElementById('image3').addEventListener('click', randomImage3);

randomImage();
randomImage2();
randomImage3();
