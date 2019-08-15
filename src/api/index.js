import ajax from './ajax'

// 环境的切换
// if (process.env.NODE_ENV == 'development') { 
//     var BASE_URL = '/api';} 
//    else if (process.env.NODE_ENV == 'debug') { 
//     var BASE_URL = 'https://www.ceshi.com';
//    } 
//    else if (process.env.NODE_ENV == 'production') { 
//     var BASE_URL = 'https://www.production.com';
//    }

// 1. 基础路径
const BASE_URL = '/api';     //在proxy配置了跨域 /api 取代了前面的跨域地址,虽然我们在控制台看到请求的地址还是原本的路径，但是已经代理请求到配置的跨域地址了
// const BASE_URL = 'http://localhost:3000';     //上线前改为真实路径

// 2. 请求方法



// 登录
export const login = (phone,password) => ajax(BASE_URL+ '/login', {phone, password}, 'POST');
