'use strict'
const utils = require('./utils/index')
App({
    onLaunch(option) {
        this.scene = option.scene
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
    tools: utils.tools
})