<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement. {{ randomBytes(1) }}</p>
</template>

<script>
import WalletStores from "web3w";
const walletStores = WalletStores({
    log: console,
    debug: true,
    options: [
      'builtin'
    ],
    builtin: {autoProbe: true},
  });
window.wallet = walletStores.wallet;
function randomBytes() {
  return walletStores
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
