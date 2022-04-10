import request from "~/api/request";

export default class CategoryApi {
  static getUploadToken() {
    return request({
      method: "get",
      url: `/attachment/upload_code`,
    });
  }
}
