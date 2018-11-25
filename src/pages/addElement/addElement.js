//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageHeight: 0,
        showAddAttr: false,
        attrList: [],
        showNewAttr: false,
        newAttr: {
            type: 2,
            attribute_name: '',
            attribute_details: ''
        },
        newAttrList: [],
        submitAttrList: [],
        attrString: '填写这个新成员的基本信息',
        elementName: '',
        elementDesc: [],
        showTextarea: false,
        newRankItem: {
            type: '',
            value: ''
        },
        keyboardHeight: 336,
        isEdit: false,
        editIndex: 0
    },
    openSelectImages() {
        wx.chooseImage({
            success: res => {
                for (let i = 0; i < res.tempFilePaths.length; i++) {
                    this.setData({
                        elementDesc: [...this.data.elementDesc, {
                            type: 'image',
                            src: res.tempFilePaths[i]
                        }]
                    })
                }
            }
        });
    },
    editItem(e) {
        this.setData({
            showTextarea: true,
            newRankItem: e.currentTarget.dataset.item,
            isEdit: true,
            editIndex: e.currentTarget.dataset.index,
        })
    },
    insetText() {
        this.setData({
            showTextarea: !this.data.showTextarea
        })
    },
    setElementName(e) {
        this.setData({
            elementName: e.detail.value
        })
    },
    textareaFocus(e) {
        this.setData({
            keyboardHeight: e.detail.height
        })
        if (this.data.isEdit) return
        let lastItem = {}
        if (this.data.elementDesc.length == 0) {
            this.setData({
                elementDesc: [{
                    type: 'text',
                    value: ''
                }],
                newRankItem: {
                    type: 'text',
                    value: ''
                }
            })
        } else {
            lastItem = this.data.elementDesc[this.data.elementDesc.length - 1]
            const elementDesc = this.data.elementDesc
            if (lastItem.type == 'text') {
                this.setData({
                    newRankItem: lastItem
                })
                elementDesc.pop()
                this.setData({
                    elementDesc: elementDesc
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
        this.setData({
            showTextarea: false
        })
        if (this.data.isEdit) {
            const elementDesc = this.data.elementDesc
            elementDesc[this.data.editIndex] = this.data.newRankItem
            this.setData({
                elementDesc: elementDesc
            })
        } else {
            const obj = this.data.newRankItem
            if (obj.value.length == 0) {
                return
            } else {
                obj.value = e.detail.value
                obj.type = 'text'
                this.setData({
                    elementDesc: [...this.data.elementDesc, obj]
                })
            }
        }
        this.setData({
            isEdit: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    inputBlur(e) {
        let attrList = this.data.attrList
        attrList[e.currentTarget.dataset.index].attribute_details = e.detail.value
        this.setData({
            attrList: attrList
        })
    },
    addNewAttr() {
        this.setData({
            showNewAttr: true
        })
        this.setData({
            newAttrList: [...this.data.newAttrList, {
                type: 2,
                attribute_name: '',
                attribute_details: ''
            }]
        })
    },
    toggleShowNewAttr() {
        this.setData({
            showNewAttr: !this.data.showNewAttr
        })
    },
    getRankAttr() {
        app.request.getRankAttr({
            params: {
                first_id: this.options.id
            },
            success: res => {
                let arr = []
                if (res.data.length > 0) {
                    arr = res.data
                }
                for (let i = 0; i < arr.length; i++) {
                    arr[i].type = 1
                }
                this.setData({
                    attrList: arr
                })
            }
        })
    },
    newAttrLabel(e) {
        let arr = this.data.newAttrList
        arr[e.currentTarget.dataset.index].attribute_name = e.detail.value
        this.setData({
            newAttrList: arr
        })
    },
    newAttrValue(e) {
        let arr = this.data.newAttrList
        arr[e.currentTarget.dataset.index].attribute_details = e.detail.value
        this.setData({
            newAttrList: arr
        })
    },
    confirm() {
        this.setData({
            submitAttrList: [...this.data.attrList, ...this.data.newAttrList]
        })
        let tempArr = [];
        let str = '';
        for (let i = 0; i < this.data.submitAttrList.length; i++) {
            if (this.data.submitAttrList[i].attribute_name) {
                tempArr.push(this.data.submitAttrList[i])
                str = str + this.data.submitAttrList[i].attribute_details + '/'
            }
        }
        this.setData({
            submitAttrList: tempArr,
            attrString: str
        })
        this.toggleAddAttrModal()
    },
    submitAdd() {
        app.request.addNewElement({
            params: {
                second_id: this.options.rankId,
                element_name: this.data.elementName,
                attribute: this.data.submitAttrList,
                element_details: JSON.stringify(this.data.elementDesc)
            },
            success: res => {
                if (res.status_code == 1) {
                    wx.redirectTo({
                        url: `/pages/element/element?id=${res.data.id}`
                    })
                } else {
                    wx.showModal({
                        title: '提示',
                        content: res.message,
                        mask: true,
                        showCancel: false,
                        success(res) {
                            return
                        }
                    })
                }
            }
        })
    },
    cacel() {
        this.toggleAddAttrModal()
    },
    toggleAddAttrModal() {
        this.setData({
            showAddAttr: !this.data.showAddAttr
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        app.tools.setScrollHeight({
            target: '.add-ele-page',
            isComponent: false,
            success: res => {
                this.setData({
                    pageHeight: res
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getRankAttr()
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