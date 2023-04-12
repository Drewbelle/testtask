<template>
    <div class="calculateFile">
        <v-icon style="font-size: 50px; margin-top: 50px; color: #EF6C00;">mdi-calculator</v-icon>
        <div class="sliderHeight" @mouseover="showValueH.opacity = 1" @mouseleave="showValueH.opacity = 0">
            <input type="range" min="4" max="60" step="1" v-model="calcHeight">
            <div class="track"></div>
            <div class="range" v-bind:style="rangeHTrack"></div>
            <div class="thumb" v-bind:style="rangeH">
                <div class="rightThumbValue" v-bind:style="showValueH">{{ this.calcHeight }}</div>
            </div>
        </div>
        <div class="sliderWidth" @mouseover="showValueW.opacity = 1" @mouseleave="showValueW.opacity = 0">                        
            <input type="range" min="10" max="250" step="1" v-model="calcWidth">
            <div class="track"></div>
            <div class="range" v-bind:style="rangeWTrack"></div>
            <div class="thumb" v-bind:style="rangeW">
                <div class="rightThumbValue" v-bind:style="showValueW">{{ this.calcWidth }}</div>
            </div>
        </div>
        <div class="sliderLength" @mouseover="showValueL.opacity = 1" @mouseleave="showValueL.opacity = 0">
            <input type="range" min="15" max="360" step="1" v-model="calcLength">
            <div class="track"></div>
            <div class="range" v-bind:style="rangeLTrack"></div>
            <div class="thumb" v-bind:style="rangeL">
                <div class="rightThumbValue" v-bind:style="showValueL">{{ this.calcLength }}</div>
            </div>
        </div>
        <div class="calculateFile_summ">
            <span class="size">Высота: {{ this.calcHeight }}м</span>
            <span class="size">Ширина: {{ this.calcWidth }}м</span>
            <span class="size">Длина: {{ this.calcLength }}м</span><br>
            Примерная цена: <span class="coloredSpan">{{ this.calcSumm() }}</span>₽. Приблизительная стоимость м3: 1 500 руб.
        </div>
    </div>
</template>

<script>
export default {
    name: 'calculateFile', 
    data() {
        return {
            showValueH: {
                opacity: '0'
            },
            showValueW: {
                opacity: '0'
            },
            showValueL: {
                opacity: '0'
            },
            rangeHTrack: {
                left: '0%',
                right: '0%',
                top: '0',
                bottom: '0',
            },
            rangeH: {
                left: '0%',
            },
            rangeWTrack: {
                left: '0%',
                right: '0%',
                top: '0',
                bottom: '0',
            },
            rangeW: {
                left: '0%',
            },
            rangeLTrack: {
                left: '0%',
                right: '0%',
                top: '0',
                bottom: '0',
            },
            rangeL: {
                left: '0%',
            },
            calcHeight: 4,
            calcWidth: 10,
            calcLength: 15,
        }
    },

    methods: { //сумма за кубометры
        calcSumm() {
            let summ = this.calcHeight * this.calcLength * this.calcWidth * 1500
            return summ
        }
    },

    watch: { //подсчёт % сдвига ползунка слайдера
        calcHeight() {
            var calcValue = null
            calcValue = (this.calcHeight - 4) * 100 / 56 + '%'
            this.rangeH.left = calcValue
            this.rangeHTrack.left = calcValue
        },
        calcWidth() {
            var calcValue = null
            calcValue = (this.calcWidth - 10) * 100 / 240 + '%'
            this.rangeW.left = calcValue
            this.rangeWTrack.left = calcValue
        },
        calcLength() {
            var calcValue = null
            calcValue = (this.calcLength - 15) * 100 / 345 + '%'
            this.rangeL.left = calcValue
            this.rangeLTrack.left = calcValue
        }
    }
}
</script>