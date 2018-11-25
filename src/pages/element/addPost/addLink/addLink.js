const app = getApp()
Component({

    properties: {},
    data: {
        searchItem: [{text: '热门榜单'}, {text: '热门排名'}],
        markStyle: {
            width: 0,
            left: 0
        },
        tabHeaderArray: [],
        current: 0
    },
    attached() {

    },
    ready() {
        (() => {
            //设置标记span位置及样式
            const query = wx.createSelectorQuery().in(this)
            query.selectAll('.search-title-item').boundingClientRect()
            query.exec(res => {
                if (!res[0]) {
                    return
                } else {
                    this.setData({
                        tabHeaderArray: res[0]
                    })
                    this.setCurrentStyle(this.data.current)
                }
            })
        })();
    },
    methods: {
        cancel() {
            this.triggerEvent('closeAddLink')
        },
        setCurrentStyle(index) {
            if (this.data.tabHeaderArray.length <= 0) {
                return
            } else {
                const [crtIndex, allItem] = [index, this.data.tabHeaderArray]
                this.setData({
                    markStyle: allItem[crtIndex]
                })
            }
        },
        ontapitem(e) {
            const dataset = e.currentTarget.dataset
            const index = this.data.current
            if (dataset.index === index) {
                return
            } else {
                this.setCurrentStyle(dataset.index)
                this.setData({
                    current: dataset.index
                })
            }
        },
        handleSwiperChange(e){
            const detail = e.detail
            this.setData({
                current: detail.current
            })
            this.setCurrentStyle(detail.current)
        }
    }
})