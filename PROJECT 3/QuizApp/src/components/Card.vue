<script setup>
    import { defineProps } from 'vue'
    import { useRouter } from "vue-router"

    const router = useRouter()

    const {quiz} = defineProps(['quiz'])

    const navigateToQuiz = () => {
        router.push(`/quiz/${quiz.id}`)
    }

</script>

<template>
    <div class="w-80 overflow-hidden rounded-sm shadow-sm shadow-slate-300 mb-9 mr-5 cursor-pointer"
    @click="navigateToQuiz">
        <img :src="quiz.img" alt="" class="w-full h-48 m-0">
        <div class="px-1 py-0">
            <h2 class="font-bold">{{ quiz.name }}</h2>
            <p class="">{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>