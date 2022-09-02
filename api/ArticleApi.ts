import request from '~/utils/RequestAdapter';

export default class ArticleApi {
  static getList(params) {
    return request({
      method: 'get',
      url: '/post/list',
      params,
    });
  }

  static getListByTag(params) {
    return request({
      method: 'get',
      url: '/post/list-by-tag',
      params,
    });
  }

  static getDetail(params) {
    return request({
      method: 'get',
      url: `/post/${params.cid}`,
      params,
    });
  }

  static update(data) {
    return request({
      method: 'post',
      url: `/post/update`,
      data,
    });
  }

  static add(data) {
    return request({
      method: 'post',
      url: `/post/add`,
      data,
    });
  }
}
