<template lang="pug">
.comments
  ul
    li(v-for="comment in comments")
      | {{ comment.body }}
</template>
<script>
export default {
  props: ['comments']
}
</script>
<style lang="scss">
</style>
