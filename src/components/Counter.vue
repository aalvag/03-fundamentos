<template>
  <h2>{{ customTitle }}</h2>
  <p>
    {{ counter }}
    <sup>2</sup> = {{ getSquared() }} <sup>2</sup>
  </p>
  <button @click="increase()">+</button>
  <button @click="decrease">-</button>
</template>

<script>
export default {
  props: ["title"],
  setup(props) {
    return {};
  },
  name: "Counter",
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    getSquared() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {
    // computed properties are cached based on their reactive dependencies
    getSquareComp() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title ? this.title.toUpperCase() : "Counter";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: #64bb64;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 5px;
  padding: 5px 15px;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #4a9e4a;
  transition: all 0.3s ease-in-out;
}
</style>

