import request from "~/api/request";

export default class attachmentApi {
  static getUploadToken() {
    return request({
      method: "get",
      url: `/attachment/upload_code`,
    });
  }
}
