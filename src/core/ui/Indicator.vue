<template>
    <div class="indicator-wrapper" :style="{ 'backgroundColor': withBg ? 'rgba(78, 78, 82, 0.5)' : 'transparent' }">
        <div class="load" :style="{ 'width': width + 'px', 'height': height + 'px' }">
            <hr><hr><hr><hr>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Indicator",
        props: {
            width: {
                type: String
            },
            height: {
                type: String
            },
            withBg: {
                type: Boolean,
                required: false
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../assets/styles/common';

    .indicator-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000000;
        width: 100%;
        height: 100%;
        background-color: transparent;
        @include flex-row-center-center;

        .load{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);
            /*change these sizes to fit into your project*/
            width:100px;
            height:100px;
        }
        .load hr{border:0;margin:0;width:40%;height:40%;position:absolute;border-radius:50%;animation:spin 2s ease infinite}

        .load :first-child{background:#19A68C;animation-delay:-1.5s}
        .load :nth-child(2){background:#F63D3A;animation-delay:-1s}
        .load :nth-child(3){background:#FDA543;animation-delay:-0.5s}
        .load :last-child{background:#193B48}

        @keyframes spin{
            0%,100%{transform:translate(0)}
            25%{transform:translate(160%)}
            50%{transform:translate(160%, 160%)}
            75%{transform:translate(0, 160%)}
        }
    }
</style>
