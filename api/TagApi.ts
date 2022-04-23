import request from '~/api/request';

export default class TagApi {
  static getTag(params) {
    return request({
      method: 'get',
      url: `/tag/list`,
      params,
    });
  }
}
