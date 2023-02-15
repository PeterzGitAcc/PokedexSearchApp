import {mount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue' , () => {
    it("Sanity Test", () => {
        expect(true).toBe(true);
      })

    it('Renders NavbarComponent', () => {
        const wrapper = mount(App, { stubs: 'router-view'  })
    
        expect(wrapper.findComponent({name: "NavbarComponent"}).exists()).toBe(true)

    })
})