<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <x-button type="primary">primary</x-button>
    <x-button type="warn">Delete</x-button>
    <font-awesome-icon icon="coffee" />
      <tabbar>
        <tabbar-item selected show-dot>
          <img slot="icon" src="../assets/logo.png">
          <span slot="label">遊戲</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <img slot="icon" src="../assets/logo.png">
          <span slot="label">帳務中心</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="../assets/logo.png">
          <span slot="label">在線客服</span>
        </tabbar-item>
        <tabbar-item badge="12">
          <img slot="icon" src="../assets/logo.png">
          <span slot="label">優惠活動</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <img slot="icon" src="../assets/logo.png">
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
