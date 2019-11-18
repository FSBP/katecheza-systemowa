<template>
    <aside class="container page" :style="{ 'transform': opened ? 'translateX(100%)' : 'translateX(0)' }">
        <img src="../../assets/images/waldek.gif" alt="logo" @click="routeToHome">
        <div class="close-icon">
            <img src="../../assets/icons/close-24px.svg" alt="" @click="opened = !opened">
        </div>
        <ul>
            <router-link v-for="(item, index) in items" :to="item.path" :key="index">
                <li>{{ item.label }}</li>
            </router-link>
        </ul>
    </aside>
</template>

<script>

    import { items } from "../configs/menu-items.config";
    import { bus } from "../../main";

    export default {
        name: "NavigationAside",

        data() {
            return {
                items,
                opened: false
            }
        },

        watch:{
            $route (to, from) {
                if (window.innerWidth < 768) {
                    this.opened = !this.opened;
                }
            }
        },

        created() {
            bus.$on('open-modal', () => {
                this.opened = !this.opened;
            });
        },

        methods: {
            routeToHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../assets/styles/common';

    aside {
        width: 400px;
        height: 100%;
        @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
            width: 300px;
        }
        @media all and (max-width: $phone-lower-limit) {
            width: 100%;
            position: absolute;
            top: 0;
            left: -100%;
            z-index: 1001;
        }
        background-color: $color-secondary-800;
        @include flex-column-center;
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 50px;
        transition: transform .2s linear;

        &::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background-color: rgba($color-white, 0.6);
            border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: $color-white;
        }

        img {
            width: 100%;
            cursor: pointer;
            @media all and (max-width: $phone-lower-limit) {
                top: 20px;
                position: relative;
            }
        }

        .close-icon {
            position: absolute;
            top: -2px;
            right: 18px;
            display: none;
            z-index: 10000000;
            img {
                width: 50px;
            }
            @media all and (max-width: $phone-lower-limit) {
                display: block;
            }
        }

        ul {
            width: 100%;
            height: auto;
            max-height: 100%;
            margin-top: 50px;
            @include flex-column;

            a {
                width: 100%;
            }

            li {
                height: 70px;
                color: $color-white;
                @include font-roboto(300);
                font-size: 25px;
                @media all and (max-width: $tablet-lower-limit) {
                    font-size: 20px;
                }
                padding-left: 20px;
                @include flex-row-center-left;
                transition: background 0.1s;
                position: relative;

                &:hover {
                    background-color: $color-primary;
                    &::before {
                        content: "";
                        display: inline-block;
                        position: absolute;
                        right: 0;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 35px 40px 35px 0;
                        border-color: transparent $color-white transparent transparent;
                    }
                }
            }
        }
    }
</style>
