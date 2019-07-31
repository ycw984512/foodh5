import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';     //在proxy配置了跨域 /api 取代了前面的跨域地址
// const BASE_URL = 'http://localhost:3000';

// 2. 请求方法

// 2.1 请求首页的轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

// 2.8 用户名和密码登录
// export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');

