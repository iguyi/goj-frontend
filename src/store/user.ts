// 初始化状态
import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespace: true,
  // 执行异步操作, 并触发 mutation 的更改(action 调用 mutation)
  state: () => ({
    currentUser: {
      userName: "未登录",
      userRole: AccessEnum.NOT_LOGIN,
      flag: false, // false 表示用户为尝试过登录
    },
  }),
  // 执行异步操作, 并触发 mutation 的更改(action 调用 mutation)
  actions: {
    // 从远程获取用户登录信息
    async getCurrentUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.currentUser,
          userRole: AccessEnum.NOT_LOGIN,
          flag: true,
        });
      }
    },
  },
  // 定义对变量进行更新操作的方法(尽量同步)
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    },
  },
} as StoreOptions<any>;
