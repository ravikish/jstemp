function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperience').value;
    // Display the feedback confirmation
    alert('Thank you for your valuable feedback');

    // Show the user information
    document.getElementById('userName').textContent = username;
    document.getElementById('userAge').textContent = age;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job;
    document.getElementById('userDesignation').textContent = designation;
    document.getElementById('userProductChoice').textContent = productType;
    document.getElementById('userFeedback').textContent = feedback;
    document.getElementById('userExperienceText').textContent = experience;
    document.getElementById('userInfo').style.display = 'block';
}

// Attach the event listener to the button
document.getElementById('submitBtn').onclick = submitFeedback;

// Allow the Enter key to submit the form
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
