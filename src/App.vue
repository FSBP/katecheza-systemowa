<template>
  <div id="app">
    <div class="main-page" v-if="isMainRouteActive">
      <router-view />
    </div>
    <div class="another-page" v-else>
      <h1>Other Page Bitches</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App.vue',

    data() {
      return {
        isMainRouteActive: true
      }
    },

    created() {
      this.checkForRoute();
    },

    updated() {
      this.checkForRoute();
    },

    methods: {
      checkForRoute: function() {
        this.isMainRouteActive = this.$route.path === '/';
      }
    }
  }
</script>

<style lang="scss">

  @import './assets/styles/common';

  * {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    @include background-image("./assets/images/chapel-4523334.jpg", fixed, center, no-repeat, cover);
  }

  .main-page, .another-page {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .another-page {
    min-height: 100vh;
  }

  .main-page::after, .another-page::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color-secondary-800, 0.6);
    z-index: 20;
  }

  .container {
    position: relative;
    z-index: 100;
  }

</style>
