import {createRouter, createWebHistory} from "vue-router"
import QuestionView from "../views/QuestionView.vue"
import QuizesView from "../views/QuizesView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesView
        },
        {
            path:"/questions/:id",
            name: "questions",
            component: QuestionView
        }
    ]
})

export default router