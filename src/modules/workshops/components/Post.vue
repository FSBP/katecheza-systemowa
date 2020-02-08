<template>
    <article>
        <div class="content-section">
            <img src="../../../assets/images/Canvas.svg" alt="">
            <a style="display: none;" href='https://pngtree.com/so/kolorowa kwadratowa rama'>kolorowa kwadratowa rama png from pngtree.com</a>
            <div class="text-wrapper">
                <h1>Szkolenie numer {{ workshopId }}</h1>
                <div class="content" v-html="content"></div>
                <button @click="openModal(workshopId)">
                    <img src="../../../assets/icons/edit-24px.svg" alt="enroll icons">
                    Zapisz się na szkolenie
                </button>
                <div class="date">{{ date | datePipe }}</div>
            </div>
        </div>
    </article>
</template>

<script>

    import { bus } from "../../../main";

    export default {
        name: "Post",
        props: {
            id: {
                type: Number,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            workshopId: {
                type: Number,
                required: true
            },
            date: {
                type: String,
                required: true
            }
        },
        methods: {
            openModal(id) {
                bus.$emit('openModal', id);
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    article {
        width: 90%;
        max-width: 800px;
        height: 690px;
        margin: 100px 0;
        @include flex-column;
        border-radius: 5px;

        img {
            width: 100%;
        }

        .content-section {
            width: 100%;
            height: 100%;
            background-color: $color-white;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;

            .text-wrapper {
                width: 100%;
                height: 400px;
                padding: 20px;
                position: absolute;
                top: 300px;
                @include flex-column-left-space-between;

                h1 {
                    @include font-roboto(500);
                    color: $color-secondary-800;
                    font-size: 35px;
                    width: 100%;
                    height: 45px;
                    line-height: 45px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                button {
                    width: 280px;
                    padding: 0 10px;
                    height: 50px;
                    border: 0;
                    outline: 0;
                    margin-top: 10px;
                    background-color: $color-secondary-800;
                    color: $color-white;
                    @include font-roboto(400);
                    font-size: 18px;
                    cursor: pointer;
                    transition: background-color .3s;
                    @include flex-row-center-space-around;

                    &:hover {
                        background-color: $color-success;
                    }

                    img {
                        width: 30px;
                    }
                }

                .date {
                    width: 100%;
                    margin-top: 20px;
                    height: auto;
                    color: $color-secondary-500;
                    @include font-roboto(400);
                    font-size: 14px;
                }

                .content {
                    width: 100%;
                    height: calc(100% - 100px);
                    overflow-y: auto;
                    margin-top: 30px;

                    @include scrollStyle($color-secondary-800);

                    p {
                        @include font-roboto(400);
                        color: $color-secondary-600;
                        font-size: 18px;
                        line-height: 30px;
                        padding: 0 20px 10px 0;
                    }
                }
            }
        }
    }

</style>
