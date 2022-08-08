import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      let response = await fetch(`http://localhost:3000/posts/${id}`);
      if (!response.ok) {
        throw Error("That post does not exist");
      }
      post.value = await response.json();
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
