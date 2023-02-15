<template>
  <h1>{{ versionName }}</h1>
  <div>
    <SearchBarComponent
      v-if="is_data_fetched"
      :pokemon-search-data="pokemonEntries"
      :sprites="spritePath"
      @result-details="details"
    />
  </div>
  <div class="wrapper">
    <!-- <div v-for="poke in pokemonEntries" :key="poke.entry_number" class="card" @click="details(poke.entry_number)" >
<p>{{poke.entry_number}}.{{poke.pokemon_species.name}}</p>
<img :src="spritePath + poke.entry_number + '.png'" alt="pokemon sprite" />
</div> -->
    <div
      v-for="poke in pokemonEntries"
      :key="poke.entry_number"
      @click="details(poke.entry_number)"
    >
      <PokemonCardView
        v-if="is_data_fetched"
        :pokemon-num="poke.entry_number"
        :pokemon-name="poke.pokemon_species.name"
        :sprites="spritePath"
        @result-details="details"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBarComponent from "../components/SearchBarComponent.vue";
import PokemonCardView from "./PokemonCardView.vue";
import router from "../router";
export default {
  name: "PokedexView",
  data() {
    return {
      pokedexData: [],
      pokemonEntries: [],
      versionName: "",
      is_data_fetched: false,
      spritePath:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    };
  },
  methods: {
    details(pokemonNumber) {
      router.push({ path: `/pokemon/${pokemonNumber}` });
    },
  },
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokedex/2/")
      .then((response) => {
        this.pokedexData = response.data;
        this.pokemonEntries = response.data.pokemon_entries;
        this.versionName = response["data"]["descriptions"][3]["description"];
        this.is_data_fetched = true;
      })
      .catch((error) => console.log(error));
  },
  components: {
    SearchBarComponent,
    PokemonCardView,
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

/* .wrapperSearch {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 2px black dotted;
} */
/* 
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
} */
</style>
