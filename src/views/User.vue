<template lang="pug">
.user
  div vsdvdsvsdv {{id}}
</template>

<script setup>

import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params.id)

</script>