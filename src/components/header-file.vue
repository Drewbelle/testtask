<template>
  <div class="headerFile">
    <div class="headerFile_content">

      <div class="headerFile_content_title">
        <v-icon v-if="this.winwid > 767" style="font-size: 50px;">mdi-office-building-marker</v-icon>
        <v-icon v-else-if="this.winwid <= 767" style="font-size: 25px;">mdi-office-building-marker</v-icon>
        <router-link to="/" class="headerFile_content_title_title">Демонтаж зданий</router-link>
      </div>
      <div class="headerFile_content_search">
        <div class="headerFile_content_search-navbtn">Поиск</div>
        <router-link to="/feedback" class="headerFile_content_search-navbtn">Связь</router-link>
        <div class="headerFile_content_search-navbtn">О нас</div>
      </div>

      <div v-if="this.winwid > 767" class="headerFile_content_login">
        <v-btn 
          class="text-none"
          color="orange-lighten-2"
          rounded="0"
        >
          Вход
        </v-btn>

        <v-btn 
          class="text-none"
          color="orange-lighten-2"
          rounded="0"
        >
          Регистрация
        </v-btn>
      </div>
      <div v-else-if="this.winwid <= 767" class="headerFile_content_login">
        <v-icon style="font-size: 25px;">mdi-account</v-icon>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'headerFile',
    data() {
      return {
        winwid: null
      }
    },
    mounted() {
      this.winwid = window.innerWidth
    }
  }
</script>
