<script setup>
import quizes from "../data/quizes.json"
import {useRoute, useRouter, RouterView} from "vue-router"

const route = useRoute()

const questionId = parseInt(route.params.id)

const quiz = quizes.find(item => item.id === questionId)

</script>

<template>
    <div class="">
        <h1>Question</h1>
        <div v-for="question in quiz.questions">
            <p>{{ question.text }}</p>
            <ul v-for="option in question.options" :key="option.id">
                <li>{{ option.label }} {{ option.text }}</li> 
            </ul>
        </div>
    </div>
</template>