<template lang="pug">
.container-fluid(class="grid place-items-center text-center md:grid-cols-6 gap-14 bg-blue-100 rounded-t-3xl py-3 pr-5")
    div(class="grid place-items-center md:col-span-3 md:mr-20 md:place-items-end")
        div(class="mb-10 ")
            h4 تحميل التطبيق
        div(dir="rtl")
            .cards(class="bg-blue-500 w-56 pr-5 rounded-full p-2 flex justify-start items-center place-items-center ")
                h1 hi
                IconsPlay/
                div(dir="rtl")
            .cards(class="bg-red-500 w-56 pr-5 rounded-full p-2 flex justify-start items-center place-items-center mt-4 ")
                h1 hi
                IconsPlay/

    div(dir="rtl" class="grid  place-items-center md:place-items-start md:mr-14")
        h4(class="mb-5") تواصل معنا
        p 0510617202
        p 0501870603
        p info@modonexpress.com
    div(dir="rtl" class="grid md:col-span-2 place-items-center md:place-items-start text-center")
        div(class="mb-6")
            img(src="/footerlogo.png")
        .ddiv
            p معًا، نساهم في بناء اقتصاد مزدهر يستند إلى المنتجات المحلية ونعزز الهوية الوطنية والفخر بالمنتج المحلي "صنع في السعودية".

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    
.container-fluid{
    .ddiv{
        p{
            color: chartreuse;
            @media (max-width:768px) {
                text-align: center;
            }
        }
        
    }
}
</style>