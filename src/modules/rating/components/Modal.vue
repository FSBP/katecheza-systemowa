<template>
    <div
            @click="closeModal($event)"
            class="modal-wrapper"
            id="modal-layer"
            :style="{ 'opacity': opened ? '1' : '0', 'visibility': opened ? 'visible' : 'hidden' }"
    >
        <div class="modal-content">
            <div class="ribbon">
                <img src="../../../assets/icons/close-24px.svg" alt="" @click="closeModal($event)" id="close-btn">
            </div>
            <form ref="form" @submit="submitForm($event)">
                <Indicator v-if="loading" :with-bg="true"/>
                <h1>Dodaj opinię</h1>
                <p>Podziel się swoją opinią z innymi</p>
                <div class="inputs-container">
                    <textarea placeholder="Wpisz swoją opinię..." v-model="review" required></textarea>
                    <div class="stars-box">
                        <div
                                class="star"
                                v-for="(star, index) in [1,2,3,4,5]"
                                :key="index"
                                ref="star"
                                @mouseover="hoverStar(index)"
                                @mouseout="mouseOutStar(index)"
                                @click="clickStar(index)"
                        ></div>
                    </div>
                    <button type="submit">Dodaj</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import { bus } from "../../../main";
    import { reviewsService } from "../../../core/services";
    import Indicator from "../../../core/ui/Indicator";

    export default {
        name: "Modal",
        components: {Indicator},
        data() {
          return {
              reviewsService: reviewsService,
              loading: false,
              opened: false,
              review: '',
              starClicked: false,
              rate: 0
          }
        },
        created() {
            bus.$on('openModal', value => {
                this.opened = true;
                this.courseId = value;
            });
        },
        methods: {
            hoverStar(index) {
                if (!this.starClicked) {
                    for (let i = 0; i < index + 1; i++) {
                        this.$refs['star'][i].style.backgroundImage = `url(${require('../../../assets/icons/star-24px.svg')})`;
                    }
                }
            },
            mouseOutStar(index) {
                if (!this.starClicked) {
                    for (let i = 0; i < index + 1; i++) {
                        this.$refs['star'][i].style.backgroundImage = `url(${require('../../../assets/icons/star_border-24px.svg')})`;
                    }
                }
            },
            clickStar(index) {
                this.rate = index + 1;
                this.starClicked = true;
                this.$refs['star'].forEach(star => {
                    star.style.backgroundImage = `url(${require('../../../assets/icons/star_border-24px.svg')})`;
                });
                for (let i = 0; i < index + 1; i++) {
                    this.$refs['star'][i].style.backgroundImage = `url(${require('../../../assets/icons/star-24px.svg')})`;
                }
            },
            closeModal(e) {
                if (e.target.getAttribute('id') === 'modal-layer' ||
                    e.target.getAttribute('id') === 'close-btn') {
                    this.opened = false;
                    bus.$emit('closeModal');
                    this.loading = false;
                    this.$refs['form'].reset();
                    this.clearModels();
                }
            },
            clearModels() {
                this.review = '';
                this.rate = 0;
                this.$refs['star'].forEach(star => {
                    star.style.backgroundImage = `url(${require('../../../assets/icons/star_border-24px.svg')})`;
                });
                this.starClicked = false;
            },
            submitForm(e) {
                e.preventDefault();
                this.loading = true;
                this.reviewsService.addReview (
                    this.review,
                    this.rate,
                    new Date()
                ).then(res => {
                    bus.$emit('closeModal');
                    this.$refs['form'].reset();
                    this.loading = false;
                    this.opened = false;
                    this.clearModels();
                    bus.$emit('resetList');
                    this.$toastr.Add({
                        name: "SuccessToast",
                        title: "",
                        msg: "Twoja opinia została dodana",
                        clickClose: true,
                        type: "success",
                        preventDuplicates: true,
                        style: {
                            backgroundColor: "#4BB543",
                            height: '100px',
                            fontFamily: `'Roboto', sans-serif`,
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '320px',
                        }
                    });
                }).catch(err => {
                    this.loading = false;
                    this.$toastr.Add({
                        name: "ErrorToast",
                        title: "",
                        msg: "Wystąpił błąd",
                        clickClose: true,
                        type: "error",
                        preventDuplicates: true,
                        style: {
                            backgroundColor: "#B00020",
                            height: '100px',
                            fontFamily: `'Roboto', sans-serif`,
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '320px',
                        }
                    });
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .modal-wrapper {
        position: fixed;
        top: 0;
        opacity: 0;
        left: 400px;
        width: calc(100% - 400px);
        height: 100%;
        background-color: rgba($color-secondary-800, 0.5);
        z-index: 1000000000;
        transition: all .3s;
        visibility: hidden;
        @include flex-row-center-center;
        @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
            left: 300px;
            width: calc(100% - 300px);
        }
        @media all and (max-width: $phone-upper-limit) {
            left: 0;
            width: 100%;
        }

        .modal-content {
            width: 60%;
            height: auto;
            overflow-y: auto;
            max-height: 90%;
            border-radius: 8px;
            @media all and (max-width: $laptop-lower-limit) {
                width: 90%;
            }
            @include scrollStyle($color-secondary-800);

            .ribbon {
                width: 100%;
                padding: 10px 20px;
                @include flex-row-center-end;
                background-color: $color-primary;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                img {
                    width: 40px;
                    cursor: pointer;
                    transition: transform .3s;

                    &:hover {
                        transform: rotate(10deg);
                    }
                }
            }

            form {
                width: 100%;
                padding: 20px;
                background-color: $color-white;
                border-bottom-right-radius: 8px;
                border-bottom-left-radius: 8px;
                position: relative;

                h1 {
                    color: $color-secondary-800;
                    @include font-roboto(500);
                    font-size: 35px;
                }

                p {
                    color: $color-secondary-800;
                    @include font-roboto(400);
                    font-size: 20px;
                    margin-top: 20px;
                    border-bottom: 1px solid $color-success;
                    padding-bottom: 10px;
                    margin-bottom: 20px;

                    span {
                        font-weight: bold;
                    }
                }

                .inputs-container {
                    width: 100%;
                    height: auto;
                    @include flex-column-center;

                    .rodo {
                        @include font-open-sans(400);
                        margin-bottom: 20px;
                        width: 90%;
                        font-size: 15px;
                        color: $color-secondary-800;
                        @include flex-row-center-left;

                        a {
                            color: $color-success;
                            margin-left: 5px;
                            text-decoration: underline;
                            text-decoration-color: $color-success;
                        }

                        input {
                            width: 20px;
                            @include flex-row-center-center;
                            margin: 0 20px 0 0;
                        }
                    }

                    input,
                    textarea,
                    select {
                        width: 90%;
                        height: 50px;
                        margin-bottom: 20px;
                        padding: 20px;
                        @include font-open-sans(400);
                        font-size: 15px;
                        color: $color-secondary-800;

                        &:focus {
                            outline-color: $color-success;
                        }

                        &::placeholder {
                            color: $color-secondary-800;
                        }
                    }

                    select {
                        height: auto;
                    }

                    textarea {
                        height: 250px;
                        resize: none;
                    }

                    button {
                        width: 90%;
                        height: 50px;
                        background-color: $color-success;
                        color: $color-white;
                        border: 0;
                        outline: 0;
                        transition: background-color .3s;
                        cursor: pointer;
                        @include font-roboto(400);
                        font-size: 25px;
                        letter-spacing: 1px;

                        &:hover {
                            background-color: $color-secondary-700;
                        }
                    }
                }
            }
        }
    }
    .stars-box {
        @include flex-row;
        width: 90%;
        margin-bottom: 20px;
    }
    .date {
        width: auto;
        height: 100%;
        color: $color-secondary-500;
        @include font-roboto(400);
        font-size: 14px;
        @include flex-row-center-center;
    }

    .star {
        background-image: url("../../../assets/icons/star_border-24px.svg");
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;

        &:nth-child(1):hover {
            &:nth-child(3) {
                background-image: url("../../../assets/icons/star-24px.svg");
            }
        }
    }
</style>
