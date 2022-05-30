<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref
} from 'vue'
import Vue3SimpleChip from '@/vue3-simple-chip.vue'

interface IUser {
  id: number;
  username: string;
}

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3SimpleChip
  },
  setup() {
    const users = ref<IUser[]>([])

    const fetchPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          users.value = data
        })
        .catch((e) => {
          console.log(e)
        })
    }

    onMounted(() => {
      fetchPosts()
    })

    return {
      users
    }
  }
})
</script>

<template>
  <div id="app">
    <div class="vue3-simple-chips">
      <vue3-simple-chip
        label="Default"
      />
      <vue3-simple-chip
        label="Primary and secondary color"
        primary-color="teal"
        secondary-color="white"
      />
      <vue3-simple-chip
        label="Outlined"
        primary-color="teal"
        secondary-color="white"
        outlined
      />
      <vue3-simple-chip
        label="Rounded"
        primary-color="#ffeb3b"
        secondary-color="black"
        rounded
      />
      <vue3-simple-chip
        label="Dot color"
        primary-color="teal"
        secondary-color="white"
        dot-color="red"
        outlined
      />
      <vue3-simple-chip
        label="Left icon"
      >
        <template #left-icon>
          <img src="./assets/icons/search.svg" alt="">
        </template>
      </vue3-simple-chip>
      <vue3-simple-chip
        label="Right icon"
      >
        <template #right-icon>
          <img src="./assets/icons/search.svg" alt="">
        </template>
      </vue3-simple-chip>
      <vue3-simple-chip
        label="Use button"
        use-button
      />
    </div>
  </div>
</template>

<style scoped>
  #app {
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 16px;
    line-height: 18px;
  }

  .vue3-simple-chips {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 600px;
    padding: 16px 8px 8px 16px;
    margin: 40px auto;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
