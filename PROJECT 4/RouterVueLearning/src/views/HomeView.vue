<script setup>
    import cars from "../data/cars.json"
</script>

<template>
    <div class="">
        <h1 class="text-3xl font-bold">Home View</h1>
        <div class="">
            <a v-for="car in cars" :key="car.id" href="">
            
            </a>
        </div>
    </div>
</template>