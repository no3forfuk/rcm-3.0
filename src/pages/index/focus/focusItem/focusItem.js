const app = getApp()
Component({

    properties: {
        info: {
            type: Object,
            value: {},
            observer(n, o, c) {
                if ('id' in n) {
                    let reg = /<[^>]+>|&[a-z]*;/g;
                    if (n.second && n.second.ranking_details) {
                        if (!reg.test(n.second.ranking_details)) {
                            let textArr = JSON.parse(n.second.ranking_details)
                            for (let i = 0; i < textArr.length; i++) {
                                if (textArr[i].type == 'text') {
                                    this.setData({
                                        rankDescText: this.data.rankDescText + textArr[i].value
                                    })
                                }
                                if (textArr[i].type == 'image') {
                                    this.setData({
                                        rankImageSrc: textArr[i].src
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    data: {
        rankDescText: '',
        rankImageSrc: ''
    },
    attached() {

    },
    ready() {

    },
    methods: {}
})