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
        <div  class="col-md-6" >
          <h2>Base Stats</h2>

          <ul v-for="(statList, index) in baseStats" :key="index">
            <li>
              <h4>{{ statList.stat.name }} : {{ statList.base_stat }}</h4>
            </li>
            <li>Effort: {{ statList.effort }}</li>
          </ul>
        </div>
      
      <div class="col-md-6" >
        <h2>Abilities</h2>
        <ul v-for="(ability, index) in abilities" :key="index">
          <li>
            <h4>{{ ability.ability.name }}</h4>
          </li>
        </ul>
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
  computed: {},
  spritePath() {
    return this.$route.params.sprite;
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
  methods: {},
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

h2{
  align-content: center;
}

li {
  text-align: center;
  list-style: none;
}

</style>
