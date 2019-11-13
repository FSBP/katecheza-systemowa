<template>
    <aside class="container">
        <img src="../../assets/images/waldek.gif" alt="" @click="routeToHome">
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
                font-size: 28px;
                padding-left: 20px;
                @include flex-row-center-left;
                transition: background 0.1s;
                position: relative;

                &:hover {
                    background-color: $color-primary;
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
            }
        }
    }
</style>
