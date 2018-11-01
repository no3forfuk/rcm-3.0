const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ''
        },
        titleColor: {
            type: String,
            value: '#161616'
        },
        theme:{
            type: String,
            value: 'black'
        }
    },
    data: {
        statusBarHeight: 0
    },
    attached() {
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff'
        });
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    statusBarHeight: res.statusBarHeight
                })
            }
        });
    },
    methods: {
        goback() {
            wx.navigateBack({
                delay: 1
            })
        },
        gohome() {
            wx.redirectTo({
                url: '/pages/index/index'
            })
        }
    }
})