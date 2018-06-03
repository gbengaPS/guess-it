<template>
<div class="wrapper">
  <nav><h1>Guess It</h1></nav>
   <select v-model="level" v-on:change="handleGameLevel">
      <option value="" > Select game level </option>
      <option value="1">Easy</option>
      <option value="2">Medium</option>
      <option value="3">Hard</option>
  </select>
  <div id="app">
    <BoxContainer :imageURLs="imageURLs" />
  </div>
</div>
</template>

<script>
import BoxContainer from '@/components/BoxContainer';
import generateGame from './helpers/generateGame';
import gameArray from './helpers/gameArray';

export default {
  name: 'App',
  data() {
    return {
      imageURLs: [],
      level: 1,
    };
  },
  methods: {
    handleGameLevel() {
      this.imageURLs = generateGame(10 * this.level, gameArray);
    },
  },
  components: {
    BoxContainer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 5%;
}
.wrapper {
  height: 100%;
}
</style>
