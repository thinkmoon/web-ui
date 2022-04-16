import request from "~/api/request";

export default class PostApi {
  static getList(params){
    return request({
      method: 'get',
      url: '/post/list',
      params
    })
  }
  static getDetail(params){
    return request({
      method: 'get',
      url: `/post/${params.cid}`,
      params
    })
  }
  static update(data){
    return request({
      method: 'post',
      url: `/post/update`,
      data
    })
  }
  static add(data){
    return request({
      method: 'post',
      url: `/post/add`,
      data
    })
  }
}
