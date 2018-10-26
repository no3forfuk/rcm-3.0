const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        statusBarHeight: 0
    },
    attached() {

    },
    ready() {
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff'
        })
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    statusBarHeight: res.statusBarHeight
                })
            }
        })
    },
    methods: {}
})