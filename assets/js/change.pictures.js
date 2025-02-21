// List of background images (can be URLs or paths to your images)
const images = [
    'url(../../banner.jpg)', 
    'url(../../beef_rendang.jpg)', 
    'url(../../burek.jpg)'
]; 

let currentIndex = 0; // Start with the first image

function changeBackgroundImage() {
    // Update the background-image of the element
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('container').style.backgroundImage = images[currentIndex];
}

// Change the background image every 10 seconds
setInterval(changeBackgroundImage, 10000);
