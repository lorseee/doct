// script.js
const body = document.body;
const imageCount = 100; // adjust the number of images
const imageSize = 20; // adjust the size of the images
const rotationRange = 360; // adjust the rotation range
const spacingRange = 50; // adjust the spacing range

for (let i = 0; i < imageCount; i++) {
    const img = document.createElement('img');
    img.src = "images\search.png"; // replace with your small image file
    img.className = 'image';
    
    // Random position
    const x = Math.floor(Math.random() * (body.offsetWidth - imageSize));
    const y = Math.floor(Math.random() * (body.offsetHeight - imageSize));
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    
    // Random rotation
    const rotation = Math.floor(Math.random() * rotationRange);
    img.style.transform = `rotate(${rotation}deg)`;
    
    // Add the image to the body
    body.appendChild(img);
}