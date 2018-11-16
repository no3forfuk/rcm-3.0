const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        height: {
            type: Number,
            value: 0
        },
        show: {
            type: Boolean,
            value: false,
        },
        fatherId: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabData: [{
            text: '热门邀请'
        }, {
            text: '关注的'
        }, {
            text: '粉丝'
        },],
        current: 0,
        markLeft: 0,
        scrollHeight: 0,
        peopleData: [],
        type: 1,
        keyWords: ''

    },
    ready() {
        this.setMarkLeft(0);
        this.getInviteUser()
        this.getFocusUserList()
        this.getUserFansList()
    },
    methods: {
        getInviteUser() {
            app.request.getInviteUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    type: this.data.type
                },
                success: res => {
                    let arr = this.data.peopleData
                    arr[0] = res.data.list
                    this.setData({
                        peopleData: arr
                    })
                }
            })
        },
        getFocusUserList() {
            app.request.getUserFocusList({
                params: {
                    type: 3,
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: wx.getStorageSync('u_id')
                },
                success: res => {
                    let arr = this.data.peopleData
                    if (res.status_code == 1) {
                        arr[1] = res.data.list
                    } else {
                        arr[1] = []
                    }
                    this.setData({
                        peopleData: arr
                    })
                }
            })
        },
        getUserFansList() {
            app.request.getUserFansList({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: wx.getStorageSync('u_id')
                },
                success: res => {
                    if (res.status_code == 1) {
                        let arr = this.data.peopleData
                        arr[2] = res.data.list
                        this.setData({
                            peopleData: arr
                        })
                    }
                }
            })
        },
        searchUser() {
            app.request.getInviteUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    type: this.data.keyWords.length == 0 ? 1 : 2,
                    key: this.data.keyWords
                },
                success: res => {
                    let arr = this.data.peopleData
                    arr[0] = res.data.list
                    this.setData({
                        peopleData: arr
                    })
                }
            })
        },
        setKeyWords(e) {
            this.setData({
                keyWords: e.detail.value
            })
        },
        cancelInvite() {
            this.triggerEvent('cancel')
        },
        setMarkLeft(i) {
            const query = wx.createSelectorQuery().in(this)
            query.selectAll('.invite-tab-item').boundingClientRect()
            query.exec(res => {
                const result = res[0][i]
                this.setData({
                    markLeft: (result.width - 32) / 2 + result.left
                })
            })
        },
        changeTabItem(e) {
            this.setData({
                current: e.currentTarget.dataset.index
            })
            this.setMarkLeft(e.currentTarget.dataset.index)
            this.getInviteUser()
            this.getFocusUserList()
            this.getUserFansList()
        },
        changeSwiper(e) {
            this.setData({
                current: e.detail.current
            })
            this.setMarkLeft(e.detail.current)
        },
        invite(e) {
            const arr = this.data.peopleData
            if (arr[this.data.current][e.currentTarget.dataset.index].isInvited) {
                return
            } else {
                app.request.inviteAddElement({
                    params: {
                        second_id: this.properties.fatherId,
                        from_uid: wx.getStorageSync('u_id'),
                        to_uid: arr[this.data.current][e.currentTarget.dataset.index].id
                    },
                    success: res => {
                        arr[this.data.current][e.currentTarget.dataset.index].isInvited = true
                        this.setData({
                            peopleData: arr
                        })
                        wx.showModal({
                            titie: '',
                            content: '邀请成功',
                            showCancel: false
                        })
                    }
                })
            }
        }
    }
})