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
        current: 0,
        hotRankList: [],
        hotElementList: [],
        addRankList: [],
        addRankObj: {},
        addElementList: [],
        addElementObj: {},
        outLinkList: []
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
        this.getHotsRanking()
        this.getHotsElement()
    },
    methods: {
        addRank(e) {
            if (e.currentTarget.dataset.index in this.data.addRankObj) {
                return
            } else {
                let obj = {}
                obj[e.currentTarget.dataset.index] = e.currentTarget.dataset.index
                this.setData({
                    addRankObj: {...this.data.addRankObj, ...obj}
                })
            }
        },
        addele(e) {
            if (e.currentTarget.dataset.index in this.data.addElementObj) {
                return
            } else {
                let obj = {}
                obj[e.currentTarget.dataset.index] = e.currentTarget.dataset.index
                this.setData({
                    addElementObj: {...this.data.addElementObj, ...obj}
                })
            }
        },
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
        handleSwiperChange(e) {
            const detail = e.detail
            this.setData({
                current: detail.current
            })
            this.setCurrentStyle(detail.current)
        },
        getHotsRanking() {
            app.request.getHotsRanking({
                params: {
                    page: 1,
                    limit: 1000
                },
                success: res => {
                    if (res.status_code == 1) {
                        this.setData({
                            hotRankList: res.data.list
                        })
                    }
                }
            })
        },
        getHotsElement() {
            app.request.getHotsElement({
                params: {
                    page: 1,
                    limit: 1000
                },
                success: res => {
                    if (res.status_code == 1) {
                        this.setData({
                            hotElementList: res.data.list
                        })
                    }
                }
            })
        }
    }
})