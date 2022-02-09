async function nextPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const pokemon = await res.json();
  console.log(pokemon.results[0]);

  document.getElementById("tr").textContent = pokemon.results.name;
}
nextPokemon();
