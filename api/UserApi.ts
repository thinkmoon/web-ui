import request from '~/api/request';

export default class UserApi {
  static login(data) {
    return request({
      method: 'post',
      url: '/user/login',
      data,
    });
  }
}
