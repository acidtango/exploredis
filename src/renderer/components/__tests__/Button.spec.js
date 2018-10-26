import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders correctly', () => {
    const label = 'Kenobi'
    const wrapper = shallowMount(Button, {
      propsData: { label },
    })
    expect(wrapper.text()).toMatch(label)
  })
})
