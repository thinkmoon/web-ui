import request from '~/utils/RequestAdapter';

export default class AttachmentApi {
  static getUploadToken(): Promise<unknown> {
    return request({
      method: 'get',
      url: `/attachment/upload_code`,
    });
  }
}
