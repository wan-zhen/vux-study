<template>
  <div id="app">
      <drawer :show.sync="drawerVisibility" placement="right">
        <!-- 侧边栏内容插槽 -->
        <div slot="drawer" class="side">
          <x-button type="warn" @click.native="changeDrawerVisibility">{{drawerVisibility}}</x-button>

          <h1>ㄏ~</h1>
        </div>

        <!-- 主体内容插槽 -->
        <div slot="default">
          <x-button type="primary" @click.native="changeDrawerVisibility">{{drawerVisibility}}</x-button>
          <tabbar>
          <tabbar-item selected show-dot>
            <img slot="icon" src="./assets/logo.png">
            <span slot="label"><router-link to="/">遊戲</router-link></span>
          </tabbar-item>
          <tabbar-item show-dot>
            <img slot="icon" src="./assets/logo.png">
            <span slot="label"><router-link to="/about">帳務中心</router-link></span>
          </tabbar-item>
          <tabbar-item>
            <img slot="icon" src="./assets/logo.png">
            <span slot="label">在線客服</span>
          </tabbar-item>
          <tabbar-item badge="12">
            <img slot="icon" src="./assets/logo.png">
            <span slot="label">優惠活動</span>
          </tabbar-item>
          <tabbar-item badge="2">
            <img slot="icon" src="./assets/logo.png">
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
        </div>

        <!-- rourer-view 作为默认插槽内容 -->
        <div>
          <router-view></router-view>
        </div>

      </drawer>
  </div>
</template>

<script>
import { Drawer, Tabbar, TabbarItem } from "vux";

export default {
  name: "app",
  components: {
    Drawer,
    Tabbar,
    TabbarItem
  },
  data: function() {
    return {
      drawerVisibility: false
    };
  },
  methods: {
    changeDrawerVisibility: function() {
      this.drawerVisibility = !this.drawerVisibility;
    }
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#app {
  height: 100%;
  overflow-x: hidden;
}
.vux-drawer > div {
  width: 100%;
}
</style>
