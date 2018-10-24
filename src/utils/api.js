/*Created By Jsir on 2018/9/19*/
'use strict'
const request = require('./request.js')
module.exports = {
    //登陆
    login({params = {}, success}) {
        return request({
            uri: '/xcx/xcxLogin',
            params: params,
            method: 'POST',
            success(res) {
                success(res)
            }
        })
    },
    //获取个人信息
    getSelfInfo({params = {}, success}) {
        return request({
            uri: '/home/user/userInfo',
            params: params,
            method: 'POST',
            success(res) {
                success(res)
            }
        })
    },
    //获取热门搜索词
    getHotKeyWords({params = {}, success}) {
        return request({
            uri: '/home/search/hotSearchKey',
            params: params,
            method: 'GET',
            success(res) {
                success(res)
            }
        })
    },
    //获取热门榜单 getHotRank
    getHotRank({params = {}, success}) {
        return request({
            uri: '/home/index/hotRanking',
            params: params,
            method: 'GET',
            success(res) {
                success(res)
            }
        })
    },
    //关键字搜索
    searchByKeyWords({params = {}, success}) {
        return request({
            uri: '/home/search/search',
            params: params,
            method: 'POST',
            success(res) {
                success(res)
            }
        })
    },

}