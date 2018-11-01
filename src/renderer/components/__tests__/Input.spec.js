import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('<Input />', () => {
  it('renders by default', () => {
    const wrapper = shallowMount(Input)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a label', () => {
    const propsData = {
      label: 'Name',
    }
    const wrapper = shallowMount(Input, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a placeholder', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Name',
    }
    const wrapper = shallowMount(Input, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with disabled state', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Anakin Skywalker',
      disabled: true,
    }
    const wrapper = shallowMount(Input, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with readOnly state', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Name',
      readOnly: true,
    }
    const wrapper = shallowMount(Input, { propsData })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with an initial value', () => {
    const propsData = {
      label: 'Name',
      placeholder: 'Name',
      value: 'General Kenobi',
    }
    const wrapper = shallowMount(Input, { propsData })
    expect(wrapper).toMatchSnapshot()
  })
})
