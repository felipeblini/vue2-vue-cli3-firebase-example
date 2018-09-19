import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

var config = {
  apiKey: "AIzaSyCxC21Zfkrsv2lH833EGOFI7OitGdseQeU",
  authDomain: "vue-firebase-tutorial-4ad60.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-4ad60.firebaseio.com",
  projectId: "vue-firebase-tutorial-4ad60",
  storageBucket: "vue-firebase-tutorial-4ad60.appspot.com",
  messagingSenderId: "78029601767"
};

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
