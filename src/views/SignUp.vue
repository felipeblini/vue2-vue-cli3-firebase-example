<template>
  <div>
    <div class="sign-up">
      <p>Let's create a new account !</p>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button v-on:click="signUp">Sign Up</button>
      <span>or go back to
        <router-link to="/login">login</router-link>.</span>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("hello");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>