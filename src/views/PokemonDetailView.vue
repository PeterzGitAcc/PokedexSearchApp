<template>
  <div class="container">
    <h1>Pokemon Details</h1>
    <div class="row">
      <h1>{{ pokemonNumber }}. {{ pokemonName }}</h1>
      <img
        :src="spritePath + this.pokemonNumber + '.png'"
        alt="pokemon sprite"
      />
    </div>
    <!-- Base stats -->
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2>Base Stats</h2>
        <table class="table-responsive table-bordered">
          <tr>
            <th scope="col"><h4>Stat</h4></th>
            <th scope="col"><h4>Effort</h4></th>
          </tr>
          <tr v-for="(statList, index) in baseStats" :key="index">
            <td>{{ statList.stat.name }} : {{ statList.base_stat }}</td>
            <td>{{ statList.effort }}</td>
          </tr>
        </table>
      </div>

      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2>Abilities</h2>

        <h4 v-for="(ability, index) in abilities" :key="index">
          {{ ability.ability.name }} <br />
        </h4>
        <br />
        <h2>Evolutions</h2>
        <h4>{{ pokemonEvoChain }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent.vue";
export default {
  name: "PokemonDetailView",
  data() {
    return {
      pokemonNumber: this.$route.params.id,
      pokemonName: "",
      pokemonSpeciesURL: "",
      pokemonEvolutionURL: "",
      pokemonEvoChain: [],
      baseStats: [],
      abilities: [],
      pokeInfo: "https://pokeapi.co/api/v2/pokemon/",
      spritePath:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    };
  },
  mounted() {
    axios
      .get(this.pokeInfo + this.pokemonNumber)
      .then((response) => {
        this.pokemonName = response.data.name;
        this.baseStats = response.data.stats;
        this.abilities = response.data.abilities;
        this.pokemonSpeciesURL = response.data.species.url;
      })
      .then(async () => {
        await axios
          .get(this.pokemonSpeciesURL)
          .then((response) => {
            this.pokemonEvolutionURL = response.data.evolution_chain.url;
          })
          .catch((error) => console.log(error));
      })
      .then(async () => {
        await axios
          .get(this.pokemonEvolutionURL)
          .then((response) => {
            this.pokemonEvoChain =
              response.data["chain"]["evolves_to"][0]["species"]["name"];
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  },
  components: {
    NavbarComponent,
  },
};
</script>
<style scoped>
.img {
  max-width: 50%;
  height: auto;
}

h2 {
  align-content: center;
  color: goldenrod;
}

div{
  margin-top: 10px;
}
</style>
