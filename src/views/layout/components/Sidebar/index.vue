<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="alarm-title">
      <router-link :to="{path: '/'}" class="logo-a">
        <span class="ee-logo-wrapper">
          <i
            :class="isCollapse ? 'iconfont icon-logo2 iconLogo logo-animate' : 'iconfont icon-logo2 iconLogo'"
          />
        </span>
        <span>乐高运营系统</span>
      </router-link>
    </div>
    <el-menu
      :show-timeout="200"
      :default-active="defaultActive"
      :collapse="isCollapse"
      class="menu-cont"
      mode="vertical"
      background-color="#343957"
      text-color="#BDBDC7"
      active-text-color="#409EFF"
    >
      <!-- 角色及环境 -->
      <!-- <div v-show="userInfo.environment && !isCollapse" class="infos">
        <p class="envir">
          <i
            style="font-size: 16px;margin-top: -2px;color: rgb(136, 160, 177);"
            class="iconfont icon-code3"
          />
          <span class="desc">{{ userInfo.environment }}</span>
        </p>
      </div> -->
     

      <!-- 新版管理员菜单渲染 -->
      <div>
        <sidebar-item
          v-for="(route, index) in routes"
          :key="index"
          :item="route"
        /> 
      </div>
    </el-menu>
     
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  components: { SidebarItem },
  computed: {
    ...mapState({
      sidebar: state => state.sidebar,
      userInfo: state => state.userInfo
    }),
    routes() {
      return [
        {
          name: '接口监控系统',
          index: '1',
          children: [
            {
              name: '钉钉监控群组管理',
              index: '1-1',
              path: 'www.baidu.com'
            },
            {
              name: '接口监控管理',
              index: '1-2',
              path: 'www.baidu.com'
            }
          ]
        },
        {
          name: '频道管理',
          index: '2',
          children: [
            {
              name: '频道基本信息',
              index: '2-1',
              path: '/channelsInfo'
            },
            {
              name: '频道栏目信息',
              index: '2-2',
              path: '/columnsInfo'
            },
            {
              name: '频道页面信息',
              index: '2-3',
              path: '/pagesInfo'
            }
          ]
        },
        {
          name: '首页',
          path: 'www.xueersi.com',
          index: '3'
        },
        {
          name: '商城开关',
          path: 'www.baidu',
          index: '4'
        }
      ]
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    defaultActive() {
      return '/' + this.$route.path.split('/')[1]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scrollbar-wrapper {
  .logo-animate {
    transition: all 0.3s;
    transform: translateX(-33px);
  }
  .alarm-title {
    color: #fff;
    width: 240px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background-color: #4f62c5;
    img {
      display: inline-block;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      font-size: 18px;
      line-height: 64px;
      font-weight: 500;
      vertical-align: middle;
    }
    .ee-logo-wrapper {
      display: inline-block;
      margin-right: 10px;
    }
    .iconLogo {
      display: inline-block;
      font-size: 30px;
      margin-right: 0px;
      color: #fff;
    }
  }
  .menu-title {
    padding: 0 20px;
    position: relative;
    .tit {
      display: inline-block;
      height: 54px;
      color: #929aa3;
      font-size: 14px;
      line-height: 54px;
    }
    .iconfont {
      line-height: 54px;
    }
    .bottom-line {
      height: 1px;
      background: rgba(255, 255, 255, 0.25);
    }
  }
  .iconfont {
    color: #929aa3;
    float: left;
    font-size: 14px;
    margin-right: 12px;
  }
  .infos {
    color: rgb(136, 160, 177);
    font-weight: 500;
    .envir {
      margin: 10px 20px 0 20px;
      padding: 10px 0;
      border-bottom: solid 1px rgb(136, 160, 177);
      .desc {
        font-size: 13px;
      }
    }
  }
}
.menu-item__title {
  &:hover {
    color: #409eff;
  }
}
</style>
