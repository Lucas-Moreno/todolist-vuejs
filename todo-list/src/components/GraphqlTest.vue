<script setup>
import { onMounted, ref } from "vue";
import { request } from "graphql-request";
import getCatsQuery from "../graphql/cats.gql";

let cats = ref([]);

const getCats = async () => {
  try {
    request("http://localhost:3000/graphql", getCatsQuery).then((data) => {
      cats.value = data.cats;
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getCats();
});
</script>

<template>
  <div>
    <h1>Liste des chats</h1>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Âge</th>
          <th>Race</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in cats" :key="cat.id">
          <td>{{ cat.name }}</td>
          <td>{{ cat.age }}</td>
          <td>{{ cat.breed }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
