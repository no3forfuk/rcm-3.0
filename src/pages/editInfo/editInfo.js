//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3621103112,910630873&fm=26&gp=0.jpg',
        showEditModal: false,
        editType: '',
        name: '',
        sign: '',
        textareaValue: ''
    },
    selectImg() {
        wx.chooseImage({
            count: 1,
            success: res => {
                this.setData({
                    avatar: res.tempFilePaths[0]
                })
            }
        })
    },
    toggleEditModal(e) {
        let type = e.currentTarget.dataset.type
        if (!type) {
            type = ''
        }
        this.setData({
            editType: type,
            showEditModal: !this.data.showEditModal
        })
    },
    setValue(e) {
        this.setData({
            textareaValue: e.detail.value
        })
    },
    submitEdit() {
        if (this.data.editType == 'name') {
            this.setData({
                name: this.data.textareaValue
            })
        } else {
            this.setData({
                sign: this.data.textareaValue
            })
        }
        this.setData({
            showEditModal: !this.data.showEditModal,
            textareaValue: ''
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