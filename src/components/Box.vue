<template>
<div :class="{box: box, box__disabled: disabled}" @click="toggleBox">
  <img v-if="isOpen"  :src="path+imageURL" />
  <span v-else>Box</span>
</div>
</template>

<script>
export default {
  props: ['imageURL', 'close', 'runChecks', 'index'],
  name: 'hope',
  data() {
    return {
      box: true,
      disabled: false,
      isOpen: false,
      text: 'box',
      path: 'static/images/',
    };
  },
  methods: {
    toggleBox() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
        this.runChecks(this.imageURL, this.index);
      }
    },
    closeBox() {
      this.isOpen = false;
    },
    disableBox() {
      this.disabled = true;
    },
  },
};
</script>

<style>
.box {
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: #fff;
  box-shadow: 0 3px 8px -2px rgba(95, 7, 162, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bolder;
  padding: 3px;
  border-radius: 5px;
  background-color: #fcfcfc;
  border: 1px solid #aaa;
}
.box :hover {
  box-shadow: 0 6px 8px -2px rgba(95, 7, 162, 0.45);
}
.box__disabled {
  background-color: transparent;
  border: 1px solid #aaa;
  cursor: default;
}
.box img {
  width: inherit;
  height: inherit;
}
</style>
