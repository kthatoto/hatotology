<template lang="pug">
.commentForm
  h4 Post Comment
  textarea.textarea(v-model="content")
  .button(@click="post") Post
</template>
<script>
export default {
  props: ['user', 'issueNumber'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    post () {
      if (localStorage.githubAccessToken) {
        console.log(localStorage.githubAccessToken)
        this.$axios({
          method: 'POST',
          url: `https://api.github.com/repos/kthatoto/hatotology/issues/${this.issueNumber}/comments`,
          headers: { Authorization: `token ${localStorage.githubAccessToken}` },
          data: { body: this.content }
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.textarea {
  border: none;
  display: block;
  width: 100%;
  height: 200px;
  padding: 3px 6px;
  font-size: 1.6rem;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border-color: #37619c;
  }
}
.button {
  box-shadow: 0 0 3px 0 #333;
  cursor: pointer;
  background-color: #37619c;
  color: white;
  border-radius: 5px;
  width: 80px;
  height: 35px;
  padding: 5px;
  text-align: center;
  float: right;
  &:hover {
    background-color: #6084b7;
  }
}
</style>
