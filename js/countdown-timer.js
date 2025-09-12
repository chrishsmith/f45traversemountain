/**
 * Countdown Timer Module
 * Creates a countdown timer that updates in real-time
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get all countdown timers on the page
    const countdownElements = document.querySelectorAll('#offerCountdown');
    
    if (countdownElements.length === 0) return;
    
    // Initialize each countdown timer
    countdownElements.forEach(countdownElement => {
        initializeCountdown(countdownElement);
    });
    
    /**
     * Initialize countdown timer
     * @param {HTMLElement} countdownElement - The countdown container element
     */
    function initializeCountdown(countdownElement) {
        // Get display elements
        const hoursElement = countdownElement.querySelector('#countHours');
        const minutesElement = countdownElement.querySelector('#countMinutes');
        const secondsElement = countdownElement.querySelector('#countSeconds');
        
        if (!hoursElement || !minutesElement || !secondsElement) {
            console.error('Countdown elements not found');
            return;
        }
        
        // Set end time (24 hours from now by default)
        // You can customize this to set a specific end date/time
        const endTime = getEndTime();
        
        // Update countdown immediately
        updateCountdown();
        
        // Update countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);
        
        /**
         * Update countdown display
         */
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = endTime - now;
            
            if (timeLeft <= 0) {
                // Countdown finished
                clearInterval(countdownInterval);
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
                return;
            }
            
            // Calculate hours, minutes, seconds
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Update display with leading zeros
            hoursElement.textContent = formatNumber(hours);
            minutesElement.textContent = formatNumber(minutes);
            secondsElement.textContent = formatNumber(seconds);
        }
        
        /**
         * Get end time for countdown (24 hours from now by default)
         * @returns {number} - End time in milliseconds
         */
        function getEndTime() {
            // Check if there's a saved end time in localStorage
            const savedEndTime = localStorage.getItem('offerCountdownEndTime');
            
            if (savedEndTime && !isNaN(savedEndTime)) {
                const parsedEndTime = parseInt(savedEndTime, 10);
                const now = new Date().getTime();
                
                // If saved end time is in the future, use it
                if (parsedEndTime > now) {
                    return parsedEndTime;
                }
            }
            
            // Otherwise, set new end time (24 hours from now)
            const newEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
            
            // Save to localStorage for persistence across page refreshes
            localStorage.setItem('offerCountdownEndTime', newEndTime.toString());
            
            return newEndTime;
        }
        
        /**
         * Format number with leading zero if needed
         * @param {number} num - Number to format
         * @returns {string} - Formatted number string
         */
        function formatNumber(num) {
            return num < 10 ? `0${num}` : num.toString();
        }
    }
});
