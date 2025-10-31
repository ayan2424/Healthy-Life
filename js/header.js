// Yeh script sirf header.html ko load karega
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Header file load nahi hui!');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error(error));
});
