<template lang="pug">
.sidebar
  .sidebar__header
    .sidebar__image
      img(src="@/assets/images/main-icon.jpg", alt="Main Icon")
    .sidebar__title Панель управления
  ul.sidebar__navigation
    li.sidebar__item(
      v-for="{ id, name, title, icon } in nameRoutes" 
      :key="id" 
      @click="navigate(name)"
      :class="{'sidebar__color': name === route.path}"
    )
      .sidebar__text
        fa.sidebar__icon(:icon="icon")
        | {{title}}

</template>

<script setup>
import { useRoute } from 'vue-router'
import { useNavigate } from '@/use/navigate'
import { ref } from 'vue'


const route = useRoute()
const { navigate } = useNavigate()
const nameRoutes = ref([
  { id:1, name: '/users', title: 'Карточки клиентов', icon: "user" },
  { id:2, name: '/chat', title: 'Чат', icon: "comment" }
])

</script>

<style lang="scss">
.sidebar {
  width: 30rem;
  height: 100vh;
  background-color: #272330;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  color: #ffff;
  &__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 1.5rem 2rem;
    border-color: hsla(0,0%,100%,.12);
  }
  &__image {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
  &__item {
    padding: 1.5rem 0rem;
    transition: background-color .2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: darken(#0000ff, 5%);
    }
  }
  &__text {
    padding: 0 1.5rem;
  }
  &__icon {
    margin-right: 1rem;
  }
  &__color {
    background-color: blue;
  }
}

</style>