import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('<Button />', () => {
  it('renders a label', () => {
    const propsData = {
      label: 'Name',
    }
    const wrapper = shallowMount(Button, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a placeholder', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Name',
    }
    const wrapper = shallowMount(Button, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with disabled state', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Anakin Skywalker',
      disabled: true,
    }
    const wrapper = shallowMount(Button, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with readOnly state', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Name',
      readOnly: true,
    }
    const wrapper = shallowMount(Button, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with an initial value', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Name',
      value: 'General Kenobi',
    }
    const wrapper = shallowMount(Button, { propsData })
    expect(wrapper).toMatchSnapshot()
  })
})
