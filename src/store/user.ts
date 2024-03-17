// 初始化状态
import { StoreOptions } from "vuex";

export default {
  namespace: true,
  // 执行异步操作, 并触发 mutation 的更改(action 调用 mutation)
  state: () => ({
    currentUser: {
      username: "未登录",
      role: "notLogin",
    },
  }),
  // 执行异步操作, 并触发 mutation 的更改(action 调用 mutation)
  actions: {
    // todo 远程登录
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "孤诣" });
    },
  },
  // 定义对变量进行更新操作的方法(尽量同步)
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
