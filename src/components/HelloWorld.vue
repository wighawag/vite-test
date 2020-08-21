<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement. {{ randomBytes(1) }}</p>
</template>

<script>
// import {randomBytes} from "@ethersproject/random";
import {createClient} from "@urql/core";
function randomBytes() {
  return createClient({url: "http://localhost:8000"})
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    randomBytes
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
