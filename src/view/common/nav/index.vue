<template>
     <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"  badge="3" replace to="/home" >家人</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/contact" >通讯录</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/search" >发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/user" >个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { ref } from 'vue';

import {
    Tabbar, TabbarItem,
} from 'vant';

export default {
    name: 'common-basic-bar',
    components: {
        [TabbarItem.name]: TabbarItem,
        [Tabbar.name]: Tabbar,
    },
    setup() {
        const active = ref(0);
        return { active };
    },
};
</script>

<style lang="less">
</style>
