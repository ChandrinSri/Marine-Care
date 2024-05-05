var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(imgSrc) {
    fullImg.src = imgSrc;
    fullImgBox.style.display = "flex";
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

var fullImgBox_jf = document.getElementById("fullImgBox_jf");
var fullImg_jf = document.getElementById("fullImg_jf");
var fullImgBox_sf = document.getElementById("fullImgBox_sf");
var fullImg_sf = document.getElementById("fullImg_sf");
function openFullImg_jf(imgSrc) {
    fullImg_jf.src = imgSrc;
    fullImgBox_jf.style.display = "flex";
}
function openFullImg_sf(imgSrc) {
    fullImg_sf.src = imgSrc;
    fullImgBox_sf.style.display = "flex";
}
function closeFullImg_jf() {
    fullImgBox_jf.style.display = "none";
}
function closeFullImg_sf() {
    fullImgBox_sf.style.display = "none";
}

var fullImgBox_tur = document.getElementById("fullImgBox_tur");
var fullImg_tur = document.getElementById("fullImg_tur");
var fullImgBox_shel = document.getElementById("fullImgBox_shel");
var fullImg_shel = document.getElementById("fullImg_shel");
function openFullImg_tur(imgSrc) {
    fullImg_tur.src = imgSrc;
    fullImgBox_tur.style.display = "flex";
}
function openFullImg_shel(imgSrc) {
    fullImg_shel.src = imgSrc;
    fullImgBox_shel.style.display = "flex";
}
function closeFullImg_shel() {
    fullImgBox_shel.style.display = "none";
}
function closeFullImg_tur() {
    fullImgBox_tur.style.display = "none";
}
var fullImgBox_fish = document.getElementById("fullImgBox_fish");
var fullImg_fish = document.getElementById("fullImg_fish");
var fullImgBox_mam = document.getElementById("fullImgBox_mam");
var fullImg_mam = document.getElementById("fullImg_mam");
function openFullImg_fish(imgSrc) {
    fullImg_fish.src = imgSrc;
    fullImgBox_fish.style.display = "flex";
}
function openFullImg_mam(imgSrc) {
    fullImg_mam.src = imgSrc;
    fullImgBox_mam.style.display = "flex";
}
function closeFullImg_fish() {
    fullImgBox_fish.style.display = "none";
}
function closeFullImg_mam() {
    fullImgBox_mam.style.display = "none";
}

// Get all radio inputs
const radioInputs = document.querySelectorAll('input[type="radio"]');

// Add event listener to each radio input
radioInputs.forEach(input => {
    input.addEventListener('change', () => {
        const category = input.id; // Get the category from the ID of the radio input
        filterImages(category); // Call the function to filter images based on the selected category
    });
});

function filterImages(category) {
    const images = document.querySelectorAll('.gallery-img'); // Get all images

    // Loop through each image
    images.forEach(image => {
        const imageCategory = image.getAttribute('data-category'); // Get the category of the image

        // Check if the image category matches the selected category or if 'All photos' is selected
        if (category === 'all' || imageCategory === category) {
            image.style.display = 'block'; // Show the image
        } else {
            image.style.display = 'none'; // Hide the image
        }
    });
}


  