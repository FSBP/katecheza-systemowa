<template>
  <div id="app">
    <div class="main-page" v-if="isMainRouteActive">
      <transition name="router-anim" enter-active-class="animated zoomIn faster" leave-active-class="animated slideOutLeft faster">
        <router-view />
      </transition>
    </div>
    <div class="another-page" v-else>
      <transition
              name="router-anim"
              enter-active-class="animated slideInLeft faster"
              leave-active-class="animated zoomOut faster">
        <NavigationAside />
      </transition>
      <div class="subpage-wrapper">
        <div class="menu-icon">
          <img src="./assets/icons/menu-24px (1).svg" alt="menu icon" @click="openMenu">
        </div>
        <transition
                name="router-anim"
                enter-active-class="animated slideInDown faster"
                leave-active-class="animated slideOutDown faster">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import NavigationAside from './core/ui/NavigationAside.vue';
  import { bus } from "./main";

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
      },
      openMenu() {
        bus.$emit('open-modal', true);
      }
    }
  }
</script>

<style lang="scss">

  @import './assets/styles/common';
  @import "~animate.css/source/_base.css";
  @import "~animate.css/source/zooming_entrances/zoomIn.css";
  @import "~animate.css/source/zooming_exits/zoomOut.css";
  @import "~animate.css/source/sliding_entrances/slideInDown.css";
  @import "~animate.css/source/sliding_exits/slideOutDown.css";
  @import "~animate.css/source/sliding_entrances/slideInLeft.css";
  @import "~animate.css/source/sliding_exits/slideOutLeft.css";

  .posts-container {
    .ql-align-center {
      text-align: center;
    }
    .ql-align-justify {
      text-align: justify;
    }
    .ql-align-left {
      text-align: left;
    }
    .ql-align-right {
      text-align: right;
    }
    a {
      text-decoration: none;
      color: $color-success;
    }
    h1, h2, h3, h4, h5, h6 {
      @include font-roboto(500);
      color: $color-secondary-800;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 29px;
    }
    h4 {
      font-size: 26px;
    }
    h5 {
      font-size: 23px;
    }
    h6 {
      font-size: 20px;
    }
    p {
      @include font-roboto(400);
      color: $color-secondary-600;
      font-size: 18px;
      line-height: 30px;
      padding: 0 20px 10px 0;
    }
  }

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
      @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
        width: calc(100% - 300px);
        left: 300px;
      }
      @media all and (max-width: $phone-lower-limit) {
        width: 100%;
        left: 0;
      }
      height: 100%;
      left: 400px;
      position: fixed;
      z-index: 1000;

      .menu-icon {
        position: absolute;
        top: 18px;
        left: 18px;
        display: none;
        z-index: 10000000;
        border-radius: 10px;
        background-color: $color-secondary-800;
        img {
          width: 50px;
        }
        @media all and (max-width: $phone-lower-limit) {
          display: block;
        }
      }
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
      display: inline-block;
      position: absolute;
      right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 35px 40px 35px 0;
      @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
        border-width: 35px 30px 35px 0;
      }
      border-color: transparent $color-white transparent transparent;
    }
  }

  .page {
    position: fixed;
    width: inherit;
  }

</style>
