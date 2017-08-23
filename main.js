
let container = document.getElementById('container');

function domString(catsArray) {
	let string = '';
	for (var i = 0; i < catsArray.length; i++) {
	string += `<div id='catCards'>`;
	string += 	`<h1>${catsArray[i].name}</h1>`;
	string += 	`<img src='${catsArray[i].url}'>`;
	string += 	`<h4>${catsArray[i].sport}</h4>`;
	string += 	`<p>${catsArray[i].color}</p>`;
	string += `</div>`
	writeToDom(string);
	};
};

function writeToDom(string) {
	container.innerHTML = string;
};

function executeThisCodeAfterFileLoads1() {
	// console.log('this', this.responseText);
	let data = JSON.parse(this.responseText)
	domString(data.catsArray);
};

//the the dogs JSON hasnt been created yet to run this function
function executeThisCodeAfterFileLoads2() {
	// console.log('this', this.responseText);
	let data = JSON.parse(this.responseText)
	domString(data.dogsArray);
};

function executeThisCodeIfFileErrors() {
	console.log('Error');
};

let myRequest1 = new XMLHttpRequest();
myRequest1.addEventListener('load', executeThisCodeAfterFileLoads1);
myRequest1.addEventListener('error', executeThisCodeIfFileErrors);
myRequest1.open('GET', 'cats.json');
myRequest1.send();

let myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener('load', executeThisCodeAfterFileLoads2);
myRequest2.addEventListener('error', executeThisCodeIfFileErrors);
myRequest2.open('GET', 'dogs.json');
myRequest2.send();
