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
                this.setLargeTextareaHeight()
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
        keyboardHeight: 0,
        ctrlY: 0,
        textareaHeight: '',
        emojis: ['😀', '😁', '😂', '🤣', '😆', '😊', '😋', '😍', '😘', '😗', '😙', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '👈', '👉', '☝', '👆', '🖕', '👇', '✌', '🤞', '🖖', '🤘', '🖐', '✋', '👌', '👍', '👎', '✊', '👊', '🤛', '🤜', '🤚', '👋', '🤟', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😹', '😻', '😼', '😽', '🙀', '😿', '👶', '👦', '👴', '👵', '👮', '🕵', '💂', '👷', '🤴', '👸', '👳', '🧕', '🧔', '👱', '👨', '👩', '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🤶', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🙇', '🤦', '🤷', '💆', '💇', '🚶', '🏃', '💃', '🕺', '🧖', '🧘', '🕴', '👫', '💏', '👨', '👩', '💑', '👨', '👩', '👪', '🤳', '💪', '✍', '👏', '👐', '🙌', '🤲', '🙏', '🤝', '💅', '👂', '👃', '👣', '👀', '🧠', '👅', '👄', '💋', '👓', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '💄', '💍', '🌂'],
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
        //设置大型输入框的高度
        setLargeTextareaHeight() {

            this.setData({
                textareaHeight: `calc(${this.data.popupHeight}px - 386rpx)`
            })
        },
        //设置小型输入框的高度
        setSmallTextareaHeight(height) {
            this.setData({
                textareaHeight: `calc(${this.data.popupHeight - height}px - 386rpx)`
            })
        },
        //弹起底部工具栏
        slideBottomBar() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.bottom(this.data.ctrlY).step()
            this.setData({
                ctrlAnimation: animation.export()
            })
        },
        //收起底部工具栏
        slideDownBottomBar() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.bottom(0).step()
            this.setData({
                ctrlAnimation: animation.export()
            })
        },
        //输入框获取焦点
        textareaFocus(e) {
            this.setData({
                ctrlY: e.detail.height,
            })
            this.setSmallTextareaHeight(e.detail.height);
            this.slideBottomBar()
        },
        //输入框丢失焦点
        textareaBlur(e) {
            this.setData({
                cursor: e.detail.cursor,
                lastIndex: e.currentTarget.dataset.index
            })
            this.setLargeTextareaHeight()
            this.slideDownBottomBar()
        },
        //插入水平线
        insertHr() {
            const content = this.data.postContent
            content.push({
                type: 'hr',
                value: ''
            })
            this.setData({
                postContent: content
            })
            this.closeSelectEmoji();
            this.slideDownBottomBar()
        },
        //选择图片
        selectImages(e) {
            var animation = wx.createAnimation({
                duration: 350,
                timingFunction: 'ease-out',
            })
            animation.translateY(0).step()
            this.setData({
                selectImageAnimaticon: animation.export()
            })
        },
        //取消选择图片
        cancelSelectImage() {
            var animation = wx.createAnimation({
                duration: 350,
                timingFunction: 'ease-out',
            })
            animation.translateY('100%').step()
            this.setData({
                selectImageAnimaticon: animation.export()
            })
        },
        selectIMG() {
            wx.chooseImage({
                success: res => {
                    for (let i = 0; i < res.tempFilePaths.length; i++) {

                        this.setData({
                            postContent: [...this.data.postContent, {
                                type: 'image',
                                src: res.tempFilePaths[i]
                            }]
                        })
                    }
                    this.cancelSelectImage()
                }
            })
        },
        selectVideo() {
            wx.chooseVideo({
                success: res => {
                    this.setData({
                        postContent: [...this.data.postContent, {
                            type: 'video',
                            src: res.tempFilePath
                        }]
                    })
                    this.cancelSelectImage()
                }
            })
        },
        //选择emoji
        selectEmoji(e) {
            const [content] = [this.data.postContent]
            let cursor = this.data.cursor
            let str = content[this.data.lastIndex].value
            let newStr = str.slice(0, cursor) + e.currentTarget.dataset.item + str.slice(cursor)
            content[this.data.lastIndex].value = newStr
            let len = e.currentTarget.dataset.item.length
            this.setData({
                postContent: content,
                cursor: parseInt(cursor) + parseInt(len)
            })
        },
        //打开emoji选择栏
        openSelectEmoji() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.translateY(0).step()
            this.setData({
                emojiAnimation: animation.export()
            })
            this.setSmallTextareaHeight(this.data.ctrlY);
            this.slideBottomBar()
        },
        //关闭emoji选择栏
        closeSelectEmoji() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.translateY('100%').step()
            this.setData({
                emojiAnimation: animation.export()
            })
            this.setSmallTextareaHeight(this.data.ctrlY)
        },
    }
})