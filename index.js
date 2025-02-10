fetch('https://msu-webdev.github.io/api/start.json')
  .then(response => response.text())
  .then(text => console.log(text))

const dist_earth_moon = 238855
const moon_diameter = 2159.1
let num_moons = dist_earth_moon / moon_diameter
console.log(Math.floor(num_moons))
