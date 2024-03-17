// 初始化状态
import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";

export default {
  namespace: true,
  // 执行异步操作, 并触发 mutation 的更改(action 调用 mutation)
  state: () => ({
    currentUser: {
      username: "未登录",
      userRole: AccessEnum.NOT_LOGIN,
    },
  }),
  // 执行异步操作, 并触发 mutation 的更改(action 调用 mutation)
  actions: {
    // todo 远程登录
    getCurrentUser({ commit, state }, payload) {
      commit("updateUser", payload);
    },
  },
  // 定义对变量进行更新操作的方法(尽量同步)
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    },
  },
} as StoreOptions<any>;
