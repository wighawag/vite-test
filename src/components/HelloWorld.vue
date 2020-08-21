<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement. {{ randomBytes(1) }}</p>
</template>

<script>
// import {randomBytes} from "@ethersproject/random";
import { SubscriptionClient } from 'subscriptions-transport-ws';
const GRAPHQL_ENDPOINT = 'ws://localhost:3000/graphql';
const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
});

function randomBytes() {
  return client.status;
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
