<template>
<div class="container">

    <nav class="navbar">
      <div class="navbar-nav">



    <router-link to="/">Books</router-link>
    <router-link to="/book/">Book</router-link>
    <router-link to="/quotes/">Quotes</router-link>
    </div>
    </nav>
  <router-view  />
</div>
  


</template>



<script>

export default {
  name: 'App'
}

</script>



<style></style>