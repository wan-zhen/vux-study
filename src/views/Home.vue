<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <x-button type="primary">primary</x-button>
    <x-button type="warn">Delete</x-button>
      <tabbar>
        <tabbar-item selected show-dot>
          <span slot="icon"></span>
          <span slot="label">遊戲</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <span slot="label">帳務中心</span>
        </tabbar-item>
        <tabbar-item >
          <span slot="label">在線客服</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <span slot="label">優惠活動</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Tabbar, TabbarItem } from "vux";

export default {
  name: "home",
  components: {
    HelloWorld,
    Tabbar,
    TabbarItem
  }
};
</script>
