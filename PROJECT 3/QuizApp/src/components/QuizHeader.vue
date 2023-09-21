<script setup>
    import { defineProps } from 'vue';

    const {questionStatus} = defineProps(['questionStatus'])

    console.log(questionStatus)
</script>

<template>
    <header class="mt-5">
        <h4 class="text-3xl">Question {{ questionStatus }}</h4>
        <div class="w-72 h-12 border-4 border-solid border-yellow-50">
            <div class="h-full w-0 bg-yellow-50"></div>
        </div>
    </header>
</template>