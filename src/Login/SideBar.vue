<template>
  <div>
    <el-menu	 style="width: 30%">
      <el-submenu v-for="menu in navList" :key="menu.key" :index="menu.key">
        <template slot="title">
          <i :class="menu.iconClass" />
          <span slot="title">{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="menuItem in menu.children"
          :key="menuItem.key"
          :index="menuItem.key"
        >
          {{ menuItem.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          key: 1,
          name: "导航1",
          iconClass: "el-icon-location",
          children: [
            {
              key: "1-1",
              name: "导航11",
            },
            {
              key: "1-2",
              name: "导航12",
            },
          ],
        },
        {
          key: 2,
          name: "导航2",
          iconClass: "el-icon-menu",
          children: [
            {
              key: "1-1",
              name: "导航11",
            },
            {
              key: "1-2",
              name: "导航12",
            },
          ],
        },
        { key: 3, name: "导航3", iconClass: "el-icon-document" },
        { key: 4, name: "导航4", iconClass: "el-icon-setting" },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>