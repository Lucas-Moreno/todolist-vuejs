<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const table = ref([]);
const tableById = ref([]);
const userId = ref(undefined);
const getId = 2;
const post = ref({
  title: "",
  body: "",
});
const put = ref({
  id: undefined,
  title: "",
  body: "",
});
const deleteTable = ref({
  id: undefined,
});

const getData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      table.value.push(response.data);
      userId.value = response.data.userId;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getDataById = (getId) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${getId}`)
    .then((response) => {
      tableById.value.push(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postData = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", post.value)
    .then((response) => {
      console.log(response.data);
      alert("Post submitted successfully!");
      post.value.title = "";
      post.value.body = "";
    })
    .catch((error) => {
      console.log(error);
      alert("An error occurred. Please try again.");
    });
};

const updateDataById = () => {
  axios
    .put(
      `https://jsonplaceholder.typicode.com/todos/${put.value.id}`,
      put.value
    )
    .then((response) => {
      console.log(response.data);
      alert("Put submitted successfully!");
      put.value.title = "";
      put.value.body = "";
    })
    .catch((error) => {
      console.log(error);
      alert("An error occurred. Please try again.");
    });
};

const deleteDataById = () => {
  axios
    .delete(
      `https://jsonplaceholder.typicode.com/todos/${deleteTable.value.id}`
    )
    .then((response) => {
      console.log(response.data);
      alert("Delete submitted successfully!");
    })
    .catch((error) => {
      console.log(error);
      alert("An error occurred. Please try again.");
    });
};

onMounted(() => {
  getData();
  getDataById(getId);
});
</script>

<template>
  <div class="container">
    <div>1) Request GET</div>
    <p>UserId : {{ userId }}</p>
    <div v-for="(element, index) in table" :key="index">
      <p>Id : {{ element.id }}</p>
      <p>title : {{ element.title }}</p>
      <p>completed : {{ element.completed }}</p>
    </div>
  </div>
  <div class="container">
    <div>2) Request GET by id</div>
    <div v-for="(tableById, index) in tableById" :key="index">
      <p>UserId : {{ tableById.userId }}</p>
      <p>Id : {{ tableById.id }}</p>
      <p>title : {{ tableById.title }}</p>
      <p>completed : {{ tableById.completed }}</p>
    </div>
  </div>
  <div class="container">
    <div>3) Request Post :</div>
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="post.title" required />
    </div>
    <div>
      <label for="body">Body:</label>
      <textarea id="body" v-model="post.body" required></textarea>
    </div>
    <button type="submit" @click="postData()">Submit</button>
  </div>
  <div class="container">
    <div>4) Request Put :</div>
    <div>
      <label for="title">Id:</label>
      <input type="text" id="title" v-model="put.id" required />
    </div>
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="put.title" required />
    </div>
    <div>
      <label for="body">Body:</label>
      <textarea id="body" v-model="put.body" required></textarea>
    </div>
    <button type="submit" @click="updateDataById()">Submit</button>
  </div>
  <div class="container">
    <div>4) Request Delete :</div>
    <div>
      <label for="title">Id:</label>
      <input type="text" id="title" v-model="deleteTable.id" required />
    </div>
    <button type="submit" @click="deleteDataById()">Submit</button>
  </div>
</template>

<style scoped></style>
