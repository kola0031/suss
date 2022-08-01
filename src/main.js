import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import books from './views/books.vue'
import book from './views/book.vue'
import quotes from './views/quotes.vue'

const routes = [{
        path: '/',
        component: books
    },
    {
        path: '/views/book/:id',
        component: book,
        props: true
    },
    {
        path: '/views/quotes/:id',
        component: quotes,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router

createApp(App).use(router).mount('#app')