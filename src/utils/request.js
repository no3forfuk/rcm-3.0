/*Created By Jsir on 2018/9/19*/
'use strict'
const request = function (data) {
    const token = wx.getStorageSync('token') || '';
    // let baseUrl = 'http://test.bantangtv.com'
    let baseUrl = 'https://www.rcm.ink/api'
    return wx.request({
        url: baseUrl + data.uri,
        data: data.params,
        method: data.method,
        header: {
            Authorization: 'Bearer ' + token
        },
        dataType: 'json',
        success(res) {
            if (data.success && res.statusCode == 200) {
                data.success(res.data)
            }
        },
        fail(err) {
            if (data.fail) {
                data.fail(err)
            }
        },
        complete(res) {
            if (data.complete && res.statusCode == 200) {
                data.complete(res.data)
            }
        }
    })
}
module.exports = request