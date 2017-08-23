
let catsArray = [
{
	name: 'Glower', 
	color: 'Green', 
	url:'https://catsaspets.files.wordpress.com/2010/04/greenpetsecoliving.jpg',
	sport: 'Web Developer'
},
{
	name: 'Slugger', 
	color: 'Red', 
	url:'http://amolife.com/image/images/stories/Animals/Cats/red_cat_%20(19).jpg',
	sport: 'Actor'
},
{
	name: 'FrooFroo', 
	color: 'Pink', 
	url:'https://i.pinimg.com/736x/29/1b/3d/291b3de6fc97709bb4799b3ecc8f4989--pink-cat-funny-stuff.jpg',
	sport: 'Kim Kardashian Lookalike'
}];

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