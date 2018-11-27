const app = getApp()
Component({

    properties: {
        element: {
            type: Array,
            value: [],
            observer(n, o, c) {
                if (n && n.length > 0) {
                    const arr = n
                    for (let i = 0; i < arr.length; i++) {
                        let node = []
                        let nameArr = arr[i].element_name.split(this.properties.keywords)
                        let children = []
                        for (let j = 0; j < nameArr.length; j++) {
                            let child = {}
                            if (j > 0) {
                                child = {
                                    name: 'span',
                                    attrs: {
                                        style: 'color:#499DFF;'
                                    },
                                    children: [{
                                        type: 'text',
                                        text: this.properties.keywords
                                    }]
                                }
                                children.push(child)
                                child = {
                                    type: 'text',
                                    name: 'span',
                                    text: nameArr[j]
                                }
                                children.push(child)
                            } else {
                                child = {
                                    type: 'text',
                                    name: 'span',
                                    text: nameArr[j]
                                }
                                children.push(child)
                            }
                        }
                        let obj = {
                            name: 'p',
                            children: children
                        }
                        node.push(obj)
                        arr[i].nameNodes = node
                    }
                    this.setData({
                        elementList: arr
                    })
                }
            }
        },
        post: {
            type: Array,
            value: [],
            observer(n, o, c) {
                if (n && n.length > 0) {
                    const arr = n
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].type == 1 || arr[i].type == 2) {
                            let reg = /<[^>]+>|&[a-z]*;/g;
                            let htmlArr = arr[i].post_content.split(reg)
                            let text = htmlArr.join('')
                            let prefixStr = '...'
                            let length = text.length;
                            let targetText = ''
                            let idx = text.indexOf(this.properties.keywords)
                            if (idx < 50) {
                                prefixStr = ''
                                targetText = text
                            } else if (50 <= idx < length - 50) {
                                prefixStr = '...'
                                targetText = text.substr(idx - 20, 100)
                            } else if (idx > length - 50) {
                                prefixStr = '...'
                                targetText = text.substr(idx, 50)
                            }
                            let finalText = prefixStr + targetText
                            let node = []
                            let children = []
                            let _arr = finalText.split(this.properties.keywords)
                            for (let j = 0; j < _arr.length; j++) {
                                let child = {}
                                if (j > 0) {
                                    child = {
                                        name: 'span',
                                        attrs: {
                                            style: 'color:#499DFF;'
                                        },
                                        children: [{
                                            type: 'text',
                                            text: this.properties.keywords
                                        }]
                                    }
                                    children.push(child)
                                    child = {
                                        type: 'text',
                                        name: 'span',
                                        text: _arr[j]
                                    }
                                    children.push(child)
                                } else {
                                    child = {
                                        type: 'text',
                                        name: 'span',
                                        text: _arr[j]
                                    }
                                    children.push(child)
                                }
                            }
                            let obj = {
                                name: 'p',
                                children: children
                            }
                            node.push(obj)
                            arr[i].contentNode = node
                        }
                        if (arr[i].type == 3) {
                            let reg = /<[^>]+>|&[a-z]*;/g
                            let htmlStr = arr[i].post_content
                            if (reg.test(htmlStr)) {

                            } else {
                                const htmlArr = JSON.parse(arr[i].post_content)
                                for (let j = 0; j < htmlArr.length; j++) {
                                    if (htmlArr[j].type == 'text' && htmlArr[j].value.indexOf(this.properties.keywords) != -1) {
                                        let node = []
                                        let children = []
                                        let _arr = htmlArr[j].value.split(this.properties.keywords)
                                        for (let k = 0; k < _arr.length; k++) {
                                            let child = {}
                                            if (k > 0) {
                                                child = {
                                                    name: 'span',
                                                    attrs: {
                                                        style: 'color:#499DFF;'
                                                    },
                                                    children: [{
                                                        type: 'text',
                                                        text: this.properties.keywords
                                                    }]
                                                }
                                                children.push(child)
                                                child = {
                                                    type: 'text',
                                                    name: 'span',
                                                    text: _arr[k]
                                                }
                                                children.push(child)
                                            } else {
                                                child = {
                                                    type: 'text',
                                                    name: 'span',
                                                    text: _arr[k]
                                                }
                                                children.push(child)
                                            }
                                        }
                                        let obj = {
                                            name: 'p',
                                            children: children
                                        }
                                        node.push(obj)
                                        arr[i].contentNode = node
                                    }
                                }
                            }
                        }
                    }
                    this.setData({
                        postList: arr
                    })
                }
            }
        },
        rank: {
            type: Array,
            value: [],
            observer(n, o, c) {
                if (n && n.length > 0) {
                    const arr = n
                    for (let i = 0; i < arr.length; i++) {
                        let node = []
                        let nameArr = arr[i].ranking_name.split(this.properties.keywords)
                        let children = []
                        for (let j = 0; j < nameArr.length; j++) {
                            let child = {}
                            if (j > 0) {
                                child = {
                                    name: 'span',
                                    attrs: {
                                        style: 'color:#499DFF;'
                                    },
                                    children: [{
                                        type: 'text',
                                        text: this.properties.keywords
                                    }]
                                }
                                children.push(child)
                                child = {
                                    type: 'text',
                                    name: 'span',
                                    text: nameArr[j]
                                }
                                children.push(child)
                            } else {
                                child = {
                                    type: 'text',
                                    name: 'span',
                                    text: nameArr[j]
                                }
                                children.push(child)
                            }
                        }
                        let obj = {
                            name: 'p',
                            children: children
                        }
                        node.push(obj)
                        arr[i].nameNodes = node
                    }
                    this.setData({
                        rankList: arr
                    })
                }
            }
        },
        keywords: {
            type: String,
            value: ''
        }
    },
    data: {
        tabData: {
            current: 0,
            items: [{
                label: '榜单',
                key: 'rank'
            }, {
                label: '排名',
                key: 'element'
            }, {
                label: '帖子',
                key: 'post'
            }]
        },
        scrollHeight: 0,
        elementList: [],
        rankList: [],
        postList: []
    },
    attached() {

    },
    ready() {
        app.tools.setScrollHeight({
            target: '.index-page-swiper',
            isComponent: true,
            component: this,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    methods: {
        tabChange(e) {
            const detail = e.detail
            this.setData({
                tabData: {
                    ...this.data.tabData,
                    current: detail.index
                }
            })
        },
        //切换swiper
        handleSwiperChange(e) {
            const detail = e.detail
            this.setData({
                tabData: {
                    ...this.data.tabData,
                    current: detail.current
                }
            })
        },
        link2Rank(e) {
            wx.navigateTo({
                url: `/pages/rank/rank?id=${e.currentTarget.dataset.id}`
            })
        },
        link2element(e) {
            wx.navigateTo({
                url: `/pages/element/element?id=${e.currentTarget.dataset.id}`
            })
        },
        link2Post(e){
            wx.navigateTo({
                url: `/pages/post/post?id=${e.currentTarget.dataset.id}`
            })
        }
    }
})