// src/components/panel/panel.js
const wxs = getApp().globalwxs
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        bgc: {
            type: String,
            value: '#fff',
            observer(n, o, c) {
                if (n === '#fff' || n === '#ffffff' || n === 'white') {
                    wx.setNavigationBarColor({
                        frontColor: '#000000',
                        backgroundColor: '#ffffff'
                    })
                }
            }
        },
        mode: {
            type: String,
            value: 'text'
        },
        value: {
            type: String,
            value: ''
        }
    },
    data: {
        statusBarHeight: 20,
        height: 0,
        width: 0,
        textModal: {}
    },
    attached() {
        this.setData({
            textModal: wxs.search
        })
        const system = wx.getSystemInfoSync()
        this.setData({
            statusBarHeight: system.statusBarHeight
        })
    },
    methods: {
        back() {
            wx.navigateBack({
                delta: 1
            })
        }
    }
})
