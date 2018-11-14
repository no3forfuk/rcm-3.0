//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: 0,
        socialList: [{
            text: '榜单'
        }, {
            text: '关注'
        }, {
            text: '粉丝'
        }, {
            text: '收藏'
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
        scrollHeight: 0
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
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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