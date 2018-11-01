import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('<Button />', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Button, {
      slots: ['Hello there'],
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with disabled state', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
      slots: ['Hello there'],
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a different type', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'submit',
      },
      slots: ['Hello there'],
    })
    expect(wrapper).toMatchSnapshot()
  })
})
