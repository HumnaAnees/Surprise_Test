let currentIndex = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + items.length) % items.length;
    
    items[currentIndex].classList.add('active');
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const inner = document.querySelector('.carousel-inner');
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
