// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "/assets/styles/main.scss"],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
        link: [
            { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
        ]
    },
    
},
})
