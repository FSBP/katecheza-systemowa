<template>
    <div :class="['btn btn--absolute', `order--${ position }`]" :data-label="label">
        <div class="label">{{ label }}</div>
    </div>
</template>

<script>
    export default {
        name: "NavigationButton.vue",
        props: {
            label: {
                type: String,
                required: true
            },
            position: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../assets/styles/common';

    .btn {
        outline: 0;
        background-color: transparent;
        border: 4px solid $color-white;
        color: $color-white;
        @include font-roboto(300);
        font-size: 30px;
        @include flex-row-center-center;
        cursor: pointer;
        overflow: hidden;

        @media all and (max-width: $phone-lower-limit) {
            width: 100%;
            font-size: 20px;
            margin: 15px 0;
        }

        @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
            position: absolute;
        }
        @media all and (min-width: $tablet-upper-limit) and (max-width: $laptop-lower-limit) {
            position: absolute;
        }
        @media all and (min-width: $laptop-upper-limit) {
            position: absolute;
        }

        &:hover::before {
            transform: translateX(0%);
        }

        .label {
            padding: 30px;
            @media all and (max-width: $phone-lower-limit) {
                padding: 10px;
                text-align: center;
            }
            @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
                padding: 15px;
            }
            @media all and (min-width: $tablet-upper-limit) and (max-width: $laptop-lower-limit) {
                padding: 20px;
            }
            width: 100%;
            height: 100%;
            transition: transform 0.3s;
        }

        @media all and (min-width: $phone-lower-limit) {
            &:hover .label {
                transform: translateY(100%);
            }
        }

        &::before {
            content: attr(data-label);
            width: 100%;
            height: 100%;
            position: absolute;
            color: $color-secondary-800;
            background-color: $color-white;
            @include flex-row-center-center;
            transform: translateX(-100%);
            transition: transform 0.3s;

            @media all and (max-width: $phone-lower-limit) {
                display: none;
            }
        }
    }

    @media all and (min-width: $phone-upper-limit) and (max-width: $tablet-lower-limit) {
        .order {
            &--1 {
                left: 0;
                bottom: 0;
            }

            &--2 {
                left: 20px;
                bottom: 140px;
            }

            &--3 {
                right: 0;
                bottom: 320px;
            }

            &--4 {
                right: 0;
                bottom: 210px;
            }

            &--5 {
                left: 20px;
                bottom: 400px;
            }

            &--6 {
                right: 0;
                bottom: 420px;
            }

            &--7 {
                right: 0;
                bottom: 540px;
            }

            &--8 {
                left: 60px;
                bottom: 250px;
            }

            &--9 {
                right: 220px;
                bottom: 100px;
            }

            &--10 {
                right: 10px;
                bottom: 0;
            }
        }
    }
    @media all and (min-width: $tablet-upper-limit) and (max-width: $laptop-lower-limit) {
        .order {
            &--1 {
                left: 0;
                bottom: 0;
            }

            &--2 {
                left: 20px;
                bottom: 140px;
            }

            &--3 {
                left: 50px;
                bottom: 350px;
            }

            &--4 {
                left: 200px;
                bottom: 200px;
            }

            &--5 {
                right: 200px;
                bottom: 600px;
            }

            &--6 {
                right: 5px;
                bottom: 220px;
            }

            &--7 {
                right: 0;
                bottom: 480px;
            }

            &--8 {
                right: 180px;
                bottom: 350px;
            }

            &--9 {
                right: 50px;
                bottom: 50px;
            }

            &--10 {
                right: 300px;
                bottom: 10px;
            }
        }
    }
    @media all and (min-width: $laptop-upper-limit) {
        .order {
            &--1 {
                left: 0;
                bottom: 0;
            }

            &--2 {
                left: 20px;
                bottom: 140px;
            }

            &--3 {
                left: 200px;
                bottom: 260px;
            }

            &--4 {
                left: 450px;
                bottom: 100px;
            }

            &--5 {
                left: 600px;
                bottom: 400px;
            }

            &--6 {
                left: 700px;
                bottom: 570px;
            }

            &--7 {
                right: 0;
                bottom: 430px;
            }

            &--8 {
                right: 180px;
                bottom: 300px;
            }

            &--9 {
                right: 100px;
                bottom: 150px;
            }

            &--10 {
                right: 300px;
                bottom: 0;
            }
        }
    }
</style>
