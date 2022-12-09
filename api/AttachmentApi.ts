import request from '~/utils/RequestAdapter';

export default class AttachmentApi {
  static getUploadToken(): Promise<string> {
    return request({
      method: 'get',
      url: `/attachment/upload_code`,
    });
  }
}
