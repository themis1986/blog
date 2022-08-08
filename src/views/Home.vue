<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="stopWatching">Stop Warching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  components: {},
  setup() {
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);
    const search = ref("");

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
      if (search.value === "fuck") {
        alert("WATCH YOUR TONGUE MATE");
        search.value = "";
      }
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const stopWatching = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames, stopWatching };
  },
};
</script>
