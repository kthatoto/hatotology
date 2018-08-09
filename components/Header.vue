<template lang="pug">
.header
  div(v-if="!isAuthenticated")
    p.button(@click="doLogin") Login
  div(v-else)
    p.button(@click="doLogout") Logout
    img.avatar(:src="user.photoURL")
</template>
<script>
import { mapActions } from 'vuex'
import firebase from '@/plugins/firebase'

export default {
  data () {
    return {
      isAuthenticated: false,
      user: null
    }
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'setUser'
    ]),
    doLogin () {
      this.login()
        .then(() => console.log('resloved'))
        .catch((err) => console.log(err))
    },
    doLogout () {
      this.logout()
        .then(() => {})
        .catch((err) => console.log(err))
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      this.isAuthenticated = !!state.user
      this.user = state.user
    })
  },
  async mounted () {
    let user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })
    this.setUser(user)
  }
}

</script>
<style lang="scss" scoped>
.header {
  padding: 20px;
  width: 850px;
  margin: 0 auto;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 0 3px 0 #333;
  float: right;
}
.button {
  box-shadow: 0 0 3px 0 #333;
  cursor: pointer;
  background-color: #37619c;
  color: white;
  margin: 7.5px 10px;
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
