<template>
  <!-- 
  <div class="header">
    <img id="tailoredFitsLogo" alt="Tailored Fits Logo" src="../assets/images/tailored-fits-logo.png">
    <a href=""></a>
  </div>
  -->
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="">Test</a></li>
            <li class="uk-parent"><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>

  
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style scoped>
.header {
    height: 80px;
    padding: 5px;
    color: white;
    display: flex;
    flex-direction: row;
}
</style>
