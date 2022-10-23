import request from '~/utils/RequestAdapter';

/**
 * CategoryApi
 */
export default class CategoryApi {
  /**
   * 获取所有分类
   * @param {Object} params
   * @param {String} params.name
   */
  static getCategory(params: { name?: string | string[] } = {}) : Promise<Array<any>> {
    return request({
      method: 'get',
      url: `/category/list`,
      params,
    });
  }
}
