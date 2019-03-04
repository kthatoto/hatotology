<template lang="pug">
.presentation
  nuxt
</template>

<script>
import { Slideshow } from 'eagle.js'
export default {
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Kosugi+Maru'
        }
      ]
    }
  },
  mixins: [Slideshow]
}
</script>

<style lang="scss">
body {
  width: 100%;
  margin: 0 0;
}
html {
  height: 0;
}
.presentation {
  width: 100%;
}
</style>
