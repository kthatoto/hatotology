<template lang="pug">
div
  div(v-if="post.title")
    h2.title {{ post.title }}
    ul
      span.label__header tags:
      li.label(v-for="label in post.labels.nodes") {{ label.name }}
    p.date Created at: {{ formattedDate(post.createdAt) }}
    p.date Updated at: {{ formattedDate(post.updatedAt) }}
    vue-markdown.markdown(:source="post.body")
</template>

<script>
import post from '~/apollo/queries/post'
import VueMarkdown from 'vue-markdown'
import moment from 'moment'

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
  },
  methods: {
    formattedDate (date) {
      return moment(date).format('YYYY/MM/DD')
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 1.8rem;
}
.label {
  display: inline;
  border: 1px solid #aaa;
  padding: 2px 5px;
  border-radius: 5px;
  color: #444;
  &__header {
    color: #444;
    margin-right: 5px;
  }
}
.date {
  text-align: right;
  color: #888;
  font-size: 0.8rem;
}
.markdown {
  /deep/ {
    li {
      list-style: inside;
    }
  }
}
</style>
