<template>
<div>
  <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>-->
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
    :default-active="$route.path"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">绩效管理</span>
      </template>
      <el-menu-item index="/performance/view">绩效查看</el-menu-item>
      <el-menu-item index="/performance/count">绩效统计</el-menu-item>
    </el-submenu>
    <el-submenu>
      <template slot="title">
        <i class="el-icon-s-tools"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item index="/system/user">用户管理</el-menu-item>
      <el-menu-item index="/system/role">角色管理</el-menu-item>
      <el-menu-item index="/system/permission">权限管理</el-menu-item>
    </el-submenu>

  </el-menu>

</div>
</template>

<script>
    export default {
      data() {
        return {
          isCollapse: false
        };
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
