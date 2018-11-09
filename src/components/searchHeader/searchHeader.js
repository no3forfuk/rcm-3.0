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
        //设置顶部导航栏style
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff'
        })
        //设置状态栏高度
        this.setData({
            statusBarHeight: app.statusBarHeight
        })
    },
    methods: {
        //跳转至搜索页面
        link2SearchPage() {
            wx.navigateTo({
                url: `/pages/search/search`
            })
        }
    }
})