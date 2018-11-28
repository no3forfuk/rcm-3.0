//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addBodyHeight: 0,
        showAttrBox: false,
        rankWeidu: [],
        firstRankTags: [],
        selectIndex: 0,
        rankDesc: [],
        showTextarea: false,
        rankName: '',
        newRankItem: {
            type: '',
            value: ''
        },
        keyboardHeight: 336,
        isEdit: false,
        editIndex: 0,
        showEditModal: false,
        textareaValue: '',
        newWeidu: '',
        currentWeiduIndex: 0
    },
    setCurrentWeiduIndex(e) {
        this.setData({
            currentWeiduIndex: e.currentTarget.dataset.index
        })
    },
    submitAddWeidu() {
        app.request.addWeidu({
            params: {
                first_id: this.data.firstRankTags[this.data.selectIndex].id,
                dimension_name: this.data.newWeidu
            },
            success: res => {
                this.getDimension()
                this.toggleEditModal()
            }
        })
    },
    setValue(e) {
        this.setData({
            textareaValue: e.detail.value,
            newWeidu: e.detail.value
        })
    },
    toggleEditModal() {
        this.setData({
            showEditModal: !this.data.showEditModal
        })
    },
    setRankname(e) {
        this.setData({
            rankName: e.detail.value
        })
    },
    addWeidu() {
        this.toggleEditModal()
    },
    //获取维度
    getDimension() {
        app.request.getDimension({
            params: {
                first_id: this.data.firstRankTags[this.data.selectIndex].id
            },
            success: res => {
                this.setData({
                    rankWeidu: res.data
                })
            }
        })
    },
    toggleAttrBox() {
        this.setData({
            showAttrBox: !this.data.showAttrBox
        })
    },
    insetText() {
        this.setData({
            showTextarea: !this.data.showTextarea
        })
    },
    editItem(e) {
        this.setData({
            showTextarea: true,
            newRankItem: e.currentTarget.dataset.item,
            isEdit: true,
            editIndex: e.currentTarget.dataset.index,
        })
    },
    submitAdd() {
        let rankDesc = this.data.rankDesc
        for (let i = 0; i < rankDesc.length; i++) {
            if (rankDesc[i].type == 'image') {
                app.qiniuSDK.upload(rankDesc[i].path, complete => {
                    rankDesc[i].src = app.qiniuPre + complete.key
                    this.setData({
                        rankDesc: rankDesc
                    })
                    if (rankDesc.length == i - 1) {
                        app.request.addNewRank({
                            params: {
                                first_id: this.data.firstRankTags[this.data.selectIndex].id,
                                dimension_id: this.data.rankWeidu[this.data.currentWeiduIndex].id,
                                ranking_name: this.data.rankName,
                                ranking_details: JSON.stringify(this.data.rankDesc)
                            },
                            success: res => {
                                wx.redirectTo({
                                    url: `/pages/newRank/newRank?id=${res.data.id}`
                                })
                            }
                        })
                    }
                })
            }
        }
    },
    textareaFocus(e) {
        this.setData({
            keyboardHeight: e.detail.height
        })
        if (this.data.isEdit) return
        let lastItem = {}
        if (this.data.rankDesc.length == 0) {
            this.setData({
                // rankDesc: [{
                //     type: 'text',
                //     value: ''
                // }],
                newRankItem: {
                    type: 'text',
                    value: ''
                }
            })
        } else {
            lastItem = this.data.rankDesc[this.data.rankDesc.length - 1]
            const rankDesc = this.data.rankDesc
            if (lastItem.type == 'text') {
                this.setData({
                    newRankItem: lastItem
                })
                rankDesc.pop()
                this.setData({
                    rankDesc: rankDesc
                })
            } else {
                this.setData({
                    newRankItem: {
                        type: 'text',
                        value: ''
                    }
                })
            }
        }

    },
    textareaInput(e) {
        this.setData({
            newRankItem: {
                type: 'text',
                value: e.detail.value
            }
        })
    },
    textareaBlur(e) {
        if (this.data.isEdit) {
            const rankDesc = this.data.rankDesc
            rankDesc[this.data.editIndex] = this.data.newRankItem
            this.setData({
                rankDesc: rankDesc
            })
        } else {
            const obj = this.data.newRankItem
            if (obj.value.length == 0) {
                return
            } else {
                obj.value = e.detail.value
                obj.type = 'text'
                this.setData({
                    rankDesc: [...this.data.rankDesc, obj]
                })
            }
            this.setData({
                showTextarea: false
            })
        }
        this.setData({
            isEdit: false
        })
    },
    openSelectImages() {
        wx.chooseImage({
            success: res => {
                for (let i = 0; i < res.tempFilePaths.length; i++) {
                    this.setData({
                        rankDesc: [...this.data.rankDesc, {
                            type: 'image',
                            src: res.tempFilePaths[i],
                            path: res.tempFiles[i].path
                        }]
                    })
                }
            }
        });
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
            isComponent: false,
            target: '.add-rank-body',
            success: height => {
                this.setData({
                    addBodyHeight: height
                })
            }
        })
    },
    //获取领域列表
    getFirstRankList() {
        app.request.getFirstRankList({
            success: res => {
                this.setData({
                    firstRankTags: res.data
                })
                this.getDimension()
            }
        });
    },
    selectFirstRank(e) {
        this.setData({
            selectIndex: e.detail.value
        })
        this.getDimension()
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getFirstRankList()
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