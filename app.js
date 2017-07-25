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
  // console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + ' times.');
  Image.selectionCounter.push("");
  if (Image.selectionCounter.length === 25) {
    Image.imgEl.removeEventListener('click', randomImage);
    Image.imgEl.removeEventListener('click', randomImage2);
    Image.imgEl.removeEventListener('click', randomImage3);
    Image.imgEl2.removeEventListener('click', randomImage);
    Image.imgEl2.removeEventListener('click', randomImage2);
    Image.imgEl2.removeEventListener('click', randomImage3);
    Image.imgEl3.removeEventListener('click', randomImage);
    Image.imgEl3.removeEventListener('click', randomImage2);
    Image.imgEl3.removeEventListener('click', randomImage3);

    return Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times.';
  }
}

function randomImage2() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  Image.all[randomIndex].timesClicked += 1;
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

// if (Image.imgEl.clicked = true) {
//   Image.imgEl.timesClicked += 1;
//   console.log(Image.imgEl.name + ' has been clicked ' + Image.imgEl.timesClicked + ' times.');
// }
//
// if (Image.imgEl2.clicked = true) {
//   Image.timesClicked += 1;
//   console.log(Image.name + ' has been clicked ' + Image.timesClicked + ' times.');
// }
//
// if (Image.imgEl3.clicked = true) {
//   Image.timesClicked += 1;
//   console.log(Image.name + ' has been clicked ' + Image.timesClicked + ' times.');
// }


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
