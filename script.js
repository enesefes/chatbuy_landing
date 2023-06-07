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

  fetch('https://api.airtable.com/v0/appiGj2zOn44fGWxY/Mails', { // API documentation > AUTHENTICATION kısmından url'i bulabilirsin
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + config.apiKey, // Senin API key
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(data)
    
  })
  .then(response => response.json())
        .catch(error => console.error(error));
    const customAlert = document.getElementById('custom_alert')
setTimeout(() => {
    
customAlert.style.transform = "translateY(0)"
customAlert.textContent = "You have been successfully added"
setTimeout(() => {
    customAlert.style.transform = "translateY(-500px)"
    
    
}, 2000);
}, 1000);

}









