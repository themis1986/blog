<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat pretium risus, eu gravida massa laoreet quis. Fusce vitae diam at neque congue congue. Etiam massa ligula, blandit quis mattis in, vestibulum eu quam. Suspendisse potenti. Aliquam rhoncus diam sit amet imperdiet facilisis. Sed quis augue sit amet erat rhoncus aliquet. Nulla non ante a eros vestibulum aliquet nec ut orci. Vestibulum felis magna, ultrices at nibh a, aliquam finibus ipsum. Duis eleifend sem pellentesque, ultrices tellus vitae, sodales risus.",
        id: 1,
      },
      {
        title: "top 5 CSS tips",
        body: "Donec ac turpis eros. Aliquam vitae orci vitae dui finibus commodo. Duis quis rhoncus augue, in molestie lectus. Suspendisse auctor nibh turpis, eget consectetur purus vehicula in. Quisque aliquam consequat sem, quis blandit nulla hendrerit eget. Fusce ex ante, scelerisque eget nulla sed, dapibus tincidunt erat. Aenean vitae porttitor odio.",
        id: 2,
      },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>
