'use strict';


function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = [];
Image.totalClicks = 0;
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var previouslyShown = [];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.leftImage = document.getElementById('left');
Image.centerImage = document.getElementById('center');
Image.rightImage = document.getElementById('right');
Image.container = document.getElementById('imageContainer');

function makeRandom() {
  return Math.floor(Math.random() * Image.all.length);
}

function displayImages() {
  console.log(previouslyShown, 'previously shown images');
  // generate 3 random numbers
  // ensure that those numbers are unique
  var numbers = [];
  numbers[0] = makeRandom();
  numbers[1] = makeRandom();
  while(numbers[0] === numbers[1]) {
    console.log('Duplicate found');
    numbers[1] = makeRandom();
  }
  numbers[2] = makeRandom();
  while(numbers[2] === numbers[1] || numbers[2] === numbers[0]) {
    console.log('Duplicate found');
    numbers[2] = makeRandom();
}
  Image.leftImage.src = Image.all[numbers[0]].source;
  Image.centerImage.src = Image.all[numbers[1]].source;
  Image.rightImage.src = Image.all[numbers[2]].source;
  Image.leftImage.alt = Image.all[numbers[0]].name;
  Image.centerImage.alt = Image.all[numbers[1]].name;
  Image.rightImage.alt = Image.all[numbers[2]].name;
  Image.all[numbers[0]].timesShown += 1;
  Image.all[numbers[1]].timesShown += 1;
  Image.all[numbers[2]].timesShown += 1;
  console.log(numbers, 'currently showing')
  previouslyShown = numbers;
}

function showList() {
  var ulEl = document.getElementById('list');
  for(var i = 0; i < Image.all.length; i++) {
    // create element
    var liEl = document.createElement('li');
    // give it content
    liEl.textContent = Image.all[i].name + ' was shown ' + Image.all[i].timesShown + ' times and was clicked ' + Image.all[i].timesClicked + ' times.';
    // append it to DOM
    ulEl.appendChild(liEl);
  }
}

function handleClick(e) {
  Image.totalClicks += 1;
  console.log(Image.totalClicks, 'total clicks');
  for(var i = 0; i < Image.all.length; i++) {
    if(e.target.alt === Image.all[i].name) {
      // tally a click
      Image.all[i].timesClicked += 1;
    }
  }

  if(Image.totalClicks === 3) {
    // remove event listener
    Image.container.removeEventListener('click', handleClick);
    // display list of products and shows/clicks
    return showList();
  }

  displayImages();
}

displayImages();

Image.container.addEventListener('click', handleClick);
