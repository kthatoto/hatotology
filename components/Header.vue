<template lang="pug">
.header
  p(@click="doLogin") login
  p(@click="doLogout") logout
</template>
<script>
import { mapActions } from 'vuex'
import firebase from '@/plugins/firebase'

export default {
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
  async mounted () {
    let user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })
    this.setUser(user)
  }
}

</script>
<style lang="scss" scoped>
</style>
