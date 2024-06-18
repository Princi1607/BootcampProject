const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  const name = document.getElementById('name').value;
  alert(`Welcome ${name}, we will get back to you soon!`); 
}
