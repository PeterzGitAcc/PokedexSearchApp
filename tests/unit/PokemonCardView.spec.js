import { mount } from '@vue/test-utils'
import PokemonCardView from '@/views/PokemonCardView.vue'

//test props , test emit 
describe("PokemonCardView", () => {
    it("Sanity Test", () => {
      expect(true).toBe(true);
    });

    it("PokemonCardView props test", () => {
        const wrapper = mount(PokemonCardView,{
            propsData:{
                pokemonNum: "1",
                pokemonName: "examplePokemon" ,
                sprites: "exampleLink/"

            },
        })
            expect(wrapper.props().pokemonNum).toBe('1')
            expect(wrapper.props().pokemonName).toBe("examplePokemon")
            const imgSrc =  wrapper.props().sprites+wrapper.props().pokemonNum
            expect(imgSrc).toBe("exampleLink/1")
        })
        it("PokemonCardView on click emits details", () => { 
            const wrapper = mount(PokemonCardView)
            wrapper.findComponent('.card').trigger('click')
            expect(wrapper.emitted()).toHaveProperty('resultDetails')
        })
      });
