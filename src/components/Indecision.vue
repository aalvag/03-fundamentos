<template>
  <h1>Indecicions</h1>
  <img v-if="image" :src="image" alt="Random image" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Ask me something" aria-label="yes or no" />
    <p>Remember put end a question mark (?)</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      image: null,
      isValidQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "Thinking...";
        const res = await fetch("https://yesno.wtf/api");
        const { answer, image } = await res.json();
        this.answer = answer;
        this.image = image;
      } catch (error) {
        this.answer = "Could not load the image";
        this.image = null;
      }
    },
  },
  watch: {
    question(newQuestion, oldQuestion) {
      this.isValidQuestion = false;
      console.log(newQuestion, oldQuestion);
      if (!newQuestion.includes("?")) return;
      this.isValidQuestion = true;
      this.getAnswer();
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
