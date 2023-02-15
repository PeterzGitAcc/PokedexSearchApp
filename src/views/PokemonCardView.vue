<template>
  <div class="card" @click="getDetails(pokemonNumber)" >
<p>{{pokemonNumber}}.{{pokemonNameCard}}</p>
<img :src="spritePath + pokemonNumber + '.png'" alt="pokemon sprite" />
</div>
</template>

<script>
export default {
name: 'PokemonCardView',
props: ["pokemonNum","pokemonName","sprites"],
emits: ['resultDetails'],
data(){
    return{
    pokemonNumber: this.pokemonNum,
    pokemonNameCard: this.pokemonName,
    spritePath: this.sprites,
    }
},
  methods:{
    getDetails(pokemonNumber){
      this.$emit('resultDetails',pokemonNumber)
    }
  },

}
</script>

<style scoped>

h2{
  font-style: bold;
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

