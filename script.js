const images = [
  {
    name: "Bloor Street",
    source: "./images/BloorStreet.jpg",
    description: "Bloor & Bay street <br/> Down Town Toronto near Gardiner Museum <br/> 676 x 901 px",
    dimensions: {
      width: 676,
      height: 901
    },
    animation: "bounceUp .3s",
  },
  {
    name: "CN Tower",
    source: "./images/CNTower.jpg",
    description: "CN Tower <br/> 553.3 m-high concrete tower Downtown Toronto <br/> 3130 × 4815 px ",
    dimensions: {
      width: 3130,
      height: 4815
    },
    animation: "bounceRight .3s",
  },
  {
    name: "Harbour Front",
    source: "./images/harbourfront.jpg",
    description: "Harbourfront <br/> The tranquil Harbourfront area on the shores of Lake Ontario <br/> 2560 x 1024 px", dimensions: {
      width: 2560,
      height: 1024
    },
    animation: "Tada .5s",
  },
  {
    name: "Hockey Hall Of Fame",
    source: "./images/hockey-hall-of-fame-toronto.jpg",
    description: "The Hockey Hall of Fame <br/>  museum and hall of fame Down Town Toronto <br/> 500 x 375 px ", dimensions: {
      width: 500,
      height: 375
    },
    animation: "rotateRight .6s",
  },
  {
    name: "Humber Bay Arch Bridge",
    source: "./images/HumberBayArchBridge.jpg",
    description: "Humber Bay Arch Bridge <br/> pedestrian and bicycle through arch bridge south of Lake Shore Boulevard <br/> 634 x 951 px", dimensions: {
      width: 634,
      height: 951
    },
    animation: "bounceUp .3s",
  },
  {
    name: "Nathan Phillips Square",
    source: "./images/NathanPhillipsSquare.jpg",
    description: "Nathan Phillips Square <br/> urban plaza for the new City hall Toronto <br/> 701 x 876 px", dimensions: {
      width: 701,
      height: 876
    },
    animation: "bounceRight .3s",
  },
  {
    name: "Old Town Hall",
    source: "./images/oldTownHall.jpg",
    description: " Old City Hall <br/>was the home of the Toronto City Council from 1899 to 1966  <br/>1024 x 683 px", dimensions: {
      width: 1024,
      height: 683
    },
    animation: "Tada .5s",
  },
  {
    name: "St Lawrence Hall",
    source: "./images/St_Lawrence_Hall.jpg",
    description: "St Lawrence Hall <br/>  the corner of King Street East and Jarvis Street <br/> 4096 x 2731 px", dimensions: {
      width: 4096,
      height: 2731
    },
    animation: "rotateRight .6s",
  },
  {
    name: "Gooderham Building",
    source: "./images/Gooderham_Building.jpg",
    description: "Gooderham Building <br/>also known as the Flatiron Building a historic office building <br/> 634 x 951 px", dimensions: {
      width: 634,
      height: 951
    },
    animation: "bounceUp .3s",
  },
];


//==================================================================
/* global variables for the side bar and the representation container 
to be accessible for all functions */
//==================================================================

var list = document.getElementById('side');
var main = document.getElementById('loadingContainer');

//==================================================================
/* This function is called onload() to load the images on the side bar 
and start with the first image in the presentation container */
//==================================================================

function loadImages() {
  for (var i = 0; i < images.length; i++) {
    var image = document.createElement('img');
    image.src = images[i].source;
    image.setAttribute('class','sideList');
    image.setAttribute('value', i);
    image.setAttribute('title', images[i].name);
    image.setAttribute('alt', images[i].name);
    image.onclick = display;
    list.appendChild(image);
    if (i == 0) {
      changeDisplayedImage(i, '', false);
    }
  }
}

//==================================================================
/* This function is called onclick() its whole job to get the index of 
the clicked image passes the it to the changeDisplayedImage function */
//==================================================================

function display() {
  var index = parseInt(this.getAttribute('value'));
  changeDisplayedImage(index);
}

//==================================================================

/* this function is called on key down its job to check the key 
whether up or down and get the index of the image on the 
representation container and then passes the proper index 
to the changeDisplayedImage function */
//==================================================================


function keyControl(event) {
  var image = document.getElementById('mainImage');
  var index = parseInt(image.getAttribute('value'));
  var x = event.keyCode;
  if (x == 40) {
    changeDisplayedImage((index + 1) % images.length)
  } else if (x == 38) {
    changeDisplayedImage((index - 1 + images.length) % images.length, 'reverse');
  }
}

//==================================================================
/* this function is called by all other functions and its responsible 
of loading the proper image in the representation container and 
assigning the proper animation and style  */
//==================================================================


function changeDisplayedImage(index, dirction = '', animate = true) {
  main.innerHTML = "";
  var newImage = document.createElement('img');
  newImage.setAttribute('id', 'mainImage');
  newImage.setAttribute('src', images[index].source);
  newImage.setAttribute('alt', images[index].name);
  newImage.setAttribute('value', index);

  var newImageHeight, newImageWidth;

  if (newImage.width > newImage.height) {
    newImageWidth = main.clientWidth;
    newImageHeight = (images[index].dimensions.height / images[index].dimensions.width) * newImageWidth;
  } else {
    newImageHeight = main.clientHeight;
    newImageWidth = (images[index].dimensions.width / images[index].dimensions.height) * newImageHeight;
  }


  var newDesc = document.createElement('p');
  newDesc.setAttribute('id', 'descreption');
  newDesc.setAttribute('style', 'margin-top: ' + ((main.clientHeight / 2) - (newImageHeight / 2)) + 'px;');
  newDesc.innerHTML = images[index].description;
  main.appendChild(newImage);
  main.appendChild(newDesc);
  animate && newImage.setAttribute('style', 'animation: ' + images[index].animation + ' ease-in .1s ' + dirction + ';margin-top: ' + ((main.clientHeight / 2) - (newImageHeight / 2)) + 'px;' + ' height: ' + newImageHeight + 'px; width: ' + newImageWidth + 'px;');
  !animate && newImage.setAttribute('style', 'margin-top: ' + ((main.clientHeight / 2) - (newImageHeight / 2)) + 'px;' + ' height: ' + newImageHeight + 'px; width: ' + newImageWidth + 'px;');
}