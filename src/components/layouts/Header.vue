<template lang="pug">
header
  .header__content
    .header__icon
    .header__user Admin
</template>

<style lang="scss">
header {
  width: calc(100% - 30rem);
  height: 4.7rem;
  background-color: #ebeff1;
  -webkit-box-shadow: 0 0 .6rem .1rem rgba(0, 0, 0, .47);
  -moz-box-shadow: 0 0  .6rem  -.1rem  rgba(0, 0, 0, .47);
  box-shadow: 0 0 .6rem  -.1rem  rgba(0, 0, 0, .47);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 2rem;
}

</style>