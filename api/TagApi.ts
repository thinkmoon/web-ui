import request from '~/utils/RequestAdapter';

export default class TagApi {
  static getTag(params: { name?: string | string[] } = {}): Promise<unknown> {
    return request({
      method: 'get',
      url: `/tag/list`,
      params,
    });
  }
}
