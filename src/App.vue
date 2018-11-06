<template>
  <div id="app">
   
      <drawer
        width="200px;"
        :show.sync="drawerVisibility">
        
        <x-button type="primary" @click.native="changeDrawerVisibility">{{drawerVisibility}}</x-button>
      <div slot="drawer">
        <router-link to="/">Home</router-link>
        <br>
        <router-link to="/about">About</router-link>
      </div>

      <!-- rourer-view 作为默认插槽内容 -->
      <div>
        <router-view></router-view>
      </div>

      </drawer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       <router-link to="/drawer">drawer</router-link>
    </div>
    <router-view/> -->
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
}
</style>
