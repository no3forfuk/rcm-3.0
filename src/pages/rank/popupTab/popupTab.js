const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        height: {
            type: Number,
            value: 0
        },
        tabList: {
            type: Array,
            value: []
        },
        rankList: {
            type: Array,
            value: []
        }
    },
    data: {
        initialY: 0,
        tabHeaderArray: [],
        tabCurrentIndex: 0,
        markerLeft: 0,
        marginLeft: 0
    },
    attached() {

    },
    ready() {
        const query = wx.createSelectorQuery().in(this)
        query.selectAll('.top-tab-item-text').boundingClientRect()
        query.exec(res => {
            if (!res[0]) {
                return
            } else {
                this.setData({
                    tabHeaderArray: res[0]
                })
                this.setMarkerStyle()
            }
        })
        this.deleteItem()
    },
    methods: {
        //切换swiper
        handleSwiperChange(e) {
            const detail = e.detail
            this.setData({
                tabCurrentIndex: detail.current
            })
            this.setMarkerStyle()
        },
        toggleTab(e) {
            const idx = e.currentTarget.dataset.index
            this.setData({
                tabCurrentIndex: idx
            })
            this.setMarkerStyle()
        },
        slideUp() {
            this.addItem();
            const height = this.properties.height - 41
            let animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease',
            })
            animation.translateY(`${-height}px`).step()
            this.setData({
                animationData: animation.export()
            })
        },
        touchStart(e) {
            this.setData({
                initialY: e.changedTouches[0].clientY
            })
        },
        touchEnd(e) {
            const Y = e.changedTouches[0].clientY
            const initialY = this.data.initialY
            if (Y - initialY > 20) {
                this.slideDown()
            }
        },
        slideDown() {
            this.deleteItem();
            this.setData({
                tabCurrentIndex: 0
            })
            this.setMarkerStyle()
            let animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease',
            })
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export()
            })
        },
        setMarkerStyle() {
            this.setData({
                markerLeft: this.data.tabHeaderArray[this.data.tabCurrentIndex].left
            })
        },
        addItem() {
            let animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease',
            })
            animation.translateX(0).step()
            this.setData({
                marginAnimation: animation.export()
            })
        },
        deleteItem() {
            let animation = wx.createAnimation({
                duration: 500,
                timingFunction: 'ease',
            })
            animation.translateX('-90px').step()
            this.setData({
                marginAnimation: animation.export()
            })
        },
    }
})