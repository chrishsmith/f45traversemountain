/**
 * Testimonial Carousel Module
 * Handles the functionality for the testimonial carousel
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get carousel elements
    const carousel = document.getElementById('testimonialCarousel');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    if (!carousel || !prevButton || !nextButton || !indicatorsContainer) return;
    
    // Get all testimonials
    const testimonials = carousel.querySelectorAll('.testimonial');
    const testimonialCount = testimonials.length;
    
    if (testimonialCount === 0) return;
    
    // Set up state
    let currentIndex = 0;
    let isAnimating = false;
    
    // Create indicator dots
    for (let i = 0; i < testimonialCount; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'testimonial-carousel__indicator';
        indicator.dataset.index = i;
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Get all indicators
    const indicators = indicatorsContainer.querySelectorAll('.testimonial-carousel__indicator');
    
    // Initialize carousel
    updateCarousel();
    
    // Set up event listeners
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
    
    // Auto-advance carousel every 5 seconds
    let autoplayInterval = setInterval(showNextSlide, 5000);
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(showNextSlide, 5000);
    });
    
    /**
     * Show previous slide
     */
    function showPreviousSlide() {
        if (isAnimating) return;
        
        currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
        updateCarousel();
    }
    
    /**
     * Show next slide
     */
    function showNextSlide() {
        if (isAnimating) return;
        
        currentIndex = (currentIndex + 1) % testimonialCount;
        updateCarousel();
    }
    
    /**
     * Go to specific slide
     * @param {number} index - The index of the slide to show
     */
    function goToSlide(index) {
        if (isAnimating || currentIndex === index) return;
        
        currentIndex = index;
        updateCarousel();
    }
    
    /**
     * Update carousel display
     */
    function updateCarousel() {
        isAnimating = true;
        
        // Update transform to show current slide
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Animation complete
        setTimeout(() => {
            isAnimating = false;
        }, 300); // Match this to the CSS transition time
    }
});
