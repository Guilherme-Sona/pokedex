const image = document.querySelector('.pokedex__image')
const name = document.querySelector('.pokedex__name')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const type = document.getElementById('type')

function searchPokemon() {
  const number = document.getElementById('pokeNumberInput').value

  fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.json())
    .then(data => {
      image.src = data.sprites.front_default
      name.textContent = data.name
      height.textContent = `${data.height / 10} m`
      weight.textContent = `${data.weight / 10} kg`
      type.textContent = data.types.map(t => t.type.name).join(', ')
    })
    .catch(error => console.log(error))
}
