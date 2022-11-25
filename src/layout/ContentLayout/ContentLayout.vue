<template>
  <el-container style="height: 100%;">
    <el-aside width="220px">
      <el-menu @select="handleSelect" :router="true" :default-openeds="openeds" :default-active="active"
        background-color="#001529" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="(item, index) in routes">
          <el-menu-item v-bind:key="index" v-if="!item.children" :index="item.path">
            <span slot="title"><i class="el-icon-message"></i>{{ item.meta.title }}</span>
          </el-menu-item>

          <template v-if="item.children">
            <el-submenu v-bind:key="index" :index="item.path">
              <span slot="title"><i class="el-icon-message"></i>{{ item.meta.title }}</span>

              <el-menu-item v-for="(item2, index2) in item.children" v-bind:key="index2" :index="item2.path">
                {{ item2.meta.title }}
              </el-menu-item>


            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-dropdown class="custom-el-dropdown-menu_item">
          <i class="el-icon-setting" style="margin-right: 0px;color:#fff;"> <span style="margin-left:5px">王小虎</span></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { routes } from '../../routes/index'
export default {
  data() {
    return {
      routes: routes,
      openeds: ['/hello'],
      active: '/'
    }
  },
  mounted() {
    console.log('init layout', this.$route);
    this.$router.push(this.active)
  },
  methods: {
    handleSelect(index, indexPath) {
      this.active = indexPath[indexPath.length - 1]
      this.openeds = [index]
      console.log('select', index, 'path', indexPath);
    }
  }

}
</script>
