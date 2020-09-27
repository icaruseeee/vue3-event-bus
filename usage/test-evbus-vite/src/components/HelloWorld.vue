<template>
  <h1>{{ msg }}</h1>
  <button @click="handler">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { provideEventBus, useEventBus } from 'vue3-event-bus'
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup() {
    const eventBus = useEventBus()
    eventBus.on('test', (a) => { console.log(a) })

    const count = ref(0)
    const handler = () => {
      count.value ++
      eventBus.emit('test', count.value)
    }

    return {
      count,
      eventBus,
      handler
    }
  }
}
</script>
