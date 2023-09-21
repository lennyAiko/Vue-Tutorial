<script setup>

  import q from '../data/quizes.json'
  import { ref, watch } from 'vue'
  import Card from '../components/Card.vue';
  import {RouterView} from "vue-router"

  const quizes = ref(q)
  const search = ref('')

  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
  <div class="">
    <header class="mb-2.5 mt-7 flex items-center">
      <h1 class="font-bold mr-7">Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..."
      class="border-none bg-slate-700 opacity-10 text-white p-2.5 rounded-md">
    </header>

    <div class="flex flex-wrap mt-10">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>