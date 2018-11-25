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
        }
    },
    data: {
        allStar: [0, 0, 0, 0, 0],
        rateValue: 0,
        postContentHeight: 0,
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
        textareaFocus(e){

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
        // addRatePost
        comfirmRate() {
            //  判断是否打过分
            let params = {}
            if (this.data.showRate) {
                params = {
                    score: (this.data.rateValue + 1) * 2,
                    element_id: this.data.elementInfo.id,
                    dimension_id: this.data.elementInfo.dimension[0] ? this.data.elementInfo.dimension[0].dimension_id : 1,
                    post_content: JSON.stringify(this.data.postContent)
                }
            } else {
                params = {
                    element_id: this.data.elementInfo.id,
                    post_content: JSON.stringify(this.data.postContent)
                }

            }
            app.request.addRatePost({
                params: params,
                success: res => {
                    console.log(res);
                }
            })
        },
    }
})