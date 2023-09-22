<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const {quizQuestionLength, numberOfCorrectAnswers} = defineProps(['quizQuestionLength', 'numberOfCorrectAnswers'])
</script>

<template>
    <div class="text-center py-[100px] px-0">
        <p class="text-2xl">Your Results...</p>
        <h1 class="text-[80px]">
            {{numberOfCorrectAnswers}}/{{quizQuestionLength}}
        </h1>

        <RouterLink to="/">Go Back</RouterLink>
    </div>
</template>