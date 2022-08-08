<template>
  <div v-if="error">{{ error }}</div>
  <div class="post" v-if="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();

    // const { post, error, load } = getPost(props.id);
    const { post, error, load } = getPost(route.params.id);
    load();

    return { post, error };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: #fff;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.pre {
  white-space: pre-wrap;
}
</style>
