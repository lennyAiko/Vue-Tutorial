<script setup>
    import {useRoute, useRouter, RouterView} from "vue-router"
    import cars from "../data/cars.json"
    import {ref} from "vue"

    const route = useRoute()
    const router = useRouter()

    const carId = parseInt(route.params.id)

    const car = cars.find(c => c.id === parseInt(route.params.id))

    const showContact = () => {
        if(carId === 4) return
        return router.push(`/cars/${carId}/contact`)
    }

</script>

<template>
    <div class="" v-if="car">
        <h1 class="font-bold text-3xl">Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button class="rounded-sm bg-blue-500" @click="showContact">Click me for contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>