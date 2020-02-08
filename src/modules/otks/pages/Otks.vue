<template>
    <div class="otks-wrapper page">
        <div class="content">
            <h1>OTKS</h1>
            <h3>Opolskie Towarzystwo Katechezy Systemowej</h3>
            <p>Katecheza Systemowa jest na drodze dynamicznego rozwoju. Właśnie dlatego chcemy do życia powołać Opolskie Towarzystwo Katechezy Systemowej. Zadaniem tego towarzystwa będzie wspieranie oraz budowanie rozwoju tego nowoczesnego ujęcia katechezy. Potrzebni są ludzie, którzy będą propagować to dzieło i rozwijać w następnych latach działalności Towarzystwa.</p>
            <p>Obecnie Towarzystwo jest w fazie budowy i organizacji, konstruowania założeń statutowych oraz dokonywania koniecznych działań związanych z założeniem i legalizacją Towarzystwa od strony prawnej.</p>
            <p>Obecnie każdy chętny katecheta, ale nie tylko, może zgłosić chęć przyłączenia się do naszych działań organizacyjnych. Swoją chęć będzie można także wyrazić po oficjalnym rozpoczęciu działalności naszego Towarzystwa. Prosimy o kontakt wszystkich tych, którym rozwój katechezy leży na sercu. Można się z nami skontaktować korzystając z zakładki Kontakt, która znajduje się na stronie głównej.</p>
            <p>O wszystkich krokach i zmianach będziemy na bieżąco informować na tej witrynie internetowej.</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Otks"
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .otks-wrapper {
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
                content: '#otks';
                @include font-roboto(400);
                color: $color-success;
                top: 20px;
                left: 50px;
                @media all and (max-width: $phone-lower-limit) {
                    left: 20px;
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

            h3 {
                color: $color-primary;
                @include font-open-sans(400);
                font-size: 30px;
                width: auto;
                max-width: 100%;
                text-align: left;
                margin-top: 20px;
                @media all and (max-width: $phone-lower-limit) {
                    font-size: 20px;
                    margin-top: 30px;
                    text-align: center;
                }
            }

            p {
                margin-top: 20px;
                color: $color-secondary-700;
                font-size: 18px;
                @include font-roboto(300);
                line-height: 35px;
                @media all and (max-width: $phone-lower-limit) {
                    text-align: center;
                    line-height: 30px;
                    font-size: 16px;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
