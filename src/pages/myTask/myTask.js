//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalScore: 1234,
        currentScore: 456,
        scrollViewHeight: 0,
        modalShow: false,
        taskList: [{
            name: '发布新榜单',
            exp: 15,
            limit: 10,
            current: 1
        }, {
            name: '为榜单添加排名',
            exp: 5,
            limit: 10,
            current: 2
        }, {
            name: '分享榜单、排名、帖子',
            exp: 25,
            limit: 50,
            current: 2
        }, {
            name: '为排名打分',
            exp: 35,
            limit: 30,
            current: 5
        }, {
            name: '发表评论',
            exp: 5,
            limit: 100,
            current: 4
        }, {
            name: '收藏榜单、排名、帖子',
            exp: 15,
            limit: 100,
            current: 34
        }, {
            name: '关注榜单、排名、用户',
            exp: 5,
            limit: 100,
            current: 34
        }, {
            name: '点赞帖子',
            exp: 5,
            limit: 100,
            current: 34
        }]
    },
    openModal() {
        this.setData({
            modalShow: true
        })
    },
    closeModal() {
        this.setData({
            modalShow: false
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
        app.tools.setScrollHeight({
            target: '.my-task-page',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollViewHeight: height
                })
            }
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