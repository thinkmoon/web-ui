import request from '~/api/request';

export default class TagApi {
  static getTag(params: { name?: string | string[] } = {}): Promise<unknown> {
    return request({
      method: 'get',
      url: `/tag/list`,
      params,
    });
  }
}
