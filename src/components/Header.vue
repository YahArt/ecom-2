<template>
  <nav class="uk-navbar-container uk-padding-small" uk-navbar>
    <div class="uk-navbar-left">
      <div class="uk-logo">
        <img
          @click="navigateToHome"
          id="logo"
          src="../assets/images/tailored-fits-logo.png"
          alt="Tailored Fits Logo"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  methods: {
    navigateToHome: function () {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.uk-navbar-container {
  background-color: black;
}

#logo {
  max-height: 60px;
  cursor: pointer;
}
</style>
