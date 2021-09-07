import { getCookie } from "./cookie";

/**
 * 进入系统初始化函数，用于用户授权相关
 * @param {Object} ctx
 */
export default function initialize(ctx) {
  const { req, store } = ctx;
  const userToken = getCookie("jwt", req);
  if (userToken && !store.getState().user.auth.user) {
    // cookie存在token并且auth.user不存在为null，直接走auth流程即可，判断user是否为空是为了避免每次一路由跳转都走auth流程
    const payload = {
      username: getCookie("USER_NAME", req),
      userId: getCookie("USER_ID", req),
    }; // 获取相关用户信息存入state
    store.dispatch(authUserSuccess(payload));
  }
}
