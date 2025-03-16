function handleContactForm(event) {
    event.preventDefault(); // Page refresh rokne ke liye

    // Form data collect karein
    const name = document.querySelector('#contact-form input[type="text"]').value;
    const email = document.querySelector('#contact-form input[type="email"]').value;
    const message = document.querySelector('#contact-form textarea').value;

    // Success message dikhayen
    Swal.fire({
        title: 'Message Sent!',
        text: `Thank you, ${name}! We will contact you soon.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Form reset karein (optional)
    document.getElementById('contact-form').reset();
}


document.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});


document.getElementById('progress-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const currentWeight = parseFloat(document.querySelector('#progress-form input[type="number"]').value);
    const targetWeight = parseFloat(document.querySelectorAll('#progress-form input[type="number"]')[1].value);
    const progress = ((currentWeight - targetWeight) / targetWeight * 100).toFixed(2);
    document.getElementById('progress-result').innerText = `Progress: ${progress}%`;
});


document.getElementById('joinForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Form submit rokne ke liye

    // Form data collect karein
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const aadhar = document.getElementById('aadhar').value;

    // Success message dikhayen
    Swal.fire({
        title: 'Success!',
        text: `Thank you, ${name}! Your details have been submitted successfully.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Modal close karein
    const modal = bootstrap.Modal.getInstance(document.getElementById('joinModal'));
    modal.hide();

    // Form reset karein (optional)
    document.getElementById('joinForm').reset();
});