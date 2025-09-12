/**
 * Configuration file for F45 Landing Page
 * Contains API keys, location IDs, and other settings
 */

const CONFIG = {
    // GoHighLevel API Configuration
    gohighlevel: {
        locationId: 'REPLACE_WITH_YOUR_LOCATION_ID', // Get this from your GoHighLevel account URL or settings
        apiKey: 'REPLACE_WITH_YOUR_API_KEY', // Get this from Settings > API & Webhooks
        tags: ['Website Lead', 'F45 Trial'], // Tags to apply to new contacts
        source: 'F45 Landing Page', // Source attribution
        customFields: {
            trial_type: '7-Day Trial',
            lead_source: 'Website',
            location: 'Traverse Mountain',
            offer_type: '$7 Trial',
            fitness_level: 'New Member'
        }
    },
    
    // Form submission settings
    forms: {
        redirectAfterSubmit: false, // Set to true to redirect after form submission
        redirectUrl: '/thank-you.html', // URL to redirect to after successful form submission
        showSuccessMessage: true, // Show success message after form submission
        
        // GoHighLevel calendar booking (optional)
        bookCalendar: false, // Set to true to redirect to booking calendar after form submission
        calendarUrl: 'https://calendly.com/f45traversemountain/consultation' // Replace with your actual booking URL
    }
};
