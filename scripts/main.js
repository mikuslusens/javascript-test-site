
var myImage = document.querySelector('img');
var list = document.createElement('ul');
var info = document.createElement('p');
var button2 = document.createElement('button');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/face1.png') {
    myImage.setAttribute('src','images/face2.png');
  } else {
    myImage.setAttribute('src','images/face1.png');
  }
}

var button1 = document.querySelector('button[name=button1]');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

button2.setAttribute("name", "button2");
info.textContent = 'Below is a dynamic list. Click the button below to add a new list item. Click an existing list item to change its text to something else.';
button2.textContent = 'Add item';

document.body.appendChild(info);
document.body.appendChild(button2);
document.body.appendChild(list);

button2.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}

button1.onclick = function() {
  setUserName();
}
