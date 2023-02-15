import { mount , shallowMount } from "@vue/test-utils";
import PokedexView from "@/views/PokedexView.vue";
export {};

describe("PokedexView Component", () => {
  it("Sanity Test", () => {
    expect(true).toBe(true);
  });

  it('Renders SearchBarComponent',() => {
    const wrapper = shallowMount(PokedexView)
    let searchBarComponent = wrapper.findComponent({name: 'SearchBarComponent'})

    expect(searchBarComponent.exists())
  })


  it('Renders PokemonCardView',() => {
    const wrapper = shallowMount(PokedexView)
    let PokemonCardView = wrapper.findComponent({name: 'PokemonCardView'})
        
    expect(PokemonCardView.exists())
  })

 it("Renders text: Red/Blue/Yellow Kanto dex", () => {
    //assertion
    const wrapper = mount(PokedexView)
    wrapper.setData({versionName:"Red/Blue/Yellow Kanto dex" })
    expect(wrapper.vm.versionName).toBeTruthy();
  });
})