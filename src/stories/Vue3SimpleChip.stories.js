
import { action } from '@storybook/addon-actions'
import Vue3SimpleChip from '../vue3-simple-chip.vue'
import './Vue3SimpleChip.css'

import Search from './assets/icons/search.svg'

export default {
  title: 'vue3-simple-chip',
  component: Vue3SimpleChip
}

const Template = ({ template, ...args }) => ({
  components: { Vue3SimpleChip },
  setup() {
    return {
      args,
      onChipBtnClick: action('onChipBtnClick')
    }
  },
  template: template ?? '<vue3-simple-chip v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined',
  outlined: true
}

export const Rounded = Template.bind({})
Rounded.args = {
  label: 'Rounded',
  rounded: true
}

export const PrimaryAndSecondaryColor = Template.bind({})
PrimaryAndSecondaryColor.args = {
  label: 'Primary and secondary color',
  primaryColor: 'teal',
  secondaryColor: 'white'
}

export const DotColor = Template.bind({})
DotColor.args = {
  label: 'Dot Color',
  dotColor: 'teal'
}

export const UseButton = Template.bind({})
UseButton.args = {
  label: 'Use Button',
  useButton: true,
  buttonClickCallbackData: {
    id: 1,
    label: 'Use Button',
    foo: 'some another data'
  },
  template: '<vue3-simple-chip v-bind="args" @on-button-click="onChipBtnClick" />'
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  label: 'Left Icon',
  template: `<vue3-simple-chip v-bind="args">
    <template #left-icon>
      <img src="${Search}" alt="">
    </template>
  </vue3-simple-chip>`
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  label: 'Right Icon',
  template: `<vue3-simple-chip v-bind="args">
    <template #right-icon>
      <img src="${Search}" alt="">
    </template>
  </vue3-simple-chip>`
}
