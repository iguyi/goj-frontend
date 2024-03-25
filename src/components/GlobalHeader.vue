<template>
  <a-row class="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="图片地址错误" />
            <div class="logo-text">GOJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.currentUser?.username ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";

const router = useRouter();
const store = useStore();

// 展示在菜单的路由数组
const visibleRoutes = computed(() => {
  // 当前用户
  const currentUser = store.state.user.currentUser;

  return routes.filter((item, index) => {
    // 根据路由的 hideInMenu 过滤显示的菜单项
    if (item.meta?.hideInMenu) {
      return false;
    }

    if (!checkAccess(currentUser, item?.meta?.access?.level as number)) {
      return false;
    }

    // 根据权限过滤显示的菜单项
    return true;
  });
});

// 测试
// setTimeout(() => {
//   // getCurrentUser 对应 store/user.ts 下的方法
//   store.dispatch("getCurrentUser", {
//     username: "孤诣",
//     userRole: AccessEnum.ADMIN,
//   });
// }, 3000);

// 默认主页
const selectedKeys = ref(["/"]);

// 路由跳转后, 更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

/**
 * 跳转到对应菜单项的页面
 * @param key - 路由
 */
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.logo-text {
  font-size: 35px;
  color: black;
  margin-left: 7px;
}
</style>
