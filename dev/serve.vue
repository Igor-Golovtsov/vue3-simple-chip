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
        v-for="user in users"
        :key="user.id"
        :label="user.username"
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
