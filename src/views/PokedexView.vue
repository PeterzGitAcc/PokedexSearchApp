<template>
    <h1>{{rName}}</h1>
    <div>
      <SearchBarComponent v-if="is_data_fetched" :pokemon-search-data="pokemonEntries"  :sprites="spritePath"/>
    </div>
    <div class="wrapper">
<div v-for="poke in pokemonEntries" :key="poke.entry_number" class="card">
<p>{{poke.entry_number}}.{{poke.pokemon_species.name}}</p>
<img :src="spritePath + poke.entry_number + '.png'" alt="pokemon sprite" />
</div>
    </div>

</template>

<script>
// https://pokeapi.co/docs/v2
import axios from 'axios';
import SearchBarComponent from '../components/SearchBarComponent.vue';
export default {
    name: "PokedexView",
    data(){
        return{
            pokedexData: [],
            pokemonEntries: [],
            rName: '',
            is_data_fetched: false,
            spritePath: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        }
    },
    mounted () {
    axios.get('https://pokeapi.co/api/v2/pokedex/2/')
    .then(response=> {this.pokedexData = response.data; this.pokemonEntries = response.data.pokemon_entries;this.rName = response['data']['descriptions'][3]['description'];this.is_data_fetched = true;})
    .catch(error => console.log(error))
    },
    components: {
        SearchBarComponent,
    },

};
</script>

<style scoped>
.wrapper {
  padding-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

.wrapperSearch {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 2px black dotted;
}

.card {
  border: 3px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}
.card p:first-child {
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
}

.card p:last-child {
  font-style: italic;
  font-size: 0.8rem;
}
</style>