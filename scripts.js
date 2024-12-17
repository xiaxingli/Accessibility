const pic2 = document.getElementById("pic2");
const pic1 = document.getElementById("pic1");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const logDiv = document.getElementById("printLog");


// EVENTS

// Click
pic2.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    pic1.classList.toggle("blur");
    pic2.classList.toggle("gone");
pic2.textContent = "blur";
    logEvent(event, "Image blurred");
});






// Enter key for Print

document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		window.print();
	}
});




// Enter A for access

document.addEventListener('keydown', (event) => {
	if (event.key === 'A') {
		pic3.classList.toggle("zoom");
        pic4.classList.toggle("gone");
	}
});