/**
 * FAQ Accordion Module
 * Handles expanding/collapsing FAQ items
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get all FAQ question elements
    const faqQuestions = document.querySelectorAll('[data-faq-toggle]');
    
    if (faqQuestions.length === 0) return;
    
    // Add click event to each FAQ question
    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFaqItem);
    });
    
    /**
     * Toggle FAQ item open/closed state
     * @param {Event} event - Click event
     */
    function toggleFaqItem(event) {
        // Get the FAQ item (parent of the clicked question)
        const faqItem = event.currentTarget.closest('.faq__item');
        
        if (!faqItem) return;
        
        // Toggle active class
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items first
        document.querySelectorAll('.faq__item').forEach(item => {
            item.classList.remove('active');
        });
        
        // If the clicked item wasn't active, open it
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }
});
