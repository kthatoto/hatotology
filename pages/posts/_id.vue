<template lang="pug">
div
  h1 {{ post.title }}
  div(v-html="post.body")
</template>

<script>
import post from '~/apollo/queries/post'

export default {
  data () {
    return {
      issueNumber: parseInt(this.$route.params.id),
      post: {}
    }
  },
  created () {
    console.log(this)
  },
  apollo: {
    post: {
      prefetch: true,
      query: post,
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
