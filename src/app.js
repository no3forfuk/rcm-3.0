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
    tools: utils.tools,
    randomColor: ['#418CE7', '#4ADFD2', '#56DC6F', '#E7D670', '#E7D670']
})