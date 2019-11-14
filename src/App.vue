<template>
  <div id="app">
    <div class="pantalla">
      <button @click="this.scrollToTop" class="button-1">Anar a dalt</button>
      <button @click="this.scrollToMiddle" class="button-2">Anar al mig</button>
      <button @click="this.scrollToBottom" class="button-3">Anar a baix</button>

      <vue-plyr ref="video1" class="video">
        <video poster="poster.png" src="video.mp4" preload="auto">
          <source src="./assets/video.mp4" type="video/mp4" size="1080" />
        </video>
      </vue-plyr>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data: function() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollToMiddle() {
      window.scrollTo({
        top: screen.height / 2,
        behavior: "smooth"
      });
    },
    scrollToBottom() {
      window.scrollTo({
        top: screen.height,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  /* overflow: hidden; */
}
#app {
}

.pantalla {
  height: 100vh;
  /* overflow: hidden; */
}

.video {
  /* height: 100vh;
  overflow-y
  : auto; */
}

button {
  position: fixed;
  z-index: 1;
}
.button-1 {
  top: 0;
}
.button-2 {
  top: 30px;
}
.button-3 {
  top: 60px;
}
</style>
