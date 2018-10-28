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
    //获取一级榜单列表
    getFirstRankList({params = {}, success}) {
        return request({
            uri: '/home/index/firstList',
            params: params,
            method: 'GET',
            success(res) {
                success(res)
            }
        })
    },
    //获取首页热门榜单
    getIndexHotRank({params = {}, success}) {
        return request({
            uri: '/home/index/hotRanking',
            params: params,
            method: 'GET',
            success(res) {
                success(res)
            }
        })
    },
    //获取榜单详情
    getRankDetails({params = {}, success}) {
        return request({
            uri: '/home/ranking/getRanking',
            params: params,
            method: 'GET',
            success(res) {
                success(res)
            }
        })
    },
    //-------------------------------------------------------
    //获取热帖
    getHotPost({params = {}, success}) {
        return request({
            uri: '/home/index/hotPost',
            params: params,
            method: 'GET',
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