<template>
    <div class="sliderFile">
        <div class="sliderFile_left" @click="leftClick()">
            <v-icon v-bind:style="{transition: '0.5s', fontSize: `${leftArrowSize}px`}" @mouseover="leftArrowSize = 70" @mouseleave="leftArrowSize = 50">mdi-chevron-left</v-icon>
        </div>
        <div class="sliderFile_block">
            <div class="sliderFile_block_content" v-bind:style="{marginLeft: `${sliderML}px`}">
            <sliderFileEl
                v-for="SliderEl in GETSLIDERELSFROMSTATE"
                v-bind:key="SliderEl.id"
                v-bind:sliderel_data="SliderEl"
                v-on:bannerClick="bannerClick(SliderEl)"
            />
        </div>
        </div>
        <div class="sliderFile_right" @click="rightClick()">
            <v-icon v-bind:style="{transition: '0.5s', fontSize: `${rightArrowSize}px`}" @mouseover="rightArrowSize = 70" @mouseleave="rightArrowSize = 50">mdi-chevron-right</v-icon>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import sliderFileEl from './slider-file-el.vue';
export default {
    name: 'sliderFile',
    components: {
        sliderFileEl,
    },
    data() {
        return {
            leftArrowSize: 50,
            rightArrowSize: 50,
            sliderML: -25,
        }
    },
    methods: {
        leftClick() {
            let findPictWidth = document.querySelector('.sliderFileEl').getBoundingClientRect().width
            if (this.sliderML === -25) {
                this.sliderML = -((((this.GETSLIDERELSFROMSTATE.length) * findPictWidth) + ((this.GETSLIDERELSFROMSTATE.length) * 50)) + 25)
            }
            this.sliderML = this.sliderML + findPictWidth + 50
        },
        rightClick() {
            let findPictWidth = document.querySelector('.sliderFileEl').getBoundingClientRect().width
            if (this.sliderML === -(((this.GETSLIDERELSFROMSTATE.length - 1) * findPictWidth) + ((this.GETSLIDERELSFROMSTATE.length - 1) * 50)) - 25) {
                this.sliderML = findPictWidth + 25
            }
            this.sliderML = this.sliderML - findPictWidth - 50
        }
    },
    computed: {
        ...mapGetters(['GETSLIDERELSFROMSTATE']),
    }
}
</script>