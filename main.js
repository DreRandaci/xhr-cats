
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
}

function writeToDom(string) {
	container.innerHTML = string;
}

domString(catsArray);