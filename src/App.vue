<template lang="pug">
Header
Sidebar
main
  .container
    router-view
modal-send
</template>

<style lang="scss">

</style>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Header: defineAsyncComponent(() => import('@/components/layouts/Header')),
    Sidebar: defineAsyncComponent(() => import('@/components/layouts/Sidebar')),
    ModalSend: defineAsyncComponent(() => import('@/components/ModalSend'))
  }
}

</script>

