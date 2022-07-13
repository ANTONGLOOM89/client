<template lang="pug">
modal-base(
  header="Создание пользователя"
  :disabled="!form.valid"
  @close="closeModal"
  @saveForm="saveModal"
  )
  template(v-slot:content)
    form.form()
      .form__group(v-for="field in fields")
        input.form__control(
          v-if="form[field].tag === 'input'"
          :type="form[field].type"
          :placeholder="form[field].placeholder"
          v-model="form[field].value"
          @blur="form[field].blur"
        )
        textarea(v-else rows="10" cols="45" name="text")
        span.form__line
        span.form__error(v-show="!form[field].valid && form[field].touched")
        span.form__info(v-if="form[field].errors.required && form[field].touched") Ввведите {{form[field].placeholder}}
        span.form__info(v-else-if="form[field].errors.minLength && form[field].touched") Болшше 8 знаков, сейчас {{form[field].value.length}}
</template>

<script setup>

const required = val => !!val
const minLength = num => val => val.length >= num

import { useStore } from 'vuex'
import ModalBase from '@/components/ModalBase'
import { useForm } from '@/use/form'

const store = useStore()
const closeModal = () => { store.dispatch('unsetModalUser')}
const form = useForm({
  name: {
    value: "",
    validators: {required},
    type: 'text',
    placeholder: 'ФИО',
    tag:"input"
  },
  position: {
    value: "",
    validators: {required},
    type: 'text',
    placeholder: 'Ваша Должность',
    tag:"input"
  },
  phone: {
    value: "",
    validators: {required},
    type: 'text',
    placeholder: 'Ваш Контактный телефон',
    tag:"input"
  },
  email: {
    value: "",
    validators: { required },
    type: "text",
    placeholder: "Email",
    tag:"input"
  },
  password: {
    value: "",
    validators: { required, minLength: minLength(8) },
    type: "password",
    placeholder: "Пароль",
    tag:"input"
  },
  comment: {
    value: "",
    validators: { },
    placeholder: "Комментарий",
    tag:"textarea"
  }
})

const fields = Object.keys(form).filter(item => item !== 'valid')

const saveModal = () => {
  const { name, position, phone, email, password, comment } = form
  console.log({
    name: name.value,
    position: position.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
    comment: comment.value
  })
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
