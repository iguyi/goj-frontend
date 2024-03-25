import router from "@/router";
import store from "@/store";
import AccessEnum from "@/access/accessEnum";

router.beforeEach(async (to, from, next) => {
  // 自动登录
  const currentUser = store.state.user.currentUser;
  if (!currentUser || !currentUser.flag) {
    // 用户从未尝试登录，等待用户登录成功后，再执行后续代码
    await store.dispatch("getCurrentUser");
  }

  // 获取页面权限信息
  const needAccess = to.meta?.access ?? AccessEnum.NOT_LOGIN;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const needAccessLevel = needAccess.level;

  // 访问的页面不需要登录
  if (needAccessLevel === AccessEnum.NOT_LOGIN.level) {
    next();
    return;
  }

  // 访问的页面需要一定的权限才可访问
  if (needAccessLevel > AccessEnum.NOT_LOGIN.level) {
    // 用户未登录
    if (currentUser.userRole.level === AccessEnum.NOT_LOGIN.level) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }

    // 需要管理员权限才可访问
    if (
      needAccessLevel === AccessEnum.ADMIN.level &&
      currentUser.userRole.level < AccessEnum.ADMIN.level
    ) {
      next("/noAuth");
      return;
    }
  }

  next();
});
