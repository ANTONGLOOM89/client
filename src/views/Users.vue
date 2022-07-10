<template lang="pug">
.users
  .btn(@click="addUser") Добавить
  .user__content
    .user__item(
      v-for="{ id } in users" 
      :key="id" 
      @click="navigate(`/user/${id}`)")
</template>

<script setup>
import { ref } from 'vue'
import { useNavigate } from '@/use/navigate'
import { useStore } from 'vuex'
import ModalSend from '@/components/ModalSend.vue'

const users = ref([
  { id: 1 },
  { id: 2 }
])

const { navigate } = useNavigate()
const store = useStore()
const addUser = () => { store.dispatch('addModalUser', { component: ModalSend, props: {} }) }



</script>

<style scoped lang="scss">
.user {
  &__content {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__item {
    height: 15rem;
    width: 15rem;
    background-color: green;
    border-radius: 50%;
    cursor: pointer;
    margin: 1rem;
  }
}

</style>