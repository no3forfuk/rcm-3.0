const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        element: {
            type: Object,
            value: {},
            observer(n) {
                if ('id' in n) {
                    this.setData({
                        elementInfo: n
                    })
                }
            }
        },
        height: {
            type: Number,
            value: 0,
        },
        showRate: {
            type: Boolean,
            value: false
        },
        weidu: {
            type: Number,
            value: 0
        }
    },
    data: {
        allStar: [0, 0, 0, 0, 0],
        rateValue: 0,
        postContent: [],
        lastIndex: 0,
        cursor: 0,
        elementInfo: {}
    },
    ready() {
        app.tools.setScrollHeight({
            target: '.add-post-content',
            component: this,
            isComponent: true,
            success: height => {
                this.setData({
                    postContentHeight: height
                })
            }
        });
    },
    methods: {
        cancel() {
            this.triggerEvent('cancelAdd')
        },
        addRate(e) {
            this.setData({
                rateValue: e.currentTarget.dataset.index
            })
        },
        // addRatePost
        comfirmRate() {
            //  判断是否打过分
            const content = this.selectComponent('#addContent').data.postContent
            let params = {}
            if (this.data.showRate) {
                params = {
                    score: (this.data.rateValue + 1) * 2,
                    element_id: this.data.elementInfo.id,
                    dimension_id: this.properties.weidu,
                    post_content: JSON.stringify(content)
                }
            } else {
                params = {
                    element_id: this.data.elementInfo.id,
                    post_content: JSON.stringify(content)
                }

            }
            app.request.addRatePost({
                params: params,
                success: res => {
                    if (res.status_code == 1) {
                        this.triggerEvent('cancelAdd')
                        wx.navigateTo({
                            url: `/pages/post/post?id=${res.data.id}`
                        })
                    }
                }
            })
        },
    }
})