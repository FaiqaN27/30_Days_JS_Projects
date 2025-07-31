const scriptURL = 'https://script.google.com/macros/s/AKfycbzdQ1yDoID8uxjzHvU-kFrnZ3Jy0IxjXYSeVj3-hLcZVeF6AkOwNcQszKmvdNYQ2TkUqw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})