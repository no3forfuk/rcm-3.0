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
                    popupHeight: n
                })
                this.setLargeTextareaHeight()
            }
        }
    },
    data: {
        allStar: [0, 0, 0, 0, 0],
        popupHeight: 0,
        rateValue: 0,
        postContent: '',
        keyboardHeight: 0,
        ctrlY: 0,
        textareaHeight: '',
        emojis: ['😀', '😁', '😂', '🤣', '😆', '😊', '😋', '😍', '😘', '😗', '😙', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '👈', '👉', '☝', '👆', '🖕', '👇', '✌', '🤞', '🖖', '🤘', '🖐', '✋', '👌', '👍', '👎', '✊', '👊', '🤛', '🤜', '🤚', '👋', '🤟', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😹', '😻', '😼', '😽', '🙀', '😿', '👶', '👦', '👴', '👵', '👮', '🕵', '💂', '👷', '🤴', '👸', '👳', '🧕', '🧔', '👱', '👨', '👩', '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🤶', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🙇', '🤦', '🤷', '💆', '💇', '🚶', '🏃', '💃', '🕺', '🧖', '🧘', '🕴', '👫', '💏', '👨', '👩', '💑', '👨', '👩', '👪', '🤳', '💪', '✍', '👏', '👐', '🙌', '🤲', '🙏', '🤝', '💅', '👂', '👃', '👣', '👀', '🧠', '👅', '👄', '💋', '👓', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '💄', '💍', '🌂'],

    },
    ready() {

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
        inputText(e) {
            this.setData({
                postContent: e.detail.value
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
        //输入框获取焦点
        textareaFocus(e) {
            this.setData({
                ctrlY: e.detail.height
            })
            this.setSmallTextareaHeight(e.detail.height);
            this.slideBottomBar()
        },
        //输入框丢失焦点
        textareaBlur() {

        },
        //插入水平线
        insertHr() {
        },
        selectEmoji(e) {
            this.setData({
                postContent: this.data.postContent + e.currentTarget.dataset.item
            })
        },
        openSelectEmoji() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.translateY(0).step()
            this.setData({
                emojiAnimation: animation.export()
            })
            this.setSmallTextareaHeight(this.data.ctrlY)
        },

    }
})