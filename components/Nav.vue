<template lang="pug">
.container-fluid(dir="rtl" class="flex pt-5 pb-1 bg-white")           
        div.ml-auto 
            img(src="/footerlogo.png")

        div(class="flex items-center")   
            div(class="hidden md:block md:flex gap-5")
                nuxt-link.lin(to="https://www.modonexpress.com/") 
                    div(class="flex items-center")
                        div(class="text-xl self-start")
                            IconsHome/
                        h6 الرئيسيه 
                nuxt-link.lin(to="/policy") 
                    h6 سياسة الخصوصيه 
                nuxt-link.lin(to="/usage") 
                    h6 شروط الاستخدام 
            div(class="block md:hidden hover:cursor-pointer text-3xl" @click="open")
                IconsMenu/
    

        
</template>



