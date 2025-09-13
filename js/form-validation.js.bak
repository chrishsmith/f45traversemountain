/**
 * Form Validation Module
 * Handles validation and submission for lead capture forms
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get all forms that need validation
    const forms = document.querySelectorAll('#leadCaptureForm, #ctaForm');
    
    forms.forEach(form => {
        // Add submit event listener to each form
        form.addEventListener('submit', handleFormSubmit);
    });
    
    /**
     * Handle form submission
     * @param {Event} event - The form submit event
     */
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        
        // Validate form fields
        if (!validateForm(form)) {
            return;
        }
        
        // Get form data
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // Format full name for submission
        if (formDataObj.firstName && formDataObj.lastName) {
            formDataObj.fullName = `${formDataObj.firstName} ${formDataObj.lastName}`;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Processing...';
        submitBtn.disabled = true;
        
        // Submit to GoHighLevel
        submitToGoHighLevel(formDataObj, form, submitBtn, originalBtnText);
    }
    
    /**
     * Validate form fields
     * @param {HTMLFormElement} form - The form to validate
     * @returns {boolean} - True if form is valid, false otherwise
     */
    function validateForm(form) {
        let isValid = true;
        
        // Get all required inputs
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            // Remove any existing error messages
            removeErrorMessage(input);
            
            // Check if field is empty
            if (!input.value.trim()) {
                showErrorMessage(input, 'This field is required');
                isValid = false;
                return;
            }
            
            // Validate email format
            if (input.type === 'email' && !validateEmail(input.value)) {
                showErrorMessage(input, 'Please enter a valid email address');
                isValid = false;
                return;
            }
            
            // Validate phone format
            if (input.type === 'tel' && !validatePhone(input.value)) {
                showErrorMessage(input, 'Please enter a valid phone number');
                isValid = false;
                return;
            }
        });
        
        return isValid;
    }
    
    /**
     * Show error message for an input
     * @param {HTMLInputElement} input - The input with error
     * @param {string} message - The error message
     */
    function showErrorMessage(input, message) {
        // Create error element
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.style.color = 'red';
        errorEl.style.fontSize = '1.2rem';
        errorEl.style.marginTop = '0.4rem';
        errorEl.textContent = message;
        
        // Add error class to input
        input.style.borderColor = 'red';
        
        // Insert error message after input
        input.parentNode.appendChild(errorEl);
    }
    
    /**
     * Remove error message for an input
     * @param {HTMLInputElement} input - The input to remove error from
     */
    function removeErrorMessage(input) {
        // Reset input style
        input.style.borderColor = '';
        
        // Remove error message if exists
        const errorEl = input.parentNode.querySelector('.error-message');
        if (errorEl) {
            errorEl.remove();
        }
    }
    
    /**
     * Show success message after form submission
     * @param {HTMLFormElement} form - The submitted form
     */
    function showSuccessMessage(form) {
        // Create success message
        const successEl = document.createElement('div');
        successEl.className = 'success-message';
        successEl.style.backgroundColor = '#28a745';
        successEl.style.color = 'white';
        successEl.style.padding = '1rem';
        successEl.style.borderRadius = '0.4rem';
        successEl.style.marginTop = '1rem';
        successEl.style.textAlign = 'center';
        successEl.textContent = 'Thank you! We will contact you shortly to book your first class.';
        
        // Insert success message after form
        form.parentNode.appendChild(successEl);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successEl.remove();
        }, 5000);
    }
    
    /**
     * Validate email format
     * @param {string} email - The email to validate
     * @returns {boolean} - True if email is valid, false otherwise
     */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    /**
     * Validate phone format
     * @param {string} phone - The phone to validate
     * @returns {boolean} - True if phone is valid, false otherwise
     */
    function validatePhone(phone) {
        // Allow digits, spaces, dashes, parentheses, and plus sign
        const re = /^[0-9\s\-\(\)\+]+$/;
        return re.test(phone) && phone.replace(/[^0-9]/g, '').length >= 10;
    }
    
    /**
     * Submit form data to GoHighLevel
     * @param {Object} formData - The form data to submit
     * @param {HTMLFormElement} form - The form element
     * @param {HTMLButtonElement} submitBtn - The submit button
     * @param {string} originalBtnText - The original button text
     */
    function submitToGoHighLevel(formData, form, submitBtn, originalBtnText) {
        // Get GoHighLevel config
        const locationId = CONFIG.gohighlevel.locationId;
        const apiKey = CONFIG.gohighlevel.apiKey;
        
        // Format the data for GoHighLevel
        const ghlData = {
            firstName: formData.firstName || '',
            lastName: formData.lastName || '',
            email: formData.emailAddress || '',
            phone: formData.phoneNumber || '',
            locationId: locationId,
            tags: CONFIG.gohighlevel.tags,
            source: CONFIG.gohighlevel.source,
            customField: CONFIG.gohighlevel.customFields
        };
        
        // Make API call to GoHighLevel
        fetch('https://rest.gohighlevel.com/v1/contacts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(ghlData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            
            // Reset form
            form.reset();
            
            // Show success message if configured
            if (CONFIG.forms.showSuccessMessage) {
                showSuccessMessage(form);
            }
            
            // Reset button state
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Handle post-submission actions
            if (CONFIG.forms.bookCalendar) {
                // Redirect to booking calendar
                window.location.href = CONFIG.forms.calendarUrl;
            } else if (CONFIG.forms.redirectAfterSubmit) {
                // Redirect to thank you page
                window.location.href = CONFIG.forms.redirectUrl;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            
            // Show error message
            const errorEl = document.createElement('div');
            errorEl.className = 'error-message';
            errorEl.style.backgroundColor = '#dc3545';
            errorEl.style.color = 'white';
            errorEl.style.padding = '1rem';
            errorEl.style.borderRadius = '0.4rem';
            errorEl.style.marginTop = '1rem';
            errorEl.style.textAlign = 'center';
            errorEl.textContent = 'There was an error submitting your form. Please try again.';
            
            // Insert error message after form
            form.parentNode.appendChild(errorEl);
            
            // Reset button state
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Remove error message after 5 seconds
            setTimeout(() => {
                errorEl.remove();
            }, 5000);
        });
    }
});
