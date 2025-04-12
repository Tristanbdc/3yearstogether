javscript: // Add event listener to flip on click
document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', function() {
        const flipper = this.querySelector('.flipper');
        flipper.classList.toggle('flip');  // Toggle the flip class on click
    });
});