<template>
    <div class="mainFile">
        <headerFile/>
        <div class="mainFile__content">
            <div class="mainFile__content-titleBlock">
                <span class="mainFile__content-titleBlock_title">ДЕМОНТАЖ ЗДАНИЙ В САМАРЕ</span>
                <router-link to="/feedback" class="mainFile__content-titleBlock_feedback">Обратная связь</router-link>
            </div>
            <div class="mainFile__content-description">
                <div class="mainFile__content-description_about">
                    <div class="mainFile__content-description_about_title"><span class="coloredSpan">О нас:</span></div>
                    <div class="mainFile__content-description_about_info">{{ GETDESCRIPTIONSFROMSTATE.text0 }}</div>
                </div>
                <div class="mainFile__content-description_price">
                    <div class="mainFile__content-description_price_title"><span class="coloredSpan">Стоимость демонтажа:</span></div>
                    <div class="mainFile__content-description_price_info">{{ GETDESCRIPTIONSFROMSTATE.text }}</div>
                </div>
                <div class="mainFile__content-description_kinds">
                    <div class="mainFile__content-description_kinds_title"><span class="coloredSpan">Виды и особенности демонтажа:</span></div>
                    <div class="mainFile__content-description_kinds_info">{{  GETDESCRIPTIONSFROMSTATE.text2 }}</div>
                </div>
            </div>
            <div class="mainFile__content-examples">
                <sliderFile/>
            </div>
            <div class="mainFile__content-reviews">
                <div class="mainFile__content-reviews_container">
                    <reviewsFile
                        v-for="review in GETREVIEWSFROMSTATE"
                        v-bind:key="review.id"
                        v-bind:reviews_data="review"
                        v-on:bannerClick="bannerClick(SliderEl)"
                    />
                </div>
            </div>
            <div class="mainFile__content-calculate">
                <calculateFile/>
            </div>
        </div>
        <footerFile/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import headerFile from './header-file.vue';
    import sliderFile from './slider-file.vue';
    import reviewsFile from './reviews-file.vue';
    import calculateFile from './calculate-file.vue';
    import footerFile from './footer-file.vue'
    export default {
        name: 'MainFile',
        components: {
            headerFile,
            sliderFile,
            reviewsFile,
            calculateFile,
            footerFile,
        },  
        methods: { //Получение данных из апи
            ...mapActions(['GETSLIDERELEMENTSFROMAPI', 'GETREVIEWSFROMAPI', 'GETDESCRIPTIONFROMAPI']),
        },
        computed: { //Получение данных из стора
            ...mapGetters(['GETREVIEWSFROMSTATE', 'GETDESCRIPTIONSFROMSTATE']),
        },
        mounted() {
            this.GETSLIDERELEMENTSFROMAPI(), this.GETREVIEWSFROMAPI(), this.GETDESCRIPTIONFROMAPI()
        },
    }
</script>