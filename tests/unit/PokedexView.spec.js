import { mount } from '@vue/test-utils';
import PokedexView from '@/views/PokedexView.vue';

//Test components exist
describe('PokedexView.vue' , () => {
    it('Renders all child components', () => {
        const wrapper = mount(PokedexView)
    
        expect(wrapper.findComponent({name: "SearchBarComponent"}).exists()).toBe(true)

    })
})
//Test 