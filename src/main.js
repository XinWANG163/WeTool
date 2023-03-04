import Vue from 'vue'
import App from './App.vue'

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
new VueElement({
    el: 'body',
    components: {
        app: App
    }
})