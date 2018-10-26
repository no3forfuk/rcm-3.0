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
        rankList: []
    },
    attached() {

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
                this.setData({
                    firstRankTags: res.data.data
                })
            }
        });
        this.getHotRank();
    },
    methods: {
        //获取热榜
        getHotRank() {
            app.request.getIndexHotRank({
                params: {
                    page: 1
                },
                success: res => {
                    this.setData({
                        rankList: res.data.data
                    })
                }
            })
        },
        //切换一级榜单标签
        toggleFirstRank(e) {
            const dataset = e.currentTarget.dataset
            this.setData({
                currentFirstRankIndex: dataset.index
            })
        },
        //切换排序类型
        toggleSortType(e) {
            if (this.data.sortMapIndex == 0) {
                this.setData({
                    sortMapIndex: 1
                })
            } else if (this.data.sortMapIndex == 1) {
                this.setData({
                    sortMapIndex: 0
                })
            }
        }
    }
})