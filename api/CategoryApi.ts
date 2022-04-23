import request from '~/api/request';

/**
 * CategoryApi
 */
export default class CategoryApi {
  /**
   * 获取所有分类
   * @param {Object} params
   * @param {String} params.name
   * @return {Axios.defaults}
   */
  static getCategory(params: { name: string | string[] }) {
    return request({
      method: 'get',
      url: `/category/list`,
      params,
    });
  }
}
