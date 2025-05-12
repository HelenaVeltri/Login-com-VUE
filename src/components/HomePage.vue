<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goToLogin = () => {
  router.push("/");
};

const posts = [
  {
    id: 1,
    title: "Gato Maluco",
    content: "Esse é o gato gordo maluco",
    image: "/assets/1.jpg",
  },
  {
    id: 2,
    title: "Outra Atualização",
    content: "Macaco TI muito massa",
    image: "/assets/2.jpg",
  },
  {
    id: 3,
    title: "Post Legal",
    content: "Olha só essa novidade incrível!",
    image: "/assets/3.jpg",
  },
];
</script>

<template>
  <div class="main-container">
    <div class="container">
      <h2 class="title">HOMEPAGE</h2>
      <v-btn
        rounded="xl"
        size="x-large"
        color="#b3b3b3"
        class="mt-4"
        @click="goToLogin"
      >
        LOGIN
      </v-btn>
    </div>

    <div class="container-post">
      <h3 class="title">Publicações Recentes</h3>
      <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
          <img :src="post.image" alt="Imagem do post" class="post-image" />
          <h4>{{ post.title }}</h4>
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 0;
  background-color: #ffffff;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 20px;
}

.container,
.container-post {
  background: #ececec;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000;
  max-width: 600px;
  width: 100%;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 0 5px #ccc;
}

.post-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  width: 100%;
  background-color: #b3b3b3;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
