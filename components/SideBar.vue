<template lang="pug">
div
    aside
        transition(
            enter-to-class="animate__animated animate__slideInLeft",
            leave-to-class="animate__animated animate__slideOutLeft"
        )
            div.side(v-show="side")
                button(@click="close")
                    h1 x
                ul.list
                    li.listItem
                      nuxt-link.lin(to="/") 
                        h6 سياسة الخصوصيه 
                    li.listItem
                      nuxt-link.lin(to="/usage") 
                        h6 شروط الاستخدام 
                    
                
</template>
<style lang="scss" scoped>
.animate__animated.animate__slideInLeft,
.animate__animated.animate__slideOutLeft {
  animation-duration: 600ms;
}
.side {
  font-size: 26px;
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 270px;
  z-index: 999;
  padding: 0.75em;
  .social {
    margin-top: 20px;
    display: flex;
    gap: 4px;
    font-size: 18px;
    .it {
      &:hover {
        text-decoration: none;
        color: rgb(221, 59, 86);
        cursor: pointer;
      }
    }
  }

  button {
    border: none;
    background: #000;
    color: #fff;
    transform: translatex(200px);
  }
  .list {
    list-style: none;
    text-decoration: none;
    color: #fff;
    .listItem {
      color: #fff;
      margin-top: 0.5em;
      .lin {
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: none;
          color: rgb(221, 59, 86);
        }
      }
    }
  }
}
</style>
