<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="czt:Welcome to Your Vue.js App" />
    <van-button type="primary" loading>朴素按钮</van-button>
    <br />
    <van-button icon="plus" type="primary">按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
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
  margin-top: 60px;
}
</style>
