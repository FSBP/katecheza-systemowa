<template>
    <div class="main-wrapper container">
        <div class="menu-wrapper">
            <img src="../../../assets/images/waldek.gif" alt="brand icon" class="logo">
            <router-link v-for="(item, index) in items" :to="item.path" :key="index">
                <NavigationButton :label="item.label" :position="item.position"></NavigationButton>
            </router-link>
            <div class="icons-box">
                <router-link
                        v-for="(icon, index) in iconsItems"
                        :to="icon.path"
                        :key="index"
                >
                    <img :src="require('../../../assets/icons/' + icon.imgSrc)" :alt="icon.label" class="icon">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import { items } from "../../../core/configs/menu-items.config";
    import { iconsItems } from "../../../core/configs/icons-items.config";
    import NavigationButton from "../../../core/ui/NavigationButton.vue";

    export default {
        name: "Main.vue",

        data() {
            return {
                items,
                iconsItems
            }
        },
        components: {
            NavigationButton
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

.main-wrapper {
    width: 100%;
    height: 100%;
    padding: 70px;
    @include flex-row-center-center;

    @media all and (max-width: 767px) {
        padding: 20px;
    }

    .menu-wrapper {
        width: 100%;
        max-width: 1600px;
        height: 100%;
        position: relative;
        overflow-y: auto;

        @media all and (max-width: 767px) {
            @include flex-column-center-space-between;
        }

        a {
            @media all and (max-width: 767px) {
                width: 100%;
                max-width: 300px;
            }
        }

        .logo {
            width: 300px;
            height: auto;

            @media all and (max-width: 767px) {
                width: 300px;
                max-width: 80%;
                margin-bottom: 15px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
                position: absolute;
            }

            @media all and (min-width: 1024px) and (max-width: 1365px) {
                width: 420px;
                position: absolute;
            }

            @media all and (min-width: 1366px) {
                width: 50%;
                max-width: 650px;
                left: -50px;
                position: absolute;
            }
        }

        .icons-box {
            width: 220px;
            height: auto;
            @include flex-row-center-space-between;
            position: absolute;
            right: 0;
            top: 0;

            @media all and (max-width: 767px) {
                display: none;
            }

            .icon {
                color: $color-white;
                width: 40px;
                cursor: pointer;
                transition: transform 0.3s;

                &:hover {
                    transform: rotate(10deg);
                }
            }
        }
    }
}
</style>
