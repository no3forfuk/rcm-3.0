//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        showEditModal: false,
        editType: '',
        name: '',
        sign: '',
        textareaValue: ''
    },
    //获取用户详情
    getUserInfo() {
        app.request.getSelfInfo({
            params: {
                to_uid: wx.getStorageSync('u_id'),
                from_uid: wx.getStorageSync('u_id')
            },
            success: res => {
                this.setData({
                    userInfo: res.data.info
                })
            }
        })
    },
    selectImg() {
        wx.chooseImage({
            count: 1,
            success: res => {
                // editUserInfo this.getUserInfo()
                console.log(res);
                app.qiniuSDK.upload(res.tempFiles[0].path, complete => {
                    app.request.editUserInfo({
                        params: {
                            avatar: app.qiniuPre + complete.key,
                            avatar_key: complete.key
                        },
                        success: res => {
                            this.getUserInfo()
                        }
                    })
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
            app.request.editUserInfo({
                params: {
                    name: this.data.textareaValue
                },
                success: res => {
                    this.getUserInfo()
                }
            })
        } else {
            app.request.editUserInfo({
                params: {
                    signature: this.data.textareaValue
                },
                success: res => {
                    this.getUserInfo()
                }
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
        this.getUserInfo()
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