import request from "@/utils/request";

export const getRecommendList = (params) =>{
    return request({
        url: '/personalized',
        params,
    })
}
export const getNewSong = (params) =>{
    return request({
        url: '/personalized/newsong',
        params,
    })
}