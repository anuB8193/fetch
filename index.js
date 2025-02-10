fetch('https://msu-webdev.github.io/api/start.json')
  .then(response => response.text())
  .then(text => console.log(text))
