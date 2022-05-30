<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs
} from 'vue'

export default /* #__PURE__ */defineComponent({
  name: 'Vue3SimpleChip',
  emits: ['on-button-click'],
  props: {
    label: {
      type: String,
      default: ''
    },
    primaryColor: {
      type: String,
      default: '#e0e0e0'
    },
    secondaryColor: {
      type: String,
      default: '#000'
    },
    dotColor: {
      type: String,
      default: null
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    useButton: {
      type: Boolean,
      default: false
    },
    buttonClickCallbackData: {
      default: undefined
    }
  },
  setup(props, { slots, emit }) {
    const {
      primaryColor,
      secondaryColor,
      dotColor,
      outlined,
      rounded,
      useButton,
      buttonClickCallbackData
    } = toRefs(props)

    const chipStyle = computed(() => ({
      '--chip-padding-right': useButton.value ? '32px' : '8px',
      '--chip-border-radius': rounded.value ? '20px' : '4px',
      '--chip-background-color': outlined.value ? secondaryColor.value : primaryColor.value,
      '--chip-border-color': outlined.value ? primaryColor.value : primaryColor.value,
      '--chip-color': outlined.value ? primaryColor.value : secondaryColor.value
    }))

    const dotStyle = computed(() => (
      dotColor.value
        ? {
          '--dot-background-color': dotColor.value
        }
        : null
    ))

    const buttonStyle = computed(() => ({
      '--button-border-radius': rounded.value ? '0 20px 20px 0' : '0 4px 4px 0'
    }))

    const hasLeftIcon = computed(() => slots['left-icon'])
    const hasRightIcon = computed(() => slots['right-icon'])

    const onButtonClick = () => emit('on-button-click', buttonClickCallbackData.value)

    return {
      chipStyle,
      dotStyle,
      buttonStyle,
      hasLeftIcon,
      hasRightIcon,
      onButtonClick
    }
  }
})
</script>

<template>
  <div
    :style="chipStyle"
    class="vue3-simple-chip"
  >
    <span
      v-if="dotColor"
      class="vue3-simple-chip__dot"
      :style="dotStyle"
    />
    <div
      v-if="hasLeftIcon"
      class="vue3-simple-chip__icon vue3-simple-chip__icon--left"
    >
      <slot
        name="left-icon"
      />
    </div>
    <div class="vue3-simple-chip__label">
      {{ label }}
    </div>
    <div
      v-if="hasRightIcon"
      class="vue3-simple-chip__icon vue3-simple-chip__icon--right"
    >
      <slot
        name="right-icon"
      />
    </div>
    <div
      v-if="useButton"
      class="vue3-simple-chip__button"
      :style="buttonStyle"
      @click="onButtonClick"
      @keypress="onButtonClick"
    >
      <slot
        name="button-icon"
      >
        <img src="@/assets/icons/trash.svg" alt="">
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .vue3-simple-chip {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding-top: 4px;
    padding-right: var(--chip-padding-right);
    padding-bottom: 4px;
    padding-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid;
    border-color: var(--chip-border-color);
    border-radius: var(--chip-border-radius);
    background-color: var(--chip-background-color);
    color: var(--chip-color);
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    cursor: default;
  }

  .vue3-simple-chip__dot {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    border-radius: 50%;
    background-color: var(--dot-background-color);
  }

  .vue3-simple-chip__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  .vue3-simple-chip__button {
    position: absolute;
    top: -1px;
    right: 0;
    padding: 4px 8px;
    border-radius: var(--button-border-radius);
    cursor: pointer;
  }

  .vue3-simple-chip__button img {
    width: 16px;
    height: 16px;
  }

  .vue3-simple-chip__icon--left {
    margin-right: 4px;
  }

  .vue3-simple-chip__icon--right {
    margin-left: 4px;
  }
</style>
