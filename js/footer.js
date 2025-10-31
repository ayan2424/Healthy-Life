// Yeh script sirf footer.html ko load karega
document.addEventListener('DOMContentLoaded', () => {
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Footer file load nahi hui!');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error(error));
});
