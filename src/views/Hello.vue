<template>
  <div>
    <h1>Hello</h1>
    <a href="$" v-on:click.prevent="logout">Logout</a>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$emit("loggedOut");
          this.$router.replace("login");
        });
    }
  }
};
</script>
