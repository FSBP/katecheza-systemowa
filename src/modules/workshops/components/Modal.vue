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
                <h1>Zapisy na szkolenie</h1>
                <p>Numer szkolenia: <span>{{ workshopId }}</span></p>
                <div class="inputs-container">
                    <input type="text" placeholder="Imię*" required v-model="firstName">
                    <input type="text" placeholder="Nazwisko*" required v-model="lastName">
                    <input type="email" placeholder="Email*" required v-model="email">
                    <input type="tel" placeholder="Telefon*" required v-model="phone">
                    <input type="text" placeholder="Adres" v-model="address">
                    <textarea placeholder="Uwagi" v-model="info"></textarea>
                    <div class="rodo">
                        <input type="checkbox" required id="rodo" v-model="rodo">
                        Przeczytałem i akceptuję<a href="https://michalwrzosek.pl/polityka.pdf" target="_blank">Politykę prywatności.*</a>
                    </div>
                    <button type="submit">Wyślij</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import { bus } from "../../../main";
    import { workshopsService } from "../../../core/services";
    import Indicator from "../../../core/ui/Indicator";

    export default {
        name: "Modal",
        components: {Indicator},
        data() {
          return {
              workshopsService: workshopsService,
              loading: false,
              opened: false,
              workshopId: null,
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              address: '',
              info: '',
              rodo: '',
          }
        },
        created() {
            bus.$on('openModal', value => {
                this.opened = true;
                this.workshopId = value;
            });
        },
        methods: {
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
                this.workshopId = null;
                this.firstName = '';
                this.lastName = '';
                this.email = '';
                this.phone = '';
                this.address = '';
                this.info = '';
                this.rodo = '';
            },
            submitForm(e) {
                e.preventDefault();
                this.loading = true;
                this.workshopsService.workshopsEnrollUser(
                    this.workshopId,
                    this.firstName,
                    this.lastName,
                    this.email,
                    this.phone,
                    this.address,
                    this.info
                ).then(res => {
                    bus.$emit('closeModal');
                    this.$refs['form'].reset();
                    this.loading = false;
                    this.opened = false;
                    this.clearModels();
                    this.$toastr.Add({
                        name: "SuccessToast",
                        title: "",
                        msg: "Twoje zgłoszenie zostało wysłane",
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
                        height: 100px;
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
</style>
