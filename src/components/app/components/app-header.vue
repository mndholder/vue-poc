<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .app-header {
    h1 {
      font-size: 1.5em;
      margin: 0;
    }

    .app-header-buttons {
      float: right;
    }
  }
</style>

<template>
  <div class="app-header">
    <header class="container clearfix">
      <div class="app-header-buttons">
        <button
          class="pure-button"
          v-if="authorized"
          @click="logout">Logout</button>
      </div>
      <h1>Vue App header</h1>
    </header>
    <hr>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { mapState } from 'vuex';

  import authService from 'src/core/lib/dummy-auth-service';
  import router, { ROUTE_NAMES } from 'src/router';

  @Component({
    name: 'app-header',
    computed: mapState({
      authorized: state => state.auth.authorized
    })
  })
  export default class AppHeader extends Vue {
    logout() {
      authService.logout()
        .then(() => router.push({ name: ROUTE_NAMES.LOGIN }));
    }
  }
</script>
