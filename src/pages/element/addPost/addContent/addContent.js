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
        postContent: [{
            type: 'text', value: ''
        }],
        showSelectImgModal: false,
        emojis: ['😀', '😁', '😂', '🤣', '😆', '😊', '😋', '😍', '😘', '😗', '😙', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '👈', '👉', '☝', '👆', '🖕', '👇', '✌', '🤞', '🖖', '🤘', '🖐', '✋', '👌', '👍', '👎', '✊', '👊', '🤛', '🤜', '🤚', '👋', '🤟', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '💩', '😺', '😹', '😻', '😼', '😽', '🙀', '😿', '👶', '👦', '👴', '👵', '👮', '🕵', '💂', '👷', '🤴', '👸', '👳', '🧕', '🧔', '👱', '👨', '👩', '🤵', '👰', '🤰', '🤱', '👼', '🎅', '🤶', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🙇', '🤦', '🤷', '💆', '💇', '🚶', '🏃', '💃', '🕺', '🧖', '🧘', '🕴', '👫', '💏', '👨', '👩', '💑', '👨', '👩', '👪', '🤳', '💪', '✍', '👏', '👐', '🙌', '🤲', '🙏', '🤝', '💅', '👂', '👃', '👣', '👀', '🧠', '👅', '👄', '💋', '👓', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '💄', '💍', '🌂'],
        emojiViewShow: false,
        currentText: 0,
        isKeyboardUp: false,
        cursorPosition: 0,
        openTextBold: false,
    },
    ready() {


    },
    methods: {
        //点击scrollView可视区域
        clickScrollView() {
            //1.当输入框弹起时，收起输入框
            if (this.data.isKeyboardUp) {
                this.slideDownMenu()
            } else {
                this.insertText()
            }
            //2.当输入框未弹起时，弹起输入框
            //2-1 最后一个输入框获取焦点 如果没有最后一个输入框 则新建一个输入框并获取焦点
            //2-2 使获取焦点的输入框进入可视区域
            //3.当点击可视区域内已有的输入框时 当前被点击的输入框获取焦点
            //3-1 使获取焦点的输入框进入可视区域
            //4.当点击可视区域其他组件时，捕获事件 禁止触发点击scrollView事件
            //
        },
        //弹起底部 菜单
        slideUpMenu() {
            var animation = wx.createAnimation({
                duration: 100,
                timingFunction: 'ease-out',
            })
            animation.translateY(-this.data.keyboardHeight).step()
            this.setData({
                ctrlAnimation: animation.export()
            })
            this.setData({
                isKeyboardUp: true
            })
        },
        //收起底部 菜单
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
                emojiViewShow: false,
                isKeyboardUp: false
            })
        },
        insertText() {
            const len = this.data.postContent.length
            const postContent = this.data.postContent
            if (len > 0) {
                let item = this.data.postContent[len - 1];
                if (item.type == 'text') {
                    item.focus = true
                    postContent[len - 1] = item
                    this.setData({
                        postContent: postContent
                    })
                } else {
                    this.setData({
                        postContent: [...this.data.postContent, {type: 'text', value: '', focus: true}]
                    })
                }
            } else {
                this.setData({
                    postContent: [...this.data.postContent, {type: 'text', value: '', focus: true}]
                })
            }
        },
        //插入Hr
        insertHr() {
            this.slideDownMenu()
            const postContent = this.data.postContent
            for (let i = 0; i < postContent.length; i++) {
                if (postContent[i].type == 'text') {
                    postContent[i].focus = false
                }
            }
            this.setData({
                postContent: [...postContent, {type: 'hr', value: ''}]
            })
        },
        //打开Emoji选择框
        openSelectEmoji() {
            if (this.data.emojiViewShow) {
                this.setData({
                    emojiViewShow: false
                })
                this.slideDownMenu()
            } else {
                if (this.data.isKeyboardUp) {
                    this.setData({
                        emojiViewShow: true
                    })
                } else {
                    this.setData({
                        emojiViewShow: true
                    })
                    this.slideUpMenu()
                }
            }
        },
        //选择emoji
        selectEmoji(e) {
            //1.选择激活的输入框
            const index = this.data.currentText
            let postContent = this.data.postContent
            let text = postContent[index].value
            const emoji = e.currentTarget.dataset.emoji
            text = text.slice(0, this.data.cursorPosition) + emoji + text.slice(this.data.cursorPosition)
            const emojiLength = emoji.length
            this.setData({
                cursorPosition: this.data.cursorPosition + emojiLength
            })
            postContent[index].value = text
            this.setData({
                postContent: postContent
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
        catchTextareaInput(e) {
            const index = e.currentTarget.dataset.index
            const postContent = this.data.postContent
            postContent[index].value = e.detail.value
            this.setData({
                postContent: postContent
            })
        },
        //输入框聚焦之后
        catchTextareaFocus(e) {
            //0.设置当前输入框聚焦
            let item = e.currentTarget.dataset.item
            item.focus = true
            const postContent = this.data.postContent
            postContent[e.currentTarget.dataset.index] = item
            //1.设置底部菜单弹起高度
            this.setData({
                keyboardHeight: e.detail.height || 336
            })
            //2.弹起底部菜单
            this.slideUpMenu()
            //3.记录当前激活的输入框
            this.setData({
                postContent: postContent,
                emojiViewShow: false
            })
            if (e.currentTarget.dataset.item.blod) {
                this.setData({
                    openTextBold: true
                })
            } else {
                this.setData({
                    openTextBold: false
                })
            }
        },
        //输入框丢失之后
        catchTextareaBlur(e) {
            //1.当前输入框的focus值为false
            const postContent = this.data.postContent
            const item = e.currentTarget.dataset.item
            if (item.value.length == 0 && !this.data.emojiViewShow) {
                postContent.splice(e.currentTarget.dataset.index, 1)
                //2.收起底部菜单
                this.slideDownMenu();
            } else {
                item.focus = false
                postContent[e.currentTarget.dataset.index] = item
            }
            this.setData({
                postContent: postContent
            })
            //3.记录光标位置
            this.setData({
                cursorPosition: e.detail.cursor,
                currentText: e.currentTarget.dataset.index,
            })
        },
        //插入标题
        insertTitle() {
            this.setData({
                openTextBold: !this.data.openTextBold
            })
            if (this.data.openTextBold) {
                this.setData({
                    postContent: [...this.data.postContent, {type: 'text', value: '', focus: true, blod: true}]
                })
            } else {
                this.setData({
                    postContent: [...this.data.postContent, {type: 'text', value: '', focus: true, blod: false}]
                })
            }

        },
        //插入图片
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
        //插入视频
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
        scrollAddContent() {

        }
    }
})