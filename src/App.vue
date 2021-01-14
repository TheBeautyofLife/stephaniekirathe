<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  }
}
</script>
<style lang="sass">
@import '@/sass/_variables.scss'
</style>
