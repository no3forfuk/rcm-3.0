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
        currentIdIndex: 0,
        emojiViewShow: false,
        cursorPosition: 0,
        openTextBold: false,
        showTextarea: false,
        textarea: {
            value: '',
            type: 'text',
        },
        isEdit: false,
        editIndex: 0,
        showTextareaFocus: false,
        showAddLink: false
    },
    ready() {


    },
    methods: {
        addLink() {
            this.setData({
                showAddLink: true
            })
        },
        closeAddLink() {
            this.setData({
                showAddLink: false
            })
        },
        insertText() {
            if (this.data.emojiViewShow) {
                this.setData({
                    emojiViewShow: false
                })
            }
            this.setData({
                showTextarea: !this.data.showTextarea,
                showTextareaFocus: !this.data.showTextareaFocus,
            })
        },
        textareaFocus(e) {
            this.setData({
                keyboardHeight: e.detail.height
            })
            if (this.data.isEdit) return
            if (this.data.postContent.length == 0) {
                this.setData({
                    textarea: {
                        type: 'text',
                        value: '',
                        blod: this.data.openTextBold
                    }
                })
            } else {
                let lastItem = this.data.postContent[this.data.postContent.length - 1]
                const postContent = this.data.postContent
                if (lastItem.type == 'text') {
                    this.setData({
                        textarea: lastItem
                    })
                    postContent.pop()
                    this.setData({
                        postContent: postContent
                    })
                } else {
                    this.setData({
                        textarea: {
                            type: 'text',
                            value: '',
                            blod: this.data.openTextBold
                        }
                    })
                }
            }
        },
        textareaInput(e) {
            if (this.data.openTextBold) {
                this.setData({
                    textarea: {
                        type: 'text',
                        value: e.detail.value,
                        blod: true
                    }
                })
            } else {
                this.setData({
                    textarea: {
                        type: 'text',
                        value: e.detail.value,
                        blod: false
                    }
                })
            }

        },
        textareaBlur(e) {
            if (this.data.isEdit) {
                const postContent = this.data.postContent
                postContent[this.data.editIndex] = this.data.textarea
                this.setData({
                    postContent: postContent
                })
            } else {
                const obj = this.data.textarea
                if (obj.value.length == 0) {
                    return
                } else {
                    obj.value = e.detail.value
                    obj.type = 'text'
                    obj.blod = this.data.openTextBold
                    this.setData({
                        postContent: [...this.data.postContent, obj]
                    })
                }
            }
            this.setData({
                showTextarea: false,
                showTextareaFocus: false,
                cursorPosition: e.detail.cursor
            })

        },
        editItem(e) {
            this.setData({
                showTextarea: true,
                showTextareaFocus: true,
                textarea: e.currentTarget.dataset.item,
                openTextBold: e.currentTarget.dataset.item.blod,
                isEdit: true,
                editIndex: e.currentTarget.dataset.index,
            })
        },
        insertTitle() {
            this.setData({
                openTextBold: !this.data.openTextBold
            })
            setTimeout(() => {
                this.setData({
                    showTextarea: true,
                    showTextareaFocus: true,
                })
            }, 300)
        },
        //打开Emoji选择框
        openSelectEmoji() {
            setTimeout(() => {
                if (this.data.emojiViewShow) {
                    this.setData({
                        emojiViewShow: false,
                        showTextarea: true,
                        showTextareaFocus: true
                    })
                } else {
                    this.setData({
                        emojiViewShow: true,
                        showTextarea: true,
                        showTextareaFocus: false
                    })
                }
            }, 300)
        },
        //选择emoji
        selectEmoji(e) {
            let textarea = this.data.textarea
            let text = textarea.value
            const emoji = e.currentTarget.dataset.emoji
            text = text.slice(0, this.data.cursorPosition) + emoji + text.slice(this.data.cursorPosition)
            const emojiLength = emoji.length
            this.setData({
                cursorPosition: this.data.cursorPosition + emojiLength
            })
            textarea.value = text
            this.setData({
                textarea: textarea
            })
        },
        //插入Hr
        insertHr() {
            setTimeout(() => {
                const postContent = this.data.postContent
                postContent.push({
                    type: 'hr',
                    value: ''
                })
                this.setData({
                    postContent: postContent
                })
                this.setData({
                    showTextarea: false,
                    showTextareaFocus: false,
                    showSelectImgModal: false,
                    emojiViewShow: false
                })
            }, 300)

        },
        menuItemHandle(e) {
            const item = e.detail.item
            this[item.handle]()
        },
        openSelectImages() {
            this.setData({
                showSelectImgModal: true,
                showTextarea: false,
                showTextareaFocus: false,
            })
        },
        closeSelectImgModal() {
            this.setData({
                showSelectImgModal: false
            })
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
    }
})