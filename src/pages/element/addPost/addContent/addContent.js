const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        selectMediaData: [{
            text: '插入图片',
            handle: 'insertImage'
        }, {
            text: '插入视频',
            handle: 'insertVideo'
        },],
        keyboardHeight: 336,
        postContent: [],
        showSelectImgModal: false
    },
    ready() {

    },
    methods: {
        slideUpMenu() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.translateY(-this.data.keyboardHeight).step()
            this.setData({
                ctrlAnimation: animation.export()
            })
        },
        slideDownMenu() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.translateY(0).step()
            this.setData({
                ctrlAnimation: animation.export()
            })
        },
        insertHr() {
            this.slideDownMenu()
            this.setData({
                postContent: [...this.data.postContent, {type: 'hr', value: ''}]
            })
        },
        openSelectEmoji() {
            this.slideUpMenu()
        },
        selectImages() {
            var animation = wx.createAnimation({
                duration: 1000,
                timingFunction: 'ease-out',
            })
            animation.opacity(1).step()
            this.setData({
                modalAnimation: animation.export()
            })
        },
        closeSelectImgModal() {
            this.setData({
                showSelectImgModal: false
            })
        }
    }
})