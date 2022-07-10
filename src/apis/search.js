import request from "@/utils/request";

export const getSearchTag = (params) =>{
    return request({
        url: '/search/hot',
        params,
    })
}
// 搜索结果
export const searchResultList = params => request({
    url: '/cloudsearch',
    params,
})