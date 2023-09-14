<template>
  <div class="main">
    <Nav class="fixed-nav" />
    <SideBar />
    <div class="main-content">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<style>
.main {
  position: relative;
}

.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
}
.main-content {
  margin-top: 10rem ;
}
</style>
