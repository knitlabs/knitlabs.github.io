<template>
  <div id="blogs">
    <div class="center-box">
      <h2 class="coming-soon">Dispatching knitted content.<span class="input-cursor">|</span></h2>
    </div>
    <ul v-if="0" class="cards">
      <li class="cards-item" v-for="blogTitle in blogTitles" :key="blogTitle">
        <div class="card">{{ blogTitle }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data: function () {
    return {
      blogTitles: [
        "randomTitle1",
        "randomTitle2",
        "randomTitle3",
        "randomTitle4",
        "randomTitle5",
        "randomTitle6",
        "randomTitle7",
        "randomTitle8",
      ],
    };
  },
};
</script>
<style scoped>
#blogs {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.cards-item {
  display: flex;
  padding: 1rem;
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@media only screen and (max-width: 745px) {
  /* #blogs {
    padding: 0;
    align-items: initial;
  } */
}
</style>