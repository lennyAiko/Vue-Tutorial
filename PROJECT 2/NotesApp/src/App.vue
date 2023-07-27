<script setup>
  import { ref } from 'vue';

  const showModal = ref(false)
  const newNote = ref("")
  const errorMessage = ref("")
  const notes = ref([])

  function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)"
  }

  const addNote = () => {
    if (newNote.value.length < 10) {
      return errorMessage.value = "Your notes need to be 10 characters or more"
    }
    notes.value.push({
      id: Math.floor(Math.random() * 10000),
      text: newNote.value,
      date: new Date(),
      bgColor: getRandomColor()
    })
    showModal.value = false
    newNote = ""
    errorMessage.value = "Your notes need to be 10 characters or more"
  }

</script>

<template>

  <main class="w-screen h-screen">

    <div v-if="showModal" class="absolute w-full h-full bg-slate-700 z-10 flex items-center justify-center opacity-90">

      <div class="w-[750px] bg-white rounded-md p-5 relative flex flex-col">
        <textarea v-model.trim="newNote" cols="30" rows="10" class="focus:bg-slate-200"></textarea>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <button @click="addNote" class="px-5 py-2.5 text-xl w-full border-none text-white cursor-pointer mt-3.5 bg-purple-500">Add Note</button>
        <button @click="showModal = false" class="px-5 py-2.5 text-xl w-full border-none text-white cursor-pointer mt-3.5 bg-red-500">Close</button>
      </div>

    </div>

    <div class="max-w-screen-lg p-10 my-0 mx-auto">
      <header class="flex justify-between text-center mb-7">  
        <h1 class="mb-25px text-7xl font-bold">Notes</h1>
        <button @click="showModal = true" class="border-none p-2.5 w-12 h-12 cursor-pointer bg-slate-900 
        rounded-full text-white text-xl">+</button>
      </header>

      <div class="flex flex-wrap">
        <div v-for="note in notes" :key="note.id" :style="{backgroundColor: note.bgColor}"
        class="w-56 h-56 p-2.5 rounded-xl flex flex-col 
      justify-between mr-2.5 mb-2.5">
          <p class="">{{ note.text }}</p>
          <p class="text-xs font-bold">{{ note.date.toLocaleDateString("en-us") }}</p>
         </div>
      </div>

    </div>
    
  </main>

</template>