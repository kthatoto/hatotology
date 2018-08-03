<template lang="pug">
.index
  ul
    li(v-for="post in posts")
      nuxt-link(:to="{ name: 'posts-id', params: { id: post.number } }") {{ post.title }}
</template>

<script>
import posts from '~/apollo/queries/posts'

export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
  },
  apollo: {
    posts: {
      prefetch: true,
      query: posts,
      variables: {
        count: 10
      },
      update: ({ repository }) => repository.issues.nodes
    }
  }
}
</script>
<style lang="scss">
.index {
}
</style>
