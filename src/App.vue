<template>
  <div id="app">
    <div class="timersContainer">
      <TimerFile
      v-for="Timer in this.timers"  
      v-bind:key="Timer.id"
      v-bind:timers_data="Timer"
      />
      <div class="addTimer" @click="addTimer()">
        <div class="addTimerFstHalfPls"></div>
        <div class="addTimerSndHalfPls"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import TimerFile from '@/components/timer-file.vue' 
  export default {
    name: 'App',
    components: {
      TimerFile,
    },
    data() {
      return {
        timers: []
      }
    },
    methods: {
      addTimer() {
        let newTimer = {}
        newTimer.id = this.timers.length + 1
        this.timers.push(newTimer)
      }
    }
  }
</script>

<style lang="scss">

</style>
