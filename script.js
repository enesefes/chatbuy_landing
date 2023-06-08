const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;

  const data = {
    "fields": {
      "Name": emailValue,
      "Email": emailValue,
    }
  };

  fetch('https://api.airtable.com/v0/appiGj2zOn44fGWxY/Mails', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + config.apiKey, 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(() => {
      // Reset the form after successful submission
      form.reset();

      // Show the success message
      const customAlert = document.getElementById('custom_alert');
      customAlert.style.transform = "translateY(0)";
      customAlert.textContent = "You have been successfully added";

      // Hide the success message after 2 seconds
      setTimeout(() => {
        customAlert.style.transform = "translateY(-500px)";
      }, 2000);
    })
    .catch(error => console.error(error));
}
