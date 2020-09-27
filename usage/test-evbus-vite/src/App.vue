<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld v-if="isHelloShow"  msg="Hello Vue 3.0 + Vite" />
  <span @click="isHelloShow = !isHelloShow"> aButton </span>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { provideEventBus } from 'vue3-event-bus'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const isHelloShow = ref(false)
    provideEventBus()

    return { isHelloShow }
  }
}
</script>
