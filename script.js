// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for image links
function showModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc; // Set the image source
    modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
}

// Add event listeners to modal close button
document.querySelector('#modal .close').addEventListener('click', closeModal);

// Optionally, allow clicking outside the image to close the modal
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});
