let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const totalSlides = slideImages.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(currentSlide);

// popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
    document.body.style.overflow = ''; // Enable scrolling again
}


function showModal_1() {
    document.getElementById('modal-dialog_1').style.display = 'block';
    document.getElementById('modal-overlay_1').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
}

function hideModal_1() {
    document.getElementById('modal-dialog_1').style.display = 'none';
    document.getElementById('modal-overlay_1').style.display = 'none';
    document.body.style.overflow = ''; // Enable scrolling again
}

function makeContact_1() {
    alert('Make Contact button clicked!');
    // Add any additional functionality here
}