





// generate 7 random numbers and store in array
let numbers = []
for(i=0; i<7; i++){
	numbers.push(Math.floor(Math.random() * (4 - 1 + 1)) + 1)
}
console.log(numbers)

// assigning random images to html using the random numbers in the array
document.getElementById('landing-image').style.backgroundImage = `url("./img/landing_0${numbers[0]}.jpg")`;
document.getElementById('group-1').src = `./img/urban_0${numbers[1]}.jpg`;
document.getElementById('group-2').src = `./img/estate_0${numbers[2]}.jpg`;
document.getElementById('group-3').src = `./img/construction_0${numbers[3]}.jpg`;
document.getElementById('group-4').src = `./img/survey_0${numbers[4]}.jpg`;
document.getElementById('group-5').src = `./img/event_0${numbers[5]}.jpg`;
document.getElementById('group-6').src = `./img/market_0${numbers[6]}.jpg`;

// animate smooth scrolling when clicking "view work" button
$('#view-work').on('click', function(){
	const images = $('#images').position().top;

	$('html, body').animate(
		{
			scrollTop: images
		},900
	);
});




