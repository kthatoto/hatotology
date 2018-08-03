<template lang="pug">
div
  h2 {{ post.title }}
  ul
    li.label(v-for="label in post.labels.nodes") {{ label.name }}
  vue-markdown(:source="post.body")
</template>

<script>
import post from '~/apollo/queries/post'
import VueMarkdown from 'vue-markdown'

export default {
  components: { VueMarkdown },
  data () {
    return {
      issueNumber: parseInt(this.$route.params.id),
      post: {}
    }
  },
  apollo: {
    post: {
      query: post,
      prefetch: true,
      variables () {
        return {
          number: this.issueNumber ? this.issueNumber : 1
        }
      },
      update: ({ repository }) => repository.issue
    }
  }
}
</script>
<style lang="scss">
.label {
  display: inline;
  border: 1px solid #aaa;
  padding: 2px 5px;
  border-radius: 5px;
}
</style>
