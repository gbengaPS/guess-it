<template>
<div class="wrapper">
  <nav><h1>Guess It</h1></nav>
  <div id="app">
    <BoxContainer :imageURLs="imageURLs"></BoxContainer>
  </div>
</div>
</template>

<script>
import BoxContainer from '@/components/BoxContainer';
import generateGame from './helpers/generateGame';

export default {
  name: 'App',
  data() {
    const arr = [
      'Batman.png',
      'bed.png',
      'book.ico',
      'cookies.ico',
      'dog.ico',
      'eye.ico',
      'fish.ico',
      'horse.png',
      'htgawm.png',
      'playstation.png',
      'poi.ico',
      'sneakers.ico',
      'spiderman.png',
      'spongebob.png',
      'superman.png',
      'jug.ico',
      'ironman.ico',
      'ferrari.png',
      'Naruto.ico',
      'mario.ico',
      'brain.ico',
      'black-panther.png',
    ];
    return {
      imageURLs: generateGame(30, arr),
    };
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
