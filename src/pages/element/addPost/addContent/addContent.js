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
        showSelectImgModal: false,
        emojis: ['😀', '😁', '😂', '🤣', '😆', '😊', '😋', '😍', '😘', '😗', '😙', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '👈', '👉', '☝', '👆', '🖕', '👇', '✌', '🤞', '🖖', '🤘', '🖐', '✋', '👌', '👍', '👎', '✊', '👊', '🤛', '🤜', '🤚', '👋', '🤟', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😹', '😻', '😼', '😽', '🙀', '😿', '👶', '👦', '👴', '👵', '👮', '🕵', '💂', '👷', '🤴', '👸', '👳', '🧕', '🧔', '👱', '👨', '👩', '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🤶', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🙇', '🤦', '🤷', '💆', '💇', '🚶', '🏃', '💃', '🕺', '🧖', '🧘', '🕴', '👫', '💏', '👨', '👩', '💑', '👨', '👩', '👪', '🤳', '💪', '✍', '👏', '👐', '🙌', '🤲', '🙏', '🤝', '💅', '👂', '👃', '👣', '👀', '🧠', '👅', '👄', '💋', '👓', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '💄', '💍', '🌂'],
        emojiViewShow: false
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
            this.setData({
                emojiViewShow: false
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
            this.setData({
                emojiViewShow: true
            })
        },
        openSelectImages() {
            this.slideDownMenu()
            this.setData({
                showSelectImgModal: true
            })
        },
        closeSelectImgModal() {
            this.setData({
                showSelectImgModal: false
            })
        },
        menuItemHandle(e) {
            const item = e.detail.item
            this[item.handle]()
        },
        insertImage() {
            this.closeSelectImgModal()
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
                },
                fail: res => {
                    this.openSelectImages()
                }
            });
        },
        insertVideo() {
            this.closeSelectImgModal()
            wx.chooseVideo({
                success: res => {
                    this.setData({
                        postContent: [...this.data.postContent, {
                            type: 'video',
                            src: res.tempFilePath
                        }]
                    })
                },
                fail: res => {
                    this.openSelectImages()
                }
            })
        },
    }
})