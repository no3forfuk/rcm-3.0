const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        element: {
            type: Object,
            value: {}
        },
        height: {
            type: Number,
            value: 0,
            observer(n, o, c) {
                this.setData({
                    popupHeight: n,
                    scrollViewHeight: `calc(${n}px - 386rpx)`
                })
            }
        }
    },
    data: {
        allStar: [0, 0, 0, 0, 0],
        popupHeight: 0,
        rateValue: 0,
        postContentHeight: 0,
        scrollViewHeight: 0,
        postContent: [],
        lastIndex: 0,
        cursor: 0,
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
        })
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
        textareaInput(e) {
            const [content, item, index] = [this.data.postContent, e.currentTarget.dataset.item, e.currentTarget.dataset.index]
            item.value = e.detail.value
            content[index] = item
            this.setData({
                postContent: content
            })
        },
        insetTextarea() {
            this.setData({
                postContent: [...this.data.postContent, {
                    type: 'text',
                    value: ''
                }]
            })
        },
    }
})