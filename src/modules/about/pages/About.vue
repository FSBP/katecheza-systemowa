<template>
    <div class="about-wrapper page">
        <div class="content">
            <h1>O nas</h1>
            <p>Dla wielu katechetów praca w katechezie to życiowe wyzwanie, powołanie i oczywiście praca. Dla nas bardzo istotny był fakt, jak pracować w katechezie z zapałem, energią i ciekawymi pomysłami, które moglibyśmy realizować w szkolnych realiach. Te motywy i pragnienia zaprosiły nas do intensywnych poszukiwań.</p>
            <p>
                Zadaliśmy sobie mocne pytanie: Czy można katechezę prowadzić tak, aby wszyscy uczestnicy tego wydarzenia byli zaciekawieni, jednocześnie  zadowoleni i aby przyniosła wymierne efekty?
            </p>
            <p>
                Pytanie było dobre i nie od razu pojawiła się odpowiedź, jak należy to zrobić. Niemniej jednak poszukiwania dały efekt w postaci stworzenia całkowicie nowego ujęcia pod  nazwą Katechezy Systemowej.
            </p>
            <p>
                Pierwsze oficjalne szkolenie w zakresie tej pracy odbyło się 13 maja 2017 roku a zostało zorganizowane przy Wydziale Katechetycznym Diecezji Opolskiej.
            </p>
            <p>
                Wyrażamy głębokie nadzieję, że ten nurt katechezy będzie rozwijał się dynamicznie i przyniesie dobre owoce.
            </p>
            <p>
                Pozwolenia na rozwijanie tego ujęcia katechezy udzielił biskup opolski ks. Andrzej Czaja.
            </p>
            <p>
                Merytoryczną stroną Katechezy Systemowej zajmuje się Wydział Katechetycznym Diecezji Opolskiej, której dyrektorem jest ks. Jerzy Kostorz.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped lang="scss">

    @import '../../../assets/styles/common';

    .about-wrapper {
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
                content: '#o_nas';
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
