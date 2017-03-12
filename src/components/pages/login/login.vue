<template>
  <div class="text-center">
    <button class="pure-button" @click="login">Login</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';

  import authService from 'src/core/lib/dummy-auth-service';
  import router, { ROUTE_NAMES } from 'src/router';

  @Component({
    name: 'login-page'
  })
  export default class LoginPage extends Vue {
    login() {
      authService.login()
        .then(() => router.push({ name: ROUTE_NAMES.MAIN }));
    }
  }
</script>
