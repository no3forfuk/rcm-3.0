const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
    },
    data: {
        height: 0,
    },
    ready() {
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    height: res.screenHeight
                })
            }
        })
    },
    methods: {
        closeModal(){
            this.triggerEvent('closeModal')
        }
    }
})