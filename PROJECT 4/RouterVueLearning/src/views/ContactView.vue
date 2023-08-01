<script setup>
    import {useRoute} from "vue-router"
    import cars from "../data/cars.json"

    const route = useRoute()
    const car = cars.find(c => c.id === parseInt(route.params.id))
    
</script>

<template>
    <div class="">
        <h1 class="text-2xl">Contact Info</h1>
        <p>{{ car.contact.dealer }}</p>
        <p>{{ car.contact.number }}</p>
    </div>
</template>