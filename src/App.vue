<template>
   <router-view />
</template>

<script>
import { Button } from 'vant';

export default {
    name: 'App',
    components: {
        [Button.name]: Button,
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
