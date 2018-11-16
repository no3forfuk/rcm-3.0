const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rankInfo: {
            type: Object,
            value: {},
            observer(n, o, c) {

            }
        }
    },
    data: {
        titleData: {},
        subElement: []
    },
    attached() {

    },
    methods: {
        //浏览图片
        viewImage(e) {
            const url = e.currentTarget.dataset.url
            wx.previewImage({
                current: url,
                urls: [url]
            })
        },
        link2Rank(e) {
            wx.navigateTo({
                url: `/pages/rank/rank?id=${e.currentTarget.dataset.id}`
            })
        }
    }
})