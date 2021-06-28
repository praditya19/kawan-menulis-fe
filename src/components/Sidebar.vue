<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['isNavOpen']),
    isPanelOpen () {
      return this.isNavOpen
    }
  },
  methods: {
    closeSidebarPanel () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 200ms ease-in 0s
}

.sidebar-backdrop {
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #293640;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 300px;
}
</style>
