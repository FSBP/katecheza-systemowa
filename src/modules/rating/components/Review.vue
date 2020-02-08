<template>
    <div class="review-wrapper">
        <header>
            <div class="stars-box">
                <div
                        class="star"
                        v-for="(star, index) in [1,2,3,4,5]"
                        :key="index"
                        ref="star"
                ></div>
            </div>
            <div class="date">{{ date | datePipe }}</div>
        </header>
        <div class="content">
            <p>
                {{ content }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Review",
        props: {
            rate: {
                required: true,
                type: Number
            },
            date: {
                required: true,
                type: String
            },
            content: {
                required: true,
                type: String
            }
        },
        mounted() {
            for (let i = 0; i < this.rate; i++) {
                this.$refs['star'][i].style.backgroundImage = `url(${require('../../../assets/icons/star-24px.svg')})`;
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .review-wrapper {
        width: 90%;
        max-width: 800px;
        height: 250px;
        margin: 50px 0;
        @include flex-column;
        padding: 20px;
        border-radius: 5px;
        background-color: $color-white;

        .content {
            width: 100%;
            height: calc(100% - 40px);
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

        header {
            @include flex-row-center-space-between;
            .stars-box {
                @include flex-row;
            }
            .date {
                width: auto;
                height: 100%;
                color: $color-secondary-500;
                @include font-roboto(400);
                font-size: 14px;
                @include flex-row-center-center;
            }
        }

        .star {
            background-image: url("../../../assets/icons/star_border-24px.svg");
            width: 40px;
            height: 40px;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

</style>
