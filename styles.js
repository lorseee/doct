document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const imageCount = 60; // adjust the number of images
    const imageSize = 25; // adjust the size of the images
    const rotationRange = 180; // adjust the rotation range

    // Store positions of placed images
    const positions = [];

    function isOverlapping(x, y) {
        for (let i = 0; i < positions.length; i++) {
            const pos = positions[i];
            const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
            if (distance < imageSize) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < imageCount; i++) {
        const img = document.createElement('img');
        img.src = 'pop.png'; // replace with your small image file
        img.className = 'image';

        let x, y;

        // Try random positions until a non-overlapping one is found
        do {
            x = Math.floor(Math.random() * (body.offsetWidth - imageSize));
            y = Math.floor(Math.random() * (body.offsetHeight - imageSize));
        } while (isOverlapping(x, y));

        // Store the position
        positions.push({ x, y });

        img.style.top = `${y}px`;
        img.style.left = `${x}px`;

        // Random rotation
        const rotation = Math.floor(Math.random() * rotationRange);
        img.style.transform = `rotate(${rotation}deg)`;

        // Add the image to the body
        body.appendChild(img);
    }
});
