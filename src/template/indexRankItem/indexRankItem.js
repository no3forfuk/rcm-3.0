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
                this.setData({
                    titleData: {
                        title: n.ranking_name,
                        dimension: '',
                        id: n.id
                    }
                })
            }
        }
    },
    data: {
        titleData: {}
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
    }
})