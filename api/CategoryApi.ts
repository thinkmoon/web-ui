import request from "~/api/request";

export default class CategoryApi {
	static getCategory(){
		return request({
			method: 'get',
			url: `/category/list`
		})
	}
}
