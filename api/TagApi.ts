import request from "~/api/request";

export default class TagApi {
	static getTag(){
		return request({
			method: 'get',
			url: `/tag/list`
		})
	}
}
