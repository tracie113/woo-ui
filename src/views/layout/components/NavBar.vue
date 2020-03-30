<template>
<div>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="nav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#012D37"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item></el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>


</style>
