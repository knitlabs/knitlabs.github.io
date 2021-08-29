<template>
  <div id="home">
    <div class="center-box flex-column">
      <h2>{{ homeContent }}</h2>
      <div class="main-title">
        <h3>{{ mainTitle }}<span class="input-cursor">|</span></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      homeContent: "Knitting up stories with technology.",
      mainTitle: " ",
    };
  },
  mounted: function () {
    this.typeSentence("COMING SOON...");
  },
  methods: {
    waitForMs: function (ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    typeSentence: async function (sentence, delay = 200) {
      const letters = sentence.split("");
      let i = 0;
      while (i < letters.length) {
        await this.waitForMs(delay);
        this.mainTitle += letters[i];
        i++;
        if (i === letters.length) {
          i = 0;
          await this.waitForMs(4000);
          this.mainTitle = "";
        }
      }
      return;
    },
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
.flex-column {
  flex-direction: column;
}
.center-box h3 {
  text-align: center;
  font-weight: 300;
}
@media only screen and (max-width: 745px) {
}
</style>