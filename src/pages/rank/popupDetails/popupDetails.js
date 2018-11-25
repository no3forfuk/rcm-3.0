const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        height: {
            type: Number,
            value: 0
        },
        info: {
            type: Object,
            value: {},
        }
    },
    data: {},
    attached() {

    },
    methods: {
        closeModal() {
            this.triggerEvent('closeModal')
        },
        focusUser(e) {
            if (this.properties.info.user.is_attention == 0) {
                app.request.focusUser({
                    params: {
                        from_uid: wx.getStorageSync('u_id'),
                        to_uid: e.currentTarget.dataset.toid
                    },
                    success: res => {
                        wx.showModal({
                            title: '',
                            content: res.message,
                            showCancel: false,
                            mask: true
                        })
                        this.triggerEvent('refresh')
                    }
                })
            } else {
                app.request.cancelFocusUser({
                    params: {
                        from_uid: wx.getStorageSync('u_id'),
                        to_uid: e.currentTarget.dataset.toid
                    },
                    success: res => {
                        wx.showModal({
                            title: '',
                            content: res.message,
                            showCancel: false,
                            mask: true
                        })
                        this.triggerEvent('refresh')
                    }
                })
            }

        }
    }
})