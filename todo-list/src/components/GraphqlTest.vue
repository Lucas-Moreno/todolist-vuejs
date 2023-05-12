<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import getCatsQuery from "../graphql/cats.gql";

const cats = ref([]);

const getCats = async () => {
  await axios
    .get("http://localhost:3000/cats", {
      query: getCatsQuery,
    })
    .then((response) => cats.value.push(response.data))
    .catch((error) => console.error(error));
};

onMounted(() => {
  getCats();
});
</script>

<template>
  <div>
    <ul>
      <li v-for="cat in cats" :key="cat.id">
        {{ cat.name }} ({{ cat.breed }})
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
