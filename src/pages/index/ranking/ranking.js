const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        firstRankTags: [],
        currentFirstRankIndex: 0,
        sortMap: [{
            text: '最新',
            key: 'lastest'
        }, {
            text: '热门',
            key: 'hostest'
        }],
        sortMapIndex: 0,
        rankList: [],
        showMore: false,
        canIscroll: false,
        showPullDownView: false,
        scrollViewTop: 0,
        sortType: 1,
        currentFirstRank: {}
    },
    ready() {
        app.tools.setScrollHeight({
            target: '.scroll-view-class',
            isComponent: true,
            component: this,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
        app.request.getFirstRankList({
            success: res => {
                if(res.status_code == 1 && res.data){
                    this.setData({
                        firstRankTags: res.data,
                        currentFirstRank: res.data[0]
                    })
                }
                this.getIndexRank()
            }
        });
    },
    methods: {
        onScrollView(e) {
            this.triggerEvent('hideBottom', {info: e.detail, height: this.data.scrollHeight})
        },
        getIndexRank() {
            app.request.getIndexRank({
                params: {
                    page: 1,
                    limit: 100,
                    type: this.data.sortType,
                    first_id: this.data.currentFirstRank.id
                },
                success: res => {
                    if(res.status_code == 1 && res.data.list){
                        this.setData({
                            rankList: res.data.list
                        })
                    }

                }
            })
        },
        //切换一级榜单标签
        toggleFirstRank(e) {
            this.setData({
                canIscroll: true,
                currentFirstRank: e.currentTarget.dataset.item
            })
            const dataset = e.currentTarget.dataset
            this.setData({
                currentFirstRankIndex: dataset.index
            })
            setTimeout(() => {
                this.setData({
                    canIscroll: false
                })
            }, 100)
            this.getIndexRank()
        },
        //切换排序类型
        toggleSortType(e) {
            if (this.data.sortMapIndex == 0) {
                this.setData({
                    sortMapIndex: 1,
                    sortType: 1,
                })
            } else if (this.data.sortMapIndex == 1) {
                this.setData({
                    sortMapIndex: 0,
                    sortType: 2,
                })
            }
            this.getIndexRank()
        },
        //展示更多领域
        showMoreTag() {
            this.setData({
                showMore: !this.data.showMore
            })
        },
        //下拉刷新
        pullDownRefresh() {
            this.setData({
                showPullDownView: true,
                scrollViewTop: -60
            })
            setTimeout(() => {
                this.setData({
                    showPullDownView: false
                })
            }, 2000)
        }
    }
})