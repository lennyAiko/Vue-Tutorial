<script setup>
    import { defineProps, defineEmits } from 'vue';

    const emit = defineEmits(['selectOption'])

    const {question} = defineProps(['question'])

    const emitSelectedOption = (isCorrect) => {
        emit('selectOption', isCorrect)
    }
</script>

<template>
    <div class="mt-5"> <!-- question-container -->
        <h1 class="text-4xl mb-5">{{ question.text }}</h1> <!-- question -->
    </div>

    <div class=""> <!-- options-container -->
        <div class="flex mb-5 cursor-pointer" 
        v-for="option in question.options" :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"> <!-- option -->

            <p class="bg-yellow-50 w-[50px] h-[50px] text-3xl flex content-center justify-center">{{ option.label }}</p> <!-- option-label -->

            <div class="bg-[rgb(244,239,239)] w-full text-3xl px-[20px] py-0"> <!-- option-value -->
                <p>{{ option.text }}</p>
            </div>

        </div>
    </div> 
</template>