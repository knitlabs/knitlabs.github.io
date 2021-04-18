<template>
  <div id="projects">
    <div class="center-box">
      <h2 class="coming-soon">Finding the right fabric.<span class="input-cursor">|</span></h2>
    </div>
    <ul v-if="0" class="cards">
      <li
        class="cards-item"
        v-for="projectTitle in projectTitles"
        :key="projectTitle"
      >
        <div class="card">{{ projectTitle }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data: function () {
    return {
      projectTitles: [
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
#projects {
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
  /* #projects {
    padding: 0;
    align-items: initial;
  } */
}
</style>