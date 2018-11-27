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
                if ('id' in n) {
                    if (n.ranking_details) {

                    } else if (n.ranking_desc) {
                        n.displayDesc = n.ranking_desc
                    }
                }
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