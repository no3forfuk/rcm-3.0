//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollHeight: 0,
        list: []
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
            target: '.notice-item-page',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    getMyNotice() {
        app.request.getMyNotice({
            params: {},
            success: res => {
                if (res.status_code == 1 && res.data.list) {
                    const arr = res.data.list
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].notice_type == 2) {
                            this.setData({
                                list: [...this.data.list, arr[i]]
                            })
                        }
                    }
                    console.log(this.data.list);
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getMyNotice()
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