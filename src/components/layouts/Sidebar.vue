<template lang="pug">
.sidebar
  ul(v-for="{ id, name, title } in nameRoutes" :key="id")
    li(@click="navigate(name)") {{title}}

</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const nameRoutes = ref([
  { id:1, name: '/users', title: 'Карточки клиентов' },
  { id:2, name: '/chat', title: 'Чат' }
])
const navigate = (name) => router.push(name)

</script>

<style lang="scss">
.sidebar {
  width: 300px;
  height: 100vh;
  background-color: #ccc;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
}
</style>