document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const registrationForm = document.getElementById('registration-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            showConfirmationMessage();
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            showConfirmationMessage();
        });
    }
});

function showConfirmationMessage() {
    const bookingPage = document.querySelector('.booking-page');
    const registrationPage = document.querySelector('.registration-page');
    const confirmationMessage = document.querySelector('.confirmation-message');

    if (bookingPage) bookingPage.style.display = 'none';
    if (registrationPage) registrationPage.style.display = 'none';
    confirmationMessage.style.display = 'block';
}

function goBackToHome() {
    window.location.href = 'page1.html#latest-news';
}

