<template>
    <div class="sliderFileEl" @click="bannerClick()">
        <img class="sliderFileEl_img" :src="require('@/assets/imgs/' + sliderel_data.url)" alt="">
    </div>
</template>

<script>
export default {
    name: 'sliderFileEl', 
    data() {
    return {
    }
    },
    props: { 
        sliderel_data:{
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>