const app = new Vue({
  el: '#app',
  data: {
    timer: '',
    startTime: 0,
    count: 0,
    isStartButtonDisabled: false,
    isPauseButtonDisabled: true,
    isClearButtonDisabled: false
  },
  computed: {
    hours: function () {
      return Math.floor(this.count / 1000 / 60 / 60)
    },
    minutes: function () {
      return Math.floor(this.count / 1000 / 60) % 60
    },
    seconds: function () {
      return Math.floor(this.count / 1000) % 60
    },
    milliSeconds: function () {
      return Math.floor(this.count % 1000)
    }
  },
  methods: {
    startTimer: function () {
      this.toggleButton()
      this.startTime = Math.floor(performance.now() - this.count)
      this.loop()
    },
    pauseTimer: function () {
      this.toggleButton()
      cancelAnimationFrame(this.timer)
    },
    clearTimer: function () {
      this.count = 0
    },
    toggleButton: function () {
      this.isStartButtonDisabled = !this.isStartButtonDisabled
      this.isPauseButtonDisabled = !this.isPauseButtonDisabled
      this.isClearButtonDisabled = !this.isClearButtonDisabled
    },
    loop: function () {
      this.count = Math.floor(performance.now()) - this.startTime
      this.timer = requestAnimationFrame(this.loop)
    }
  }
})