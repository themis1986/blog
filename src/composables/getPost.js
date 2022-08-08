import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let response = await projectFirestore.collection("posts").doc(id).get();
      if (!response.exists) {
        throw Error("That post does not exist.");
      }
      post.value = { ...response.data(), id: response.id };
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
