<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="/timeSelect" @select="handleSelect">
          <el-menu-item index="/timeSelect">
            <i class="el-icon-menu"></i>
            <span slot="title">时间选择器</span>
          </el-menu-item>
          <el-menu-item index="/colorDot">
            <i class="el-icon-menu"></i>
            <span slot="title">彩色标记点</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    handleSelect(key) {
      this.$router.push(key)
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside{
      height: 100%;
      .el-menu{
        height: 100%;
      }
    }
  }
}
</style>
