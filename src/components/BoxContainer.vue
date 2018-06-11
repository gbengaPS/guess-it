<template>
<div>
  <div class="game-wrapper">
  <div class="box-container">
  <Box
    v-for="(url, index) in imageURLs"
    :imageURL="url"
    :key="index"
    :runChecks="runChecks"
    :index="index"
  >{{url}}</Box>

  </div>
  <div class="game-info">
    <h2> Score</h2>
    <p class="score">{{score}}</p>
  </div>
  </div>
</div>
</template>
<script>
import Box from '@/components/Box';

export default {
  props: ['imageURLs'],
  data() {
    return {
      previous: {},
      current: {},
      clickCount: 0,
      currentScoreClicks: 0,
      score: 0,
      opened: 0,
    };
  },
  methods: {
    runChecks(value, index) {
      this.handleClickCount();
      if (!this.previous.value) {
        this.previous = { value, index };
      } else if (this.previous.value && !this.current.value) {
        this.current = { value, index };
        if (!this.checkCorrectness()) {
          this.$children[this.previous.index].closeBox();
        }
      } else if (this.previous.value && this.current.value) {
        this.previous = this.current;
        this.current = { value, index };
        if (!this.checkCorrectness()) {
          this.$children[this.previous.index].closeBox();
        }
      }
    },
    checkCorrectness() {
      let response = false;
      if (
        this.current.value === this.previous.value &&
        this.current.index !== this.previous.index
      ) {
        // Disable both boxes
        this.$children[this.previous.index].disableBox();
        this.$children[this.current.index].disableBox();
        // reset state
        this.previous = {};
        this.current = {};
        response = true;
        this.opened += 2;
        this.handleGameScore();
      }
      return response;
    },
    handleClickCount() {
      this.clickCount += 1;
    },
    handleGameScore() {
      if (this.clickCount < 7) {
        this.score += 4;
      }
      if (this.clickCount === this.currentScoreClicks + 2) {
        this.score += 4;
      }
      if (this.opened === this.imageURLs.length) {
        const boxCount = this.imageURLs.length * 2;
        const bonus = boxCount - this.clickCount;
        if (bonus > 0) {
          this.score += bonus;
        }
      }

      this.currentScoreClicks = this.clickCount;
      this.score += 2;
    },
    checkMultipleClicks() {},
  },
  components: {
    Box,
  },
};
</script>
<style>
.box-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 400px;
  min-height: 400px;
  border-radius: 5px;
}
.game-wrapper {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background-color: #fcfcfc;
}
.score {
  text-align: center;
}
.game-info {
  width: 150px;
}
.game-info h2 {
  text-align: center;
  margin: 0;
  color: #222;
}
</style>
