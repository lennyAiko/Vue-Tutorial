<script setup>
    import {RouterLink} from "vue-router"
</script>

<template>
    <div>
        <RouterLink active-class="font-bold text-yellow-600" to="/">Home</RouterLink>
        <RouterLink active-class="font-bold text-yellow-600" to="/about">About</RouterLink>
    </div>
</template>
