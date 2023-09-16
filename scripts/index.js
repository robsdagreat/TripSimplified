document.addEventListener("DOMContentLoaded", () => {
    const overlays = document.querySelectorAll(".overlay");
    
    overlays.forEach((overlay) => {
        const images = overlay.querySelectorAll("img");
        let currentImageIndex = 0;

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.style.opacity = 1;
                } else {
                    image.style.opacity = 0;
                }
            });
        }

        showImage(currentImageIndex);

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }, 8000);
    });
});


const text = `Welcome to Trip Simplified Your Journey Begins Here!
Embark on a seamless travel experience with Trip Simplified, your all-in-one destination for modern transportation solutions. Whether you're planning a cross-country adventure or a daily commute, we're here to redefine the way you travel.`;

const delay = 50; // Delay between each character (milliseconds)
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
  } else {
    // Clear the text and reset index when the entire text is typed
    document.getElementById("typed-text").textContent = "";
    i = 0;
  }
}

// Start the typing effect loop when the page loads
window.onload = function() {
  setInterval(typeEffect, delay + 50); // Add a bit of extra delay after each loop
};

