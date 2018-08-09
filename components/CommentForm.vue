<template lang="pug">
.commentForm
  h4 Post Comment
  textarea.textarea(v-model="content")
  .button Post
</template>
<script>
export default {
  props: ['user'],
  data () {
    return {
      content: ''
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
