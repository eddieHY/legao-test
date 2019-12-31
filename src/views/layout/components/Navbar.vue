<template>
  <div class="a">
    <el-menu class="navbar" mode="horizontal">
      <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
      <!-- <breadcrumb /> -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="iconfont icon-user01"/>
          <span class="user-name">用户名</span>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <router-link to="/inform">通知管理</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span class="custom-logout" style="display:block;" @click="logout">退 出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    // Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapState({
      sidebar: state => state.sidebar
    })
  },
  mounted() {
    this.$nextTick(() => {
      // this.SetBaseInfo() // 获取用户基本信息
    })
  },
  methods: {
    SetBaseInfo () {
    },
    toggleSideBar() {
      this.$store.commit('TOGGLE_SIDEBAR')
    },
    logout() {
      window.console.log('======退出==')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 64px;
  border-radius: 0px !important;
  background-color: #4f62c5;
  border-bottom: none;
  .hamburger-container {
    line-height: 72px;
    height: 64px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    color: #fff;
    height: 64px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      height: 64px;
      cursor: pointer;
      position: relative;
      padding: 20px 0;
      .user-avatar {
        float: left;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .iconfont {
        font-size: 22px;
        float: left;
        margin-right: 6px;
      }
      .user-name {
        float: left;
        line-height: 24px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
.custom-logout{
  display: block;
  text-align: center;
}
</style>

