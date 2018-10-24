const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabData: {
            type: Object,
            value: {}
        },
        swiperData: {
            type: Array,
            value: []
        },
        currentPage: {
            type: Number,
            value: 1
        }
    },
    data: {
        scrollHeight: 0
    },
    attached() {

    },
    methods: {
        switchTab(e) {
            this.setData({
                currentPage: e.detail.index
            })
        },
        switchSwiper(e) {
            const tabData = this.data.tabData
            tabData.current = e.detail.current
            this.setData({
                tabData
            })
        }
    }
})