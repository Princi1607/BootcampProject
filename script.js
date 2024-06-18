const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;

  alert(`Welcome ${name}, we will get back to you soon!`);
});
