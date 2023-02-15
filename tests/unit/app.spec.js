import {mount} from '@vue/test-utils';
import App from '@/App';


describe('App.vue' , () => {
    it('Renders NavbarComponent', () => {
        const wrapper = mount(App)
    
        expect(wrapper.findComponent({name: "NavbarComponent"}).exists()).toBe(true)

    })
})