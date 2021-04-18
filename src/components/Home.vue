<template>
  <div id="home">
    <div class="center-box">
      <h1>{{ homeContent }}<span class="input-cursor">|</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      homeContent: "Knitting up stories with technology.",
    };
  },
};
</script>

<style scoped>
#home {
  color: white;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
}
.footer {
  display: flex;
  align-self: flex-end;
}
@media only screen and (max-width: 745px) {
}
</style>