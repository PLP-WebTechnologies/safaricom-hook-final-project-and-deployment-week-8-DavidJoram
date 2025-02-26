document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const submitBtn = document.getElementById("submitBtn");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page refresh
        
        let emailValid = validateEmail(emailInput.value);
        let phoneValid = validatePhone(phoneInput.value);
        
        if (emailValid && phoneValid) {
            showSuccessMessage();
        } else {
            alert("Please enter valid details!");
        }
    });
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePhone(phone) {
        const phoneRegex = /^\+?254[17]\d{8}$/; // Kenyan phone format
        return phoneRegex.test(phone);
    }
    
    function showSuccessMessage() {
        const messageDiv = document.getElementById("successMessage");
        messageDiv.innerHTML = "<p style='color:green;'>Order submitted successfully!</p>";
    }
});
