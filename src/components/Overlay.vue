<template>
  <div class="overlay uk-flex uk-flex-center">
    <div uk-spinner="ratio: 3"></div>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {},
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  z-index: 2;
}
</style>
