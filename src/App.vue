<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <template v-if="!userIsLogged">
        |
        <router-link to="/login">Login</router-link>
      </template>
      <template v-if="userIsLogged">
        |
        <router-link to="/hello">Hello</router-link>
      </template>
    </div>
    <router-view @loggedIn="loggedIn" @loggedOut="loggedOut" />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      userIsLogged: false
    };
  },
  methods: {
    loggedIn() {
      this.userIsLogged = true;
    },
    loggedOut() {
      this.userIsLogged = false;
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
