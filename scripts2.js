const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");
const pic7 = document.getElementById("pic7");
const pic8 = document.getElementById("pic8");

const pic1a = document.getElementById("pic1a");
const pic2a = document.getElementById("pic2a");
const pic3a = document.getElementById("pic3a");
const pic4a = document.getElementById("pic4a");
const pic5a = document.getElementById("pic5a");
const pic6a = document.getElementById("pic6a");
const pic7a = document.getElementById("pic7a");
const pic8a = document.getElementById("pic8a");

const ariapic = document.getElementById("ariapic");
const pic8dash2 = document.getElementById("pic8-2");
const slider4 = document.getElementById("slider4");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");


const p1title = document.getElementById("p1-title");
const p1content = document.getElementById("p1-content");
const p2title = document.getElementById("p2-title");
const p2content = document.getElementById("p2-content");
const p3title = document.getElementById("p3-title");
const p3content = document.getElementById("p3-content");
const p4title = document.getElementById("p4-title");
const p4content = document.getElementById("p4-content");
const p5title = document.getElementById("p5-title");
const p5content = document.getElementById("p5-content");
const p6title = document.getElementById("p6-title");
const p6content = document.getElementById("p6-content");
const p7title = document.getElementById("p7-title");
const p7content = document.getElementById("p7-content");
const p8title = document.getElementById("p8-title");
const p8content = document.getElementById("p8-content");

const p7dash2content = document.getElementById("p7-2-content");

const ptitle = document.getElementsByClassName("paragraph-title")

const logDiv = document.getElementById("printLog");




// EVENTS

/*
// Click
pic1a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    page1.classList.toggle("blur");
    //pic1.classList.toggle("gone");
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});
*/

// Click #1
pic1a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    page1.classList.toggle("blur");
    pic1a.classList.add("gone");
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});


// Click #2
pic2a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    
    
    
    pic2a.classList.add("gone");
    slider4.classList.toggle("gone");
    //pic2.classList.toggle("gone");
    //pic2.textContent = "blur";
    logEvent(event, "Image blurred");
});




// Click #3
pic3a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    p1title.classList.toggle("zoom");
    p1content.classList.toggle("zoom");
    p2title.classList.toggle("zoom");
    p2content.classList.toggle("zoom");
    p3title.classList.toggle("zoom");
    p3content.classList.toggle("zoom");
    p4title.classList.toggle("zoom");
    p4content.classList.toggle("zoom");
    p5title.classList.toggle("zoom");
    p5content.classList.toggle("zoom");
    p6title.classList.toggle("zoom");
    p6content.classList.toggle("zoom");
    p7title.classList.toggle("zoom");
    p7content.classList.toggle("zoom");
    p8title.classList.toggle("zoom");
    p8content.classList.toggle("zoom");
    pic3a.classList.add("gone");
    //pic2.classList.toggle("gone");
    //pic2.textContent = "blur";
    logEvent(event, "Image blurred");
});


// Click #4
pic4a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    //page1.classList.toggle("brightness")
    pic4a.classList.add("gone");
    //page1.classList.toggle("contrast");
    p1title.classList.toggle("contrast");
    p1content.classList.toggle("contrast");
    p2title.classList.toggle("contrast");
    p2content.classList.toggle("contrast");
    p3title.classList.toggle("contrast");
    p3content.classList.toggle("contrast");
    p4title.classList.toggle("contrast");
    p4content.classList.toggle("contrast");
    p5title.classList.toggle("contrast");
    p5content.classList.toggle("contrast");
    p6title.classList.toggle("contrast");
    p6content.classList.toggle("contrast");
    p7title.classList.toggle("contrast");
    p7content.classList.toggle("contrast");
    p8title.classList.toggle("contrast");
    p8content.classList.toggle("contrast");
    //slider4.classList.toggle("gone");
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});


// Click #5
pic5a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    //page1.classList.toggle("blur");
    page1.classList.toggle("font")
    pic5a.classList.add("gone");
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});


// Click #6
pic6a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    //page1.classList.toggle("blur");
    p6content.classList.toggle("blink")
    pic6a.classList.add("gone");
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});


// Click #7
pic7a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    //page1.classList.toggle("blur");
    pic7a.classList.add("gone");
    p7dash2content.classList.toggle("alt-text")
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});


// Click #8
pic8a.addEventListener("click", (event) => {
    // pic1.classList.toggle("grayscale");
    //page1.classList.toggle("blur");
    pic8a.classList.add("gone");
    //ariapic.classList.toggle("gone");
    pic8dash2.classList.toggle("gone");
    //pic1.textContent = "blur";
    logEvent(event, "Image blurred");
});



// Enter key for brightness
document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp') {
		page1.classList.toggle("brightness");
        pic4a.classList.add("gone");
	}
});


// Enter key for Print
document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		window.print();
	}
});



var slider = document.getElementById("slider");
var page1demo = document.getElementById("page-1");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


slider.addEventListener("mousemove", function() {
var x = slider.value;
var y = x + '%';
var filterx = 'brightness(' + x + '%)'; 
page1demo.style.filter = filterx;
//pic3a.gone.style.filter = filter;
//var brightness3 = 'brightness(' + x3 + '%)';
//pic3a.gone.filter = brightness3;
//var brightness3 = x + '%' ;
})


/*
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
*/