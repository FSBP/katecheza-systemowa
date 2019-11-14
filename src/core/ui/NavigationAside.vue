<template>
    <aside class="container page">
        <img src="../../assets/images/waldek.gif" alt="logo" @click="routeToHome">
        <ul>
            <router-link v-for="(item, index) in items" :to="item.path" :key="index">
                <li>{{ item.label }}</li>
            </router-link>
        </ul>
    </aside>
</template>

<script>

    import { items } from "../configs/menu-items.config";

    export default {
        name: "NavigationAside",

        data() {
            return {
                items
            }
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
        background-color: $color-secondary-800;
        @include flex-column-center;
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 50px;

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
