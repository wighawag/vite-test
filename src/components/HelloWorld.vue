<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement. {{ randomBytes(1) }}</p>
</template>

<script>
// import {randomBytes} from "@ethersproject/random";
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
function randomBytes() {
  return schema.getQueryType();
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
