<template lang="pug">
modal-base(
  header="Создание пользователя"
  @close="closeModal"
  @saveForm="saveModal"
  )
  template(v-slot:content)
    form.form()
      .form__group
        input.form__control(
          name="comment-text" 
          type="text" 
          placeholder="Ваше Имя"
          v-model="form.name"
        )
        span.form__line
      .form__group
        input.form__control(
          name="comment-text" 
          type="text" 
          placeholder="Ваша Фамилия"
          v-model="form.surname"
        )
        span.form__line
      .form__group
        input.form__control(
          name="comment-text" 
          type="text" 
          placeholder="Ваша Должность"
          v-model="form.position"
        )
        span.form__line
      .form__group
        input.form__control(
          name="comment-text" 
          type="text" 
          placeholder="Ваш Контактный телефон"
          v-model="form.phone"
        )
        span.form__line
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, reactive } from 'vue';
import ModalBase from '@/components/ModalBase'

const store = useStore()
const closeModal = () => { store.dispatch('unsetModalUser')}
const form = reactive({
  name: '', 
  surname: '',
  position: '', 
  phone: ''
})
const saveModal = () => { 
  console.log(form)
  closeModal()
}
</script>

<style scoped lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, .8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  padding: 1rem;
  &__content {
    width: 100%;
    max-width: 50rem;
    padding: 3rem;
    background-color: #202020;;
    border-radius: .5rem;
    position: relative;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  &__title {
    color: #fff;
    font-size: 2rem;
  }
  &__close {
    background: none;
    border: none;
    cursor: pointer;
    transition: transform .2s linear;
    &:hover {
      transform: rotate(90deg)
    }
  }
}

</style>
