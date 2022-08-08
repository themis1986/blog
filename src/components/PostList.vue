<template>
  <div class="post-list">
    <div class="" v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => {
      console.log("compontent mounted");
    });
    onUnmounted(() => {
      console.log("compontent unmounted");
    });
    onUpdated(() => {
      console.log("component updated");
    });

    return {};
  },
};
</script>

<style scoped></style>
