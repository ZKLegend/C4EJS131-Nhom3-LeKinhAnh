// Get Slide and Slide Content

let posterSlide = document.querySelector(".poster-slide");
let slideContent = document.querySelectorAll(".slide-content");

// Register Button
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');


let counter = 0;
let size = slideContent[0].clientWidth;

// Poster Slide
nextBtn.addEventListener('click', () => {
    if (counter > slideContent.length - 2) {
        counter = -1;
    }
    posterSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    posterSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    console.log(counter);
    console.log(slideContent.length);
});


prevBtn.addEventListener('click', () => {
    if (counter < 1) {
        counter = slideContent.length;
    }
    posterSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    posterSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    console.log(counter);
});



// Category 1 Slide Function
let catSlide = document.querySelector('.cat-slide');
let catItem = document.querySelectorAll('.cat-item');


let catprevBtn = document.querySelector('.catPrevBtn');
let catnextBtn = document.querySelector('.catNextBtn');


catnextBtn.addEventListener('click', () => {
    if (counter > (catItem.length/5) - 2) {
        counter = -1;
    }
    catSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    catSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    console.log(counter);
    console.log(catItem.length);
});

catprevBtn.addEventListener('click', () => {
    if (counter < 1) {
        counter = (catItem.length/5);
    }
    catSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    catSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    console.log(counter);
});