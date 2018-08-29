<template lang="pug">
.index
  ul
    li(v-for="post in posts")
      nuxt-link(:to="{ name: 'posts-id', params: { id: post.number } }")
        | {{ formattedDate(post.createdAt) }} {{ post.title }}
</template>

<script>
import posts from '~/apollo/queries/posts'
import moment from 'moment'

export default {
  data () {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      prefetch: false,
      query: posts,
      variables: {
        count: 10
      },
      update: ({ repository }) => repository.issues.nodes
    }
  },
  methods: {
    formattedDate (date) {
      return moment(date).format('YYYY/MM/DD')
    }
  }
}
</script>
<style lang="scss" scoped>
.index {
}
</style>
