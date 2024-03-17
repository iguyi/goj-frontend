import accessEnum from "@/access/accessEnum";

/**
 * 权限校验
 * @param user        用户
 * @param needAccess  需要的最低权限
 * @return 有无权限
 */
const checkAccess = (user: any, needAccess = accessEnum.NOT_LOGIN.level) => {
  // 无权限要求
  if (needAccess === accessEnum.NOT_LOGIN.level) {
    return true;
  }

  // 获取用户权限, 如果 user 为空, 则表示未登录
  const userAccess = user?.userRole?.level ?? accessEnum.NOT_LOGIN.level;

  // 需要用户登录才可访问
  if (needAccess === accessEnum.USER.level) {
    return userAccess > accessEnum.NOT_LOGIN.level;
  }

  // 需要管理员权限才可访问
  if (needAccess === accessEnum.ADMIN.level) {
    return userAccess === accessEnum.ADMIN.level;
  }
};

export default checkAccess;
