<template>
  <div id="app">
    <div class="main-page" v-if="isMainRouteActive">
      <router-view />
    </div>
    <div class="another-page" v-else>
      <NavigationAside />
      <div class="subpage-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

  import NavigationAside from './core/ui/NavigationAside.vue';

  export default {
    name: 'App.vue',

    data() {
      return {
        isMainRouteActive: true
      }
    },

    components: {
      NavigationAside
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
    min-height: 100vh;
    position: relative;
  }

  .another-page {
    min-height: 100vh;
    @include flex-row;

    .subpage-wrapper {
      width: calc(100% - 400px);
      height: 100%;
    }
  }

  .main-page::after, .another-page::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color-secondary-800, 0.4);
    z-index: 20;
  }

  .container {
    position: relative;
    z-index: 100;
  }

  .router-link-active {
    background-color: $color-primary;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      right: -50px;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 35px 0 35px 50px;
      border-color: transparent transparent transparent $color-primary;
    }
  }

</style>
