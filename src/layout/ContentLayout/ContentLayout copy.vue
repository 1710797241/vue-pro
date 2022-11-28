<template>
  <el-container style="height: 100%;">
    <el-aside :width="asideWidth">
      <span class="aside-logo"></span>
      <el-menu :collapse-transition="false" @open="handleOpen" @select="handleSelect" :router="true"
        :default-openeds="openeds" :collapse="isFlod" :unique-opened="false" :default-active="active"
        background-color="#001529" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="(item, index) in routes">
          <el-menu-item v-bind:key="index" v-if="!item.children && !item.meta.hideInMenu" :index="item.path">

            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>

          </el-menu-item>

          <template v-if="item.children && !item.meta.hideInMenu">
            <el-submenu v-bind:key="index" :index="item.path">
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title
                }}</span>
              </template>
              <template v-for="(item2, index2) in item.children">
                <el-menu-item v-if="!item2.meta.hideInMenu" v-bind:key="index2" :index="item2.path">
                  {{ item2.meta.title }}
                </el-menu-item>
              </template>

            </el-submenu>
          </template>
        </template>
      </el-menu>

      <span @click="handleFold" v-if="!isFlod" class="tool"><i class="el-icon-s-fold"></i></span>
      <span @click="handleFold" v-if="isFlod" class="tool"><i class="el-icon-s-unfold"></i></span>
    </el-aside>

    <el-container>
      <el-header>
        <div class="header-container">
          <div class="header-left"></div>
          <div class="header-right">
            <el-dropdown class="custom-el-dropdown-menu_item">
              <i class="el-icon-setting" style="margin-right: 0px;color:#fff;"> <span
                  style="margin-left:5px">王小虎</span></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import routes from '../../routes/routes'
import { filterRoutes } from '../../utils/utils'
export default {
  data() {
    return {
      routes: [],
      openeds: ['/'],
      active: '/',
      isFlod: false,
      minWidth: 1000,
      asideWidth: '220px',
      asideMinWidth: '64px',
      asideMaxWidth: '220px'
    }
  },
  mounted() {
    console.log('init layout', this.$route);
    // if (this.$route.path !== this.active) {
    //   this.$router.push(this.active)
    // }
    this.handleResize()
    this.handleAddSizeListener()
    this.handleInitRoutes()
  },
  unmounted() {
    this.handleRemoveSizeListener()
  },
  methods: {
    handleSelect(index, indexPath) {
      this.active = index

      console.log('select', index, 'path', indexPath);
    },
    handleOpen(index, indexPath) {
      this.openeds = [index]
      console.log('handleOpen', index, 'path', indexPath);

    },
    handleFold() {
      if (!this.isFlod) {
        this.isFlod = true
        this.asideWidth = this.asideMinWidth
      } else {
        this.isFlod = false
        this.asideWidth = this.asideMaxWidth

      }


    },
    handleAddSizeListener() {
      console.log('resize');
      window.addEventListener('resize', this.handleResize)
    },
    handleRemoveSizeListener() {
      window.removeEventListener('resize', this.handleResize)
    },
    handleResize() {
      const width = document.documentElement.clientWidth
      console.log('width', width);
      if (width < this.minWidth) {
        this.isFlod = true
        this.asideWidth = this.asideMinWidth
      } else {
        this.isFlod = false
        this.asideWidth = this.asideMaxWidth

      }
    },
    handleInitRoutes() {

      try {
        let originRoutes = filterRoutes(routes)
        this.routes = originRoutes
      } catch (error) {
        console.log('error', error);
      }
    }
  }

}
</script>
<style scoped>
.tool i {
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.el-header {
  text-align: right;
  font-size: 12px;
  background-color: #001529;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.el-aside-wrapper {
  flex: 0 0 220px;
}

.el-aside {
  background-color: #001529;

  transition: width 0.5s;
  overflow-x: hidden;
  position: fixed;
  height: 100%;
  top: 0;
}

.el-menu[role='menubar'] {
  border-right: 0;
  height: calc(100vh - 100px);
  overflow-y: auto;
  overflow-x: hidden;
}

.el-menu[role='menubar']::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.el-menu[role='menubar']::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 5px rgb(255 255 255 / 5%);
  box-shadow: inset 0 0 5px rgb(255 255 255 / 5%);
}

.el-menu[role='menubar']::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
  box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
}

.custom-el-dropdown-menu_item {
  background-color: #001529;
  color: #fff;
}

.el-card__body,
.el-main {
  padding: 16px;
}

.aside-logo {
  display: inline-block;
  width: 100%;
  height: 60px;
  background-color: rgb(143, 59, 59);
}

.header-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.header-left {
  max-width: 50%;
}

.header-right {
  display: flex;
  align-items: center;
}
</style>