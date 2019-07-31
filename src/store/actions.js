import {
  getHomeCasual,

} from '../api'

import {
  HOME_CASUAL,

} from './mutation-types'

export default {
  // 1. 获取首页的轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message})
  },
}
