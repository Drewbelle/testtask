<template>
    <div class="reviewsFile" @click="bannerClick()">
        <div class="reviewsFile_username">{{ reviews_data.userName }}</div>
        <div class="reviewsFile_date">{{ reviews_data.date }}</div>
        <div class="reviewsFile_info">
            <img class="reviewsFile_info_img" :src="require('@/assets/imgs/' + reviews_data.url)" alt="">
            <div class="reviewsFile_info_comment">{{ reviews_data.comment }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reviewsFile', 
    data() {
    return {
    }
    },
    props: { 
        reviews_data:{
            type: Object,
            default() {
                return {}
            }
        }
    },
}
</script>