<template>
  <div>
    <template v-if="item && item.children">
      <el-submenu :index='item.index'>
        <template slot="title">
          <item icon="config" :title="item.name" />
        </template>
        <template v-for="(child, index) in item.children">
          <a :href="resolvePath(child.path)" :key="index">
            <el-menu-item :index='item.index'>
              <item icon="config" :title="child.name" />
            </el-menu-item>
          </a>
        </template>
      </el-submenu>
    </template>
    <template v-else>
      <a :href="item.path" style="width:240px;">
        <el-menu-item :index="item.index">
          <i style="font-size: 16px;" class="iconfont icon-code1" />
          {{item.name}}
        </el-menu-item>
      </a>
    </template>
  </div>
</template>

<script>
import path from 'path'
import Item from './Item'

export default {
  name: 'sidebar-item',
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      basePath: window.location.protocol
    }
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>