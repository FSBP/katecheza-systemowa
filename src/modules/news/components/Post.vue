<template>
    <article>
        <div class="background-section" :style="{ 'background-image': `url('${ img }')` }">
            <div class="tag">{{ tag }}</div>
        </div>
        <div class="content-section">
            <div class="text-wrapper">
                <h1>{{ title }}</h1>
                <div class="content">
                    <p>{{ content }}</p>
                </div>
                <div class="date">{{ date | datePipe }}</div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "Post",
        props: {
            title: {
                type: String,
                required: true
            },
            img: {
                type: String,
                require: false
            },
            content: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            tag: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    article {
        width: 90%;
        max-width: 800px;
        height: 650px;
        margin: 100px 0;
        @include flex-column;
        border-radius: 5px;

        .background-section {
            width: 100%;
            height: 250px;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: cover;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            @include flex-row-right-top;
            padding: 20px;

            .tag {
                padding: 10px 15px;
                background-color: $color-info;
                border-radius: 50px;
                @include font-roboto(500);
                text-transform: uppercase;
                color: $color-white;
                font-size: 15px;
            }
        }

        .content-section {
            width: 100%;
            height: calc(100% - 250px);
            padding: 20px;
            background-color: $color-white;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            position: relative;

            &::before {
                width: 80px;
                height: 80px;
                content: '';
                position: absolute;
                top: -40px;
                @include background-image('https://i.imgur.com/pl2DVxz.jpg', scroll, right, no-repeat, cover);
                background-position: -28px 0;
                border-radius: 100%;
            }

            .text-wrapper {
                width: 100%;
                height: 100%;
                padding-top: 40px;
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

                .date {
                    width: 100%;
                    height: auto;
                    color: $color-secondary-500;
                    @include font-roboto(400);
                    font-size: 14px;
                }

                .content {
                    width: 100%;
                    height: calc(100% - 100px);
                    overflow-y: auto;

                    &::-webkit-scrollbar {
                        width: 5px;
                    }

                    /* Track */
                    &::-webkit-scrollbar-track {
                        border-radius: 10px;
                    }

                    /* Handle */
                    &::-webkit-scrollbar-thumb {
                        background-color: rgba($color-secondary-800, 0.6);
                        border-radius: 10px;
                    }

                    /* Handle on hover */
                    &::-webkit-scrollbar-thumb:hover {
                        background: $color-white;
                    }

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
