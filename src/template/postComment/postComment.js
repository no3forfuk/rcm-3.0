const app = getApp()
Component({

    properties: {
        height: {
            value: 0,
            type: Number
        },
        postInfo: {
            value: {},
            type: Object,
            observer(n, o, c) {
                if ('id' in n) {
                    this.getCommentList()
                }
            }
        },
        showInput: {
            value: false,
            type: Boolean
        },
        replyAll: {
            value: false,
            type: Boolean
        }
    },
    data: {
        keyboardHeight: 0,
        commentContent: '',
        comment_type: 4,
        commentList: [],
        currentComment: {},
        currentUser: {}
    },
    attached() {

    },
    ready() {

    },
    methods: {
        getCommentList() {
            app.request.getComment({
                params: {
                    post_id: this.properties.postInfo.id,
                    page: 1,
                    limit: 10
                },
                success: res => {
                    this.setData({
                        commentList: res.data.list
                    })
                }
            })
        },
        toggleCommentInput() {
            this.setData({
                showInput: !this.properties.showInput
            })
        },
        inputFocus(e) {
            this.setData({
                keyboardHeight: e.detail.height || 336
            })
        },
        inputBlur() {
            this.setData({
                keyboardHeight: 0
            })
            this.triggerEvent('closeInput')
        },
        setCommentValue(e) {
            this.setData({
                commentContent: e.detail.value
            })
        },
        submitComment(params) {
            if (this.data.commentContent.length == 0) {
                return
            } else {
                let params = {}
                if (this.properties.replyAll) {
                    params = {
                        content: this.data.commentContent,
                        post_id: this.properties.postInfo.id,
                        comment_type: 3
                    }
                } else {
                    params = {
                        content: this.data.commentContent,
                        post_id: this.properties.postInfo.id,
                        comment_type: 4,
                        comment_id: this.data.currentComment.id
                    }
                }
                app.request.reply({
                    params: params,
                    success: res => {
                        this.data.commentContent = ''
                        this.getCommentList()
                    }
                })
            }
        },
        replyComment(e) {
            this.triggerEvent('noreplyall')
            this.setData({
                comment_type: 4,
                currentComment: e.currentTarget.dataset.item
            })
            this.toggleCommentInput()
        },
        togglePostZan(e) {
            if (e.currentTarget.dataset.item.is_praise == 0) {
                app.request.praiseComment({
                    params: {
                        comment_id: e.currentTarget.dataset.id
                    },
                    success: res => {
                        this.getCommentList()
                    }
                })
            } else {
                app.request.unPraiseComment({
                    params: {
                        comment_id: e.currentTarget.dataset.id
                    },
                    success: res => {
                        this.getCommentList()
                    }
                })
            }
        }
    }
})