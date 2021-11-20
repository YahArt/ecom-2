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

    <div class="uk-navbar-right">
      <div @click="navigateToProfile" id="profile">
        <div class="uk-margin-small-right">My Profile</div>
        <span uk-icon="user"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  components: {},
  methods: {
    navigateToHome: function () {
      this.$router.push('/');
    },

    navigateToProfile: function () {
      this.$router.push('/profile');
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

#profile {
  color: white;
  transition: all 0.2s ease-in;
  cursor: pointer;
}

#profile:hover {
  color: #ff1e00;
}
</style>
