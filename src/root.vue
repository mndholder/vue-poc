<!-- This component exists to include some vendor or global css and/or js -->

<!-- App global styles -->
<style lang="scss" src="./assets/styles/global.scss"></style>

<!-- App global template, better to be just one App component -->
<template>
  <app></app>
</template>

<!--
  App global script
  May include global and third party vendor scripts, ie:
    import 'jquery';
    import 'another/third/party/script';
-->
<script>
  import Component from 'vue-class-component';
  import App from './components/app/app';

  @Component({
    name: 'root',
    components: { App }
  })
  export default class RootComponent {}
</script>
