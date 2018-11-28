/*Created By Jsir on 2018/9/19*/
'use strict'

function setScrollHeight(data = {
    target: '#box',
    isComponent: false,
    component: {},
    success: res => {
    }
}) {
    let [query, top, height] = [null, 0, 0]
    if (data.isComponent) {
        query = wx.createSelectorQuery().in(data.component)
    } else {
        query = wx.createSelectorQuery()
    }
    const system = wx.getSystemInfo({
        success: result => {
            query.select(data.target).boundingClientRect()
            query.exec(res => {
                if (res[0]) {
                    top = res[0].top
                    height = result.windowHeight
                    const viewHeight = height - top
                    data.success(viewHeight)
                } else {
                    console.error('未获取到res[0]')
                }
            })
        }
    })
}

function formatPostContent(e, type) {
    let reg = /<[^>]+>|&[a-z]*;/g
    if (type == 1) {
        if (reg.test(e)) {
            let textArr = e.split(reg)
            return {
                text: textArr.join('')
            }
        } else {
            return {
                text: e
            }
        }
    } else if (type == 2) {
        return {
            text: ''
        }
    } else if (type == 3) {
        if (reg.test(e)) {
            let textArr = e.split(reg)
            return {
                text: textArr.join('')
            }
        } else {
            let textArr = JSON.parse(e)
            let obj = {
                text: '',
                img: []
            }
            for (let i = 0; i < textArr.length; i++) {
                if (textArr[i].type == 'text') {
                    obj.text = obj.text + textArr[i].value
                }
                if (textArr[i].type == 'image') {
                    obj.img = [...obj.img, textArr[i].value]
                }
            }
            return obj
        }
    }

}

module.exports = {
    setScrollHeight,
    formatPostContent
}