const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        info: {
            type: Object,
            value: {},
        },
        mode: {
            type: String,
            value: 'normal'
        }
    },
    data: {},
    attached() {

    },
    methods: {
        //跳转至榜单
        linkToRank(e) {
            wx.navigateTo({
                url: `/pages/rank/rank?id=${e.currentTarget.dataset.id}`
            })
        }
    }
})