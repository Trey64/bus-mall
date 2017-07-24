'use strict';

function Image(number) {
  this.name = number;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.imgEl = document.getElementById('image1');

function randomImage(e) {
  console.log(e.target.alt);
  if(e.target.alt === 'nine') {
    alert('OMG A BABY GOAT');
  }
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.');
}


document.getElementById('image1').addEventListener('click', randomImage);

randomImage();
