import request from '~/utils/RequestAdapter';

export default class UserApi {
  static login(data) {
    return request({
      method: 'post',
      url: '/user/login',
      data,
    });
  }
}
