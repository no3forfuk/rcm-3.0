/*Created By Jsir on 2018/9/19*/
'use strict'
const request = require('./request.js')

module.exports = {
    //登陆
    login({params = {}, success}) {
        return request({
            uri: '/Xcx/Login/login',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取领域列表
    getFirstRankList({params = {}, success}) {
        return request({
            uri: '/Xcx/First/getFirstList',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取维度
    getDimension({params = {}, success}) {
        return request({
            uri: '/Xcx/First/getFirstDimension',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取榜单详情
    getRankDetails({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/getSecondInfo',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取榜单排名列表
    getRankSubElement({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/getSecondElement',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //关注榜单
    focusRank({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/attention',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //取消关注榜单
    cancelFocusRank({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/unattention',
            params: params,
            success(res) {
                success(res)
            }
        })
    },

    //关注用户
    focusUser({params = {}, success}) {
        return request({
            uri: '/Xcx/User/attention',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //取消关注用户
    cancelFocusUser({params = {}, success}) {
        return request({
            uri: '/Xcx/User/unattention',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取热门邀请的人
    getInviteUser({params = {}, success}) {
        return request({
            uri: '/Xcx/User/getHotInviteList',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取用户关注列表
    getUserFocusList({params = {}, success}) {
        return request({
            uri: '/Xcx/User/userAttentionList',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取粉丝列表
    getUserFansList({params = {}, success}) {
        return request({
            uri: '/Xcx/User/fanList',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //邀请添加榜单
    inviteAddElement({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/invite',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //添加评分
    addRatePost({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/addPost',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取元素详情
    getElementDetail({params = {}, success}) {
        return request({
            uri: '/Xcx/Element/getElementInfo',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //关注排名
    focusElement({params = {}, success}) {
        return request({
            uri: '/Xcx/Element/attention',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //取消关注排名
    unFocusElement({params = {}, success}) {
        return request({
            uri: '/Xcx/Element/unattention',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取排名下的帖子
    getElementSubPost({params = {}, success}) {
        return request({
            uri: '/Xcx/Element/getElementPost',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //帖子点赞
    praisePost({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/praise',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //帖子取消点赞
    unPraisePost({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/unpraise',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //帖子收藏
    collectPost({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/collect',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //帖子取消收藏
    unCollectPost({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/uncollect',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取帖子详情
    getPostDetails({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/getPostInfo',
            params: params,
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