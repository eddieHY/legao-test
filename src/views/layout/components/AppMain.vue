<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 64px);
  overflow-y: auto;
  position: relative;
  // overflow: hidden;
  // background-color: $bodyBg;
  padding-bottom: 50px;
  border-radius: 2px;
}
</style>
