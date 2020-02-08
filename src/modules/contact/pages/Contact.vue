<template>
    <div class="contact-wrapper page">
        <div class="content">
            <div class="info">
                <h1>Skontaktuj się z nami</h1>
                <ul class="contact-info">
                    <li>
                        <img src="../../../assets/icons/phone-24px.svg" alt="phone icon">
                        <a href="tel:509 470 232"><p>Waldemar Wczasek tel. 509 470 232</p></a>
                    </li>
                    <li>
                        <img src="../../../assets/icons/phone-24px.svg" alt="phone icon">
                        <a href="tel:505 824 584"><p>Piotr Bechta tel. 505 824 584</p></a>
                    </li>
                    <li>
                        <img src="../../../assets/icons/mail-24px.svg" alt="mail icon">
                        <a href="mailto:katechezasystemowa@gmail.com">katechezasystemowa@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div class="maps">
                <Indicator width="50" height="50" v-if="!loaded" />
                <iframe @load="mapsLoaded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.5324464907517!2d18.118125315727287!3d50.33797367946002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47110de35fb7cdc5%3A0xa2f880ea8b155430!2sWiniarnia%20Synapsa!5e0!3m2!1spl!2spl!4v1574107547026!5m2!1spl!2spl"></iframe>
            </div>
        </div>
    </div>
</template>

<script>

    import Indicator from "../../../core/ui/Indicator";
    export default {
        name: "Contact",
        components: {Indicator},
        data() {
            return {
                loaded: false
            }
        },
        methods: {
            mapsLoaded() {
                this.loaded = true;
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .contact-wrapper {
        height: 100%;
        overflow-y: auto;
        @include scrollStyle($color-white);
        @include flex-row-center-center;

        .content {
            width: 90%;
            max-width: 900px;
            max-height: 80%;
            overflow-y: auto;
            @include flex-column;
            border-radius: 5px;
            padding: 50px;
            @media all and (max-width: $phone-lower-limit) {
                padding: 20px;
                top: 20px;
                max-height: 75%;
            }
            background-color: $color-white;
            @include scrollStyle($color-secondary-800);
            position: relative;

            &::before {
                position: absolute;
                content: '#kontakt';
                @include font-roboto(400);
                color: $color-success;
                top: 20px;
                left: 50px;
                @media all and (max-width: $phone-lower-limit) {
                    left: 20px;
                }
            }

            .info {
                width: 100%;
                height: auto;
                @include flex-column-center;

                .contact-info {
                    width: 100%;
                    max-width: 550px;
                    @media all and (max-width: $phone-upper-limit) {
                        width: 100%;
                    }
                    padding: 20px;
                    margin: 30px 0;
                    list-style-type: none;

                    li {
                        width: 100%;
                        height: auto;
                        @include flex-row-center-space-between;
                        font-size: 25px;
                        color: $color-secondary-700;
                        @include font-roboto(300);
                        margin-top: 20px;
                        @media all and (max-width: $laptop-upper-limit) {
                            font-size: 20px;
                        }
                        @media all and (max-width: $phone-upper-limit) {
                            @include flex-row-center-center;
                        }
                        &:first-child {
                            margin-top: 0;
                        }
                        img {
                            width: 40px;
                            @media all and (max-width: $laptop-upper-limit) {
                                width: 35px;
                            }

                            @media all and (max-width: $phone-upper-limit) {
                                display: none;
                            }
                        }

                        a {
                            color: $color-secondary-700;
                            word-break: break-all;
                        }
                    }
                }

                h1 {
                    color: $color-secondary-800;
                    @include font-open-sans(400);
                    font-size: 60px;
                    width: auto;
                    max-width: 100%;
                    text-align: center;
                    margin-top: 10px;
                    @media all and (max-width: $phone-lower-limit) {
                        font-size: 30px;
                        margin-top: 30px;
                    }
                }
            }

            .maps {
                width: 100%;
                height: 250px;
                position: relative;

                iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            }
        }
    }
</style>
