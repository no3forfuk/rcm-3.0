'use strict'
const utils = require('./utils/index')
const qiniuSDK = require('./static/vonder/qiniuUploader.js')

function init7niu() {
    utils.api.get7niuToken({
        params: {},
        success: res => {
            let token = res.data.qiniu_token
            let url = `https://up-z2.qbox.me`
            let options = {
                uptoken: token,
                uploadURL: url,
                region: 'SCN'
            }
            qiniuSDK.init(options)
        }
    })
}

init7niu()
App({
    onLaunch(option) {
        this.scene = option.scene
        wx.getSystemInfo({
            success: res => {
                this.statusBarHeight = res.statusBarHeight
            }
        })
    },
    globalData: {
        scene: ''
    },
    globalwxs: {
        search: {
            placeholderText: '#租房季',
            icon: {
                search: '../../static/images/search@3x.png'
            }
        }
    },
    request: utils.api,
    qiniuSDK: qiniuSDK,
    tools: utils.tools,
    randomColor: ['#418CE7', '#4ADFD2', '#56DC6F', '#E7D670', '#E7D670'],
    statusBarHeight: 0
})