import { mount } from '@vue/test-utils'
import Badge from '@/components/Badge.vue'

describe('<Badge />', () => {
  it('renders children', () => {
    const slots = {
      default: ['STR'],
    }
    const wrapper = mount(Badge, { slots })
    expect(wrapper).toMatchSnapshot()
  })
})
