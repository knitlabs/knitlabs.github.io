<template>
  <div id="about">
    <!-- <div class="content right">
      For centuries, man's growth to building a civilization has been by
      optimizing and automating the mundane tasks. Picture this. You are a
      content creator. You are creating something wonderful to put out there for
      the world to see. Should the cumbersome task of developing a website
      really delay your creativity in reaching your audience?
    </div>
    <div class="content left">
      We are a bunch of tech enthusiasts who believe in the power of automation.
      Hence presenting to you Knitlabs. We build tools that can help you
      accelerate and help you strike things of your to-do list.
    </div> -->
    <div class="column" v-for="c in content" :key="content.indexOf(c)">
      <div class="content-container">
        <div class="content">
          <h3>{{ c.name }}</h3>
          <p>{{ c.about }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      content: [
        {
          name: "Adithya Nair",
          about:
              "Adithya is the resident engineer. He loves breaking down stuff (sometimes literally xD) as seeing how they work. He is a strong advocate for internet privacy. So much so, he often ends up self-hosting equivalents for day to day tools. Professionally he works as a software developer.",
          portfolio: "https://adtya.xyz/",
          github: "https://github.com/adtya/",
        },
        {
          name: "Akhil Seshan",
          about:
              "Akhil Seshan is our UI guy. His interests also lie in IoT and NLP. Professionally he works as a Software Engineer. He is meticulous in financial planning and always tends to surprise the crowd with his optimality in cost splits.",
          portfolio: "https://akhilseshan.github.io/",
          github: "https://github.com/akhilseshan/",
        },
        {
          name: "Hariraj K",
          about:
              "Hari (or picklehari as he is commonly known) is a math enthusiast. His technical interests lie in computational algebra and statistics. He is passionate about consumer psychology and behavioural economics. Very often, one can find him experimenting with cuisines, reading about various cultures and trying to find deep meaning in TV dialogues. Currently, he works as a data scientist in the cybersecurity domain.",
          portfolio: "http://picklehari.xyz/",
          github: "https://github.com/picklehari/",
        },
        {
          name: "Sanjay K",
          about:
              "Sanjay is a software developer with a zeal for philosophy which is shaped by various books, shows and conversations with people around him.  He manages to apply these principles in understanding consumer behaviour and implements them in his product design framework. Professionally he works with web apps.",
          portfolio: "https://www.sanjay.link/",
          github: "https://github.com/sanjaii/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#about {
  height: 100%;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-container{
  display: flex;
  flex-wrap: wrap;
  margin: 5%;
  justify-content: space-evenly;
}

.content {
  display: flex;
  justify-content: flex-start;
  text-align: justify;
  align-items: center;
  color: black;
  margin: 10px;
  padding: 15px;
  min-height: 250px;
  font-size: 20px;
  color: white;

  background-color:#2b2c34;
}

@media screen and (min-width: 745px) {
  #about {
    display: flex;
    flex-wrap: wrap;
  }

  .column {
    flex-basis: 50%;
  }
}
</style>