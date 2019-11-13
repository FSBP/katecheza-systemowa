<template>
    <button :class="['btn btn--absolute', `order--${ position }`]" :data-label="label">
        <div class="label">{{ label }}</div>
    </button>
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
        position: absolute;

        &:hover::before {
            transform: translateX(0%);
        }

        .label {
            padding: 30px;
            width: 100%;
            height: 100%;
            transition: transform 0.3s;
        }

        &:hover .label {
            transform: translateY(100%);
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
        }
    }

    .order {
        &--1 {
            left: 0;
            bottom: 0;
        }

        &--2 {
            left: 100px;
            bottom: 140px;
        }

        &--3 {
            left: 50px;
            bottom: 320px;
        }

        &--4 {
            left: 400px;
            bottom: 170px;
        }

        &--5 {
            left: 580px;
            bottom: 400px;
        }

        &--6 {
            left: 700px;
            bottom: 640px;
        }

        &--7 {
            right: 0;
            bottom: 500px;
        }

        &--8 {
            right: 180px;
            bottom: 350px;
        }

        &--9 {
            right: 100px;
            bottom: 200px;
        }

        &--10 {
            right: 300px;
            bottom: 50px;
        }
    }
</style>
