fetch('https://msu-webdev.github.io/api/start.json')
  .then(response => response.text())
  .then(text => console.log(text))

const dist_earth_moon = 238855
const moon_diameter = 2159.1
let num_moons = dist_earth_moon / moon_diameter
console.log(Math.floor(num_moons))

const fall_2024 = 41234 + 7854 + 3001
const fall_2023 = 40483 + 7780 + 3053
let perc_change = (fall_2024 - fall_2023) / fall_2023
console.log(Math.round(perc_change * 1000))
