<template>
  <div class="layout-wrapper layout-blank">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
/* Your global or component CSS */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
