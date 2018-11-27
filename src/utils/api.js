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
    //获取帖子评论
    getComment({params = {}, success}) {
        return request({
            uri: '/Xcx/Post/getPostComment',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //回复帖子或评论
    reply({params = {}, success}) {
        return request({
            uri: '/Xcx/Comment/addComment',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取个人信息
    getSelfInfo({params = {}, success}) {
        return request({
            uri: '/Xcx/User/userInfo',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取用户动态
    getUserDynamic({params = {}, success}) {
        return request({
            uri: '/Xcx/User/getMyDynamic',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取用户收藏列表
    getUserCollectList({params = {}, success}) {
        return request({
            uri: '/Xcx/User/collectList',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //签到 Xcx/User/userSignIn register
    //获取首页榜单
    getIndexRank({params = {}, success}) {
        return request({
            uri: '/Xcx/Index/getHotRanking',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取榜单下所有帖子
    getRankSubpost({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/getSecondPost',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //添加榜单
    addNewRank({params = {}, success}) {
        return request({
            uri: '/Xcx/Second/addSecond',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //点赞评论
    praiseComment({params = {}, success}) {
        return request({
            uri: '/Xcx/Comment/praise',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //取消点赞评论 Xcx/Comment/praise
    unPraiseComment({params = {}, success}) {
        return request({
            uri: '/Xcx/Comment/unpraise',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取元素属性
    getRankAttr({params = {}, success}) {
        return request({
            uri: '/Xcx/First/getFirstAttribute',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //添加维度
    addWeidu({params = {}, success}) {
        return request({
            uri: '/Xcx/First/addFirstDimension',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取创建的榜单列表
    getBuildRankList({params = {}, success}) {
        return request({
            uri: '/Xcx/User/getCreateRanking',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取首页动态
    getIndexDynamic({params = {}, success}) {
        return request({
            uri: '/Xcx/Index/getAttentionDynamic',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //添加排名
    addNewElement({params = {}, success}) {
        return request({
            uri: '/Xcx/Element/addElement',
            header: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //
    //获取热门搜索词
    getHotKeyWords({params = {}, success}) {
        return request({
            uri: '/Xcx/Search/getSearcHothKey',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    searchByWord({params = {}, success}) {
        return request({
            uri: '/Xcx/Search/search',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //首页发现
    getIndexFind({params = {}, success}) {
        return request({
            uri: '/Xcx/Index/findDynamic',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //获取我的消息
    getMyNotice({params = {}, success}) {
        return request({
            uri: '/Xcx/User/getMyNotice',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //清楚浏览记录
    removeHistory({params = {}, success}) {
        return request({
            uri: '/Xcx/Search/delUserHistory',
            params: params,
            success(res) {
                success(res)
            }
        })
    },
    //7niutoken
    get7niuToken({params = {}, success}) {
        return request({
            uri: '/Xcx/Qiniu/getUploadToken',
            params: params,
            success(res) {
                success(res)
            }
        })
    }
    //-------------------------------------------------------

}