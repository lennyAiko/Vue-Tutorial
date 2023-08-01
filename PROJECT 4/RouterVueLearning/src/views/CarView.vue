<script setup>
    import {useRoute, RouterView} from "vue-router"
    import cars from "../data/cars.json"

    const route = useRoute()

    const car = cars.find(c => c.id === parseInt(route.params.id))

</script>

<template>
    <div class="">
        <h1 class="font-bold text-3xl">Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <RouterView />
    </div>
</template>