<template>
  <input type="text" v-model="search" placeholder="Search Pokemon" />
  <div v-if="search && filteredList.length" class="wrapperSearch">
  <div  v-for="poke in filteredList" :key="poke.entry_number" class="card" @click="getDetails(poke.pokemon_species.name)">
    <p>{{poke.entry_number}}.{{poke.pokemon_species.name}}</p>
<img :src="spritePath + poke.entry_number + '.png'" alt="pokemon sprite" />
  </div>
</div>
  <div v-if="search && !filteredList.length">
    <p style="color:red">No results found!</p>
  </div>

</template>

<script>
export default {
  name: "SearchBarComponent",
  props: ["pokemonSearchData","sprites"],
  data() {
    return {
      search: "",
      pokeEnt: this.pokemonSearchData,
      spritePath: this.sprites,
    };
  },
  computed: {
    filteredList() {
      return this.pokeEnt.filter((poke) =>
        poke["pokemon_species"]["name"].includes(this.search.toLowerCase())
      );
    },
  },
  emits: ['resultDetails'],
  methods:{
    getDetails(pokemonName){
      this.$emit('resultDetails',pokemonName)
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  /* background: white url("assets/search-icon.svg") no-repeat 15px center; */
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.error {
  background-color: tomato;
}

.wrapperSearch {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 3px red dotted;
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
