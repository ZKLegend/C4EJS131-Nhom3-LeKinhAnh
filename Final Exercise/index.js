// Get Slide and Slide Content
let catSlide = document.querySelector(".cat-slide");


// Register Button
let prevBtn = document.querySelector('.catPrevBtn');
let nextBtn = document.querySelector('.catNextBtn');


// function chỉ chạy được 1 lần
nextBtn.addEventListener('click', () => {
    catSlide.style.transition = "transform 0.6s ease-in-out";
    catSlide.style.transform = 'translateX('+ (-100) + '%)';
});


prevBtn.addEventListener('click', () => {
    catSlide.style.transition = "transform 0.6s ease-in-out";
    catSlide.style.transform = 'translateX('+ (100) + '%)';
});

// Chưa nghĩ ra cách để slide chạy đến ảnh cuối cùng thì quay lại