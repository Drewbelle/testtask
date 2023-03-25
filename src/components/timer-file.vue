<template>
  <div class="timerFile">
    <div class="timerFileContent">
      <div class="timerFileContentTime" :style="{borderBottom: `1px solid ${this.activeColor}`}">
        <div class="timerFileContentTimeValue" :style="{color: `${this.activeColor}`}" v-if="this.hours != null && this.minutes != null && this.seconds != null">{{ this.hours }}:{{ this.minutes }}:{{ this.seconds }}</div>
        <div class="timerFileContentTimeValue" :style="{color: `${this.activeColor}`}" v-if="this.hours === null && this.minutes != null && this.seconds != null">{{ this.minutes }}:{{ this.seconds }}</div>
        <div class="timerFileContentTimeValue" :style="{color: `${this.activeColor}`}" v-if="this.hours === null && this.minutes === null && this.seconds != null">{{ this.seconds }}</div>
      </div>
      <div class="timerFileContentBtns">
        <div class="timerFileContentBtnsStart" v-if="ifTimerStart === false" @click="startTimer"></div>
        <div class="timerFileContentBtnsPause" v-else-if="ifTimerStart === true" @click="pauseTimer"></div>
        <div class="timerFileContentBtnsStop" :style="{background: `${this.activeColor}`}" @click="stopTimer()"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimerFile',
    data() {
      return {
        seconds: 0,
        minutes: null,
        hours: null,
        timerInterval: null,
        ifTimerStart: false,
        activeColor: '#9E9E9E'
      }
    },
    props: {
      timers_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      startTimer() {
        this.activeColor = '#FFFFFF'
        this.ifTimerStart = true
        this.timerInterval = setInterval(() => {
          this.seconds++
          if (this.seconds === 60) {
            this.seconds = 0
            this.minutes++
            if (this.minutes === 60) {
              this.minutes = 0
              this.hours++
            }
          }
        }, 1000);
      },
      pauseTimer() {
        this.activeColor = '#9E9E9E'
        this.ifTimerStart = false
        clearInterval(this.timerInterval)
      },
      stopTimer() {
        this.activeColor = '#9E9E9E'
        this.ifTimerStart = false
        clearInterval(this.timerInterval)
        this.seconds = 0
        this.minutes = null
        this.hours = null
      }
    }
  }
</script>

<style lang="scss">

</style>
