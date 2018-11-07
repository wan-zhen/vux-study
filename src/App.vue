<template>
  <div id="app">
      <drawer :show.sync="drawerVisibility" placement="right">
        <!-- 侧边栏内容插槽 -->
        <div slot="drawer" class="side">
          <x-button type="primary" @click.native="changeDrawerVisibility">{{drawerVisibility}}</x-button>
        </div>

        <!-- 主体内容插槽 -->
        <div slot="default">
          <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
          <x-button type="primary" @click.native="changeDrawerVisibility">{{drawerVisibility}}</x-button>
        </div>

        <!-- rourer-view 作为默认插槽内容 -->
        <div>
          <router-view></router-view>
        </div>

      </drawer>
  </div>
</template>

<script>
import { Drawer } from "vux";
export default {
  name: "app",
  components: {
    Drawer
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
