<template lang="pug">
.comments
  h3 Comments
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
.comments {
  h3 {
    border-bottom: 1px solid #333;
  }
}
</style>
