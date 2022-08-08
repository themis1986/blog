<template>
  <div class="tag">
    <div class="" v-if="error">{{ error }}</div>
    <div class="" v-if="posts.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div class="" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  components: { Spinner, PostList },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();
    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style scoped></style>
