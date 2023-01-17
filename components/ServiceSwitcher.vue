<template>
  <span @click="$store.commit('main/setActiveService', service)" v-text="text"></span>
</template>

<script>
export default {
  name: 'ServiceSwitcher',
  props: {
    service: String,
    text: String,
  },
}
</script>

<style scoped>
span {
  text-decoration: underline;
  cursor: pointer;
}
</style>
