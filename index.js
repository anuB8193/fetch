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

const nintendo_bits=8
const super_nintendo_bits=16
let total_bits= nintendo_bits*super_nintendo_bits
console.log(total_bits)
