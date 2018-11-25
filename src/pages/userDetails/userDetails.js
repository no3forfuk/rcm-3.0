//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: 0,
        socialList: [{
            text: '榜单',
            key: 'ranking_num',
            router: 'myRank'
        }, {
            text: '关注',
            key: 'user_attention_num',
            router: 'myFocus'
        }, {
            text: '粉丝',
            key: 'fan',
            router: 'myFans'
        }, {
            text: '收藏',
            key: 'collect_num',
            router: 'myCollection'
        }],
        noticeList: [{
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143952968,2791847100&fm=26&gp=0.jpg',
            type: 1
            //    创建榜单
        }, {
            type: 1
        }, {
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143952968,2791847100&fm=26&gp=0.jpg',
            type: 2
            //关注榜单
        }, {
            type: 2
        }, {
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143952968,2791847100&fm=26&gp=0.jpg',
            type: 3,
            rate: 7.8,
            score: 1234,
            name: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友',
            attr: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友'
            //关注排名
        }, {
            img: '',
            type: 3,
            rate: 7.8,
            score: 1234,
            name: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友',
            attr: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友'
        }, {
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143952968,2791847100&fm=26&gp=0.jpg',
            type: 4,
            rate: 7.8,
            score: 1234,
            name: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友',
            attr: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友'
            //关注排名
        }, {
            img: '',
            type: 4,
            rate: 7.8,
            score: 1234,
            newRate: 7.8,
            name: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友',
            attr: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友'
        },],
        scrollHeight: 0,
        userInfo: {},
        selfId: 0
    },
    goUserItemPage(e) {
        wx.navigateTo({
            url: `/pages/${e.currentTarget.dataset.router}/${e.currentTarget.dataset.router}?id=${this.data.userInfo.id}`
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        const system = wx.getSystemInfo({
            success: result => {
                this.setData({
                    statusBarHeight: result.statusBarHeight
                })
            }
        });
        app.tools.setScrollHeight({
            isComponent: false,
            target: '.user-details-page',
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    link2EditInfo() {
        wx.navigateTo({
            url: `/pages/editInfo/editInfo`
        })
    },
    //获取用户动态
    getUserDynamic() {
        app.request.getUserDynamic({
            params: {
                from_uid: wx.getStorageSync('u_id'),
                to_uid: this.options.id,
                page: 1,
                limit: 100
            },
            success: res => {

            }
        })
    },
    //获取用户详情
    getUserInfo() {
        app.request.getSelfInfo({
            params: {
                to_uid: this.options.id,
                from_uid: wx.getStorageSync('u_id')
            },
            success: res => {
                this.setData({
                    userInfo: res.data.info
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setData({
            selfId: wx.getStorageSync('u_id')
        })
        this.getUserInfo()
        this.getUserDynamic()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})