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
    };
  },
  methods: {
    runChecks(value, index) {
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
      }
      return response;
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
  background-color: #fff;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1);
}
.game-info {
  width: 150px;
}
.game-info h2 {
  text-align: center;
  margin: 0;
  color: #fff;
}
</style>
