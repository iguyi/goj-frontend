/**
 * 权限枚举
 * name: 权限名称
 * level: 权限级别, 数值越大, 级别越高
 */
const accessEnum = {
  NOT_LOGIN: { name: "notLogin", level: 0 },
  USER: { name: "user", level: 1 },
  ADMIN: { name: "admin", level: 5 },
};

export default accessEnum;
