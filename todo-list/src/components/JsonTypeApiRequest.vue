<script>
import axios from "axios";

export default {
  name: "JsonTypeApiRequest",
  props: {},
  data() {
    return {
      table: [],
      tableById: [],
      userId: undefined,
      getId: 2,
      post: {
        title: "",
        body: "",
      },
      put: {
        id: undefined,
        title: "",
        body: "",
      },
      deleteTable: {
        id: undefined,
      },
    };
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
          this.table.push(response.data);
          this.userId = response.data.userId;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataById(getId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${getId}`)
        .then((response) => {
          this.tableById.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postData() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.post)
        .then((response) => {
          console.log(response.data);
          alert("Post submitted successfully!");
          this.post.title = "";
          this.post.body = "";
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred. Please try again.");
        });
    },
    updateDataById() {
      axios
        .put(
          `https://jsonplaceholder.typicode.com/todos/${this.put.id}`,
          this.put
        )
        .then((response) => {
          console.log(response.data);
          alert("Put submitted successfully!");
          this.put.title = "";
          this.put.body = "";
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred. Please try again.");
        });
    },
    deleteDataById() {
      axios
        .delete(
          `https://jsonplaceholder.typicode.com/todos/${this.deleteTable.id}`
        )
        .then((response) => {
          console.log(response.data);
          alert("Delete submitted successfully!");
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred. Please try again.");
        });
    },
  },
  mounted() {
    this.getData();
    this.getDataById(this.getId);
  },
};
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
