<template lang="pug">
header
sidebar
main
  .container
    router-view
  component(v-if="modal" :is="modal.component")
</template>

<style lang="scss">

</style>

<script setup>
import { useStore } from 'vuex'
import Header  from '@/components/layouts/Header'
import Sidebar from '@/components/layouts/Sidebar'
import { computed } from '@vue/runtime-core'

const store = useStore()
const modal = computed(() => store.getters.getModalUser)

</script>

