import request from "~/api/request";

export default class CategoryApi {
	static getCategory(){
		return request({
			method: 'get',
			url: `/category/list`
		})
	}

	static getDetail(id){
		return request({
			method: 'get',
			url: `/category/${id}`
		})
	}
}
