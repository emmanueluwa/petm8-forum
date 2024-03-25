<template>
  <div class="col-full" id="not-found">
    <h1>Not Found</h1>
    <p class="text-large">
      Ooops, we couldn't find the page your are looking for. Why not
      <router-link :to="{ name: 'Home' }"
        >check out the homepage instead</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.heading-large {
  font-size: 100px;
}

.text-large {
  font-size: 50px;
  font-weight: 100;
}

.centered {
  text-align: center;
}
</style>
