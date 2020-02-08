<template>
    <div class="rating-wrapper page" :style="{ 'overflow-y': opened ? 'hidden' : 'auto' }">
        <div class="rate-container">
            <Indicator v-if="!loaded" width="70" height="70"></Indicator>
            <Review
                    v-else
                    v-for="(review, index) in reviews"
                    :key="index"
                    :rate="review.rate"
                    :date="review.date"
                    :content="review.content"
            />
        </div>
        <div class="add-review" @click="openModal()">
            <img src="../../../assets/icons/add-24px.svg" alt="add button">
        </div>
        <Modal></Modal>
    </div>
</template>

<script>

    import Review from '../components/Review';
    import Indicator from '../../../core/ui/Indicator';
    import { reviewsService } from "../../../core/services";
    import Modal from '../components/Modal';
    import { bus } from "../../../main";

    export default {
        name: "Rating",
        data() {
            return {
                reviewsService,
                reviews: [],
                loaded: false,
                opened: false
            }
        },
        components: {
            Review,
            Indicator,
            Modal
        },
        created() {
            this.fetchReviews();
            bus.$on('openModal', () => {
                this.opened = true;
            });
            bus.$on('closeModal', () => {
                this.opened = false;
            });
            bus.$on('resetList', () => {
                this.loaded = false;
                this.reviews = [];
                this.fetchReviews();
            })
        },
        methods: {
            fetchReviews() {
                this.reviewsService.getReviews().then(res => {
                    this.reviews = res.data;
                    this.loaded = true;
                })
            },
            openModal() {
                this.opened = true;
                bus.$emit('openModal');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/common';

    .rating-wrapper {
        height: 100%;
        overflow-y: auto;

        .add-review {
            width: 80px;
            height: 80px;
            background-color: $color-secondary-800;
            position: fixed;
            bottom: 50px;
            right: 50px;
            @include flex-row-center-center;
            border-radius: 100%;
            cursor: pointer;

            @media all and (max-width: $phone-lower-limit) {
                width: 50px;
                height: 50px;
                bottom: 20px;
                right: 20px;
            }

            img {
                width: 60px;
                transition: transform .3s;

                @media all and (max-width: $phone-lower-limit) {
                    width: 40px;
                }
            }

            &:hover {
                img {
                    transform: scale(1.3) rotate(180deg);
                }
            }
        }

        @include scrollStyle($color-white);

        .rate-container {
            width: 100%;
            min-height: 100%;
            @include flex-column-center;
            position: relative;
        }
    }
</style>
