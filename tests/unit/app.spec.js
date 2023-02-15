import {shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue' , () => {
    it('Renders NavbarComponent', () => {
        const wrapper = shallowMount(App, { stubs: 'router-view'  })
    
        expect(wrapper.findComponent({name: "NavbarComponent"}).exists()).toBe(true)

    })
})