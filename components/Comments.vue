<template lang="pug">
.comments
  h3 Comments
  ul.comments__list
    li.comment(v-for="comment in comments")
      img.comment__avatar(:src="comment.author.avatarUrl")
      .comment__content
        p
          | id:&nbsp;
          span.comment__author {{ comment.author.login }}
        vue-markdown.comment__body(:source="comment.body")

</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: { VueMarkdown },
  props: ['comments']
}
</script>
<style lang="scss" scoped>
.comments {
  h3 {
    border-bottom: 1px solid #333;
  }
  &__list {
    padding: 10px 0;
  }
}
.comment {
  overflow: hidden;
  margin-bottom: 10px;
  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 3px 0 #333;
    float: left;
    margin: 5px;
    margin-right: 10px;
  }
  &__content {
    float: left;
    width: calc(100% - 60px);
  }
  &__author {
    font-weight: bold;
  }
  &__body {
    background-color: white;
    box-shadow: 0 0 1px 0 #bbb;
    margin: 2px;
    padding: 10px;
  }
}
</style>
