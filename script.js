const images = [
  "https://source.unsplash.com/400x250/?nature,water",
  "https://source.unsplash.com/400x250/?mountains,forest",
  "https://source.unsplash.com/400x250/?city,night",
  "https://source.unsplash.com/400x250/?ocean,beach",
];

let currentIndex = 0;

const slider = document.getElementById("slider");
function updateImage() {
  slider.src = images[currentIndex];
}
updateImage();
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}
