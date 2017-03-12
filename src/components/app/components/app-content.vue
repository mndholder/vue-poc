<template>
  <div class="app-content container">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    name: 'app-content'
  })
  export default class AppContent extends Vue {}
</script>
