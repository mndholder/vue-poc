<template>
  <div class="main-page">
    <div class="text-center">
      <button class="pure-button" @click="refresh">Refresh</button>
    </div>
    <ul>
      <li v-for="workspace in list" :key="workspace.id">{{workspace.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { mapState, mapActions } from 'vuex';

  import { ACTIONS } from 'src/store';

  @Component({
    name: 'main-page',
    computed: mapState({
      list: state => state.workspace.list
    }),
    methods: mapActions({
      refresh: ACTIONS.WORKSPACE_REFRESH_LIST
    })
  })
  export default class MainPage extends Vue {}
</script>
