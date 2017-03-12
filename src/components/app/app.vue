<template>
  <div id="app">
    <app-header></app-header>
    <app-content>
      <router-view></router-view>
    </app-content>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { mapState, mapActions } from 'vuex';
  import { ACTIONS } from 'src/store';

  import * as components from './components';

  @Component({
    name: 'app',
    components: { ...components },
    computed: mapState({
      list: state => state.workspace.list
    }),
    methods: mapActions({
      refresh: ACTIONS.WORKSPACE_REFRESH_LIST
    })
  })
  export default class App extends Vue {
    click() {
      this.refresh();
    }
  }
</script>
