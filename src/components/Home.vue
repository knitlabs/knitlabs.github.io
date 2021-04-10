<template>
  <div id="home">
    <div class="footer">
      Home page content
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#home {
  color: white;
  display: flex;
  flex-direction: row;
  height: 100%;
}
.footer{
  display: flex;
  align-self: flex-end;
}
</style>