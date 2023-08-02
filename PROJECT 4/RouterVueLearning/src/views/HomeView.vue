<script setup>
    import cars from "../data/cars.json"
    import {RouterLink} from "vue-router"
</script>

<template>
    <div class="">
        <h1 class="text-3xl font-bold">Home View</h1>
        <div class="flex">
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href=""
            class="decoration-none text-black w-full shadow-[1px_1px_10px_rgba(0,0,0,0.168)] m-2.5">
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>