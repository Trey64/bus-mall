'use strict';


function Image(name, identifier) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  this.identifier = identifier;
  Image.all.push(this);
}

Image.all = [];
Image.totalClicks = 0;
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var previouslyShown = [];
var chartDrawn = false;
var busChart;
var pieChart;

// Chart arrays
var labels = [];
var clicks = [];
var shown = [];

function updateChartArrays() {
  for (var i = 0; i < Image.all.length; i++) {
    labels[i] = Image.all[i].name;
    clicks[i] = Image.all[i].timesClicked;
  }
}

function updatePieChart() {
  for (var i = 0; i < Image.all.length; i++) {
    labels[i] = Image.all[i].name;
    shown[i] = Image.all[i].timesShown;
  }
}

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
  while(numbers[0] === previouslyShown[0] || numbers[0] === previouslyShown[1] || numbers[0] === previouslyShown[2]) {
    console.log('Duplicate found');
    numbers[0] = makeRandom();
  }

  numbers[1] = makeRandom();
  while(numbers[0] === numbers[1] || numbers[1] === previouslyShown[0] || numbers[1] === previouslyShown[1] || numbers[1] === previouslyShown[2]) {
    console.log('Duplicate found');
    numbers[1] = makeRandom();
  }
  numbers[2] = makeRandom();
  while(numbers[2] === numbers[1] || numbers[2] === numbers[0] || numbers[2] === previouslyShown[0] || numbers[2] === previouslyShown[1] || numbers[2] === previouslyShown[2]) {
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
  updatePieChart()
  updatePieChart()
  updatePieChart()
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
      updateChartArrays();
    }
  }

if(Image.totalClicks === 25) {
  // remove event listener
  Image.container.removeEventListener('click', handleClick);
  // display list of products and shows/clicks
  return showList();
}

displayImages();
}

function tallyClick(thisImage) {
  for (var i = 0; i < Image.all.length; i++) {
    if (thisImage === Image.all[i].identifier) {
      Image.all[i].clicks++;
    }
  }
}
displayImages();

Image.container.addEventListener('click', handleClick);


// Chart Stuff

var data = {
  labels: labels, // labels array
  datasets: [
    {
      data: clicks, // clicks array
      backgroundColor: [
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624',
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624',
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624',
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624'

      ],
      hoverBackgroundColor: [
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('bus-chart').getContext('2d');
  busChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1500,
        easing: 'easeInOutElastic'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 20,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

function hideChart() {
  document.getElementById('bus-chart').hidden = true;
  document.getElementById('pie-chart').hidden = true;
}

document.getElementById('draw-chart').addEventListener('click', function(){
  drawChart();
});

document.getElementById('list').addEventListener('click', function(){
  document.getElementById('list').hidden = true;
});

document.getElementById('imageContainer').addEventListener('click', function(event){
  if(event.target.id !== 'imageContainer') {
    tallyClick(event.target.id);
  };

  if (chartDrawn) {
    busChart.update();
  }
});

// Pie chart stuff
var data = {
  labels: labels, // labels array
  datasets: [
    {
      data: shown, // shown array
      backgroundColor: [
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624',
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624',
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624',
        '#D65076',
        '#009B77',
        '#034F84',
        '#DC4C46',
        '#9E4624'

      ],
      hoverBackgroundColor: [
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558',
        '#92B558'
      ]
    }]
};

function drawPieChart() {
  var ctx = document.getElementById('pie-chart').getContext('2d');
  pieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutCirc'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 20,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

document.getElementById('draw-pie-chart').addEventListener('click', function(){
  drawPieChart();
});
