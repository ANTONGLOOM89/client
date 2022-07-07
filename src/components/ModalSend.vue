<template lang="pug">
.modal
  .modal__content
    .modal__header
      .modal__title Создание пользователя
      button.modal__close
        img(src="@/assets/images/close.svg", alt="close")
    form.form()
      .form__group
        input.form__control(name="comment-text" type="text" placeholder="Ваше имя")
        span.form__line
      .form__group
        input.form__control(name="comment-text" type="text" placeholder="Ваше имя")
        span.form__line
      .form__group
        input.form__control(name="comment-text" type="text" placeholder="Ваше имя")
        span.form__line
      .form__group
        input.form__control(name="comment-text" type="text" placeholder="Ваше имя")
        span.form__line
      .form__footer
        .form__group
          .btn(type='submit') Сохранить
</template>

<script setup>

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
