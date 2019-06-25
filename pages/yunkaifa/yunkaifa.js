// pages/yunkaifa/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        logoUrl: '../../images/icon_cloud.png',
        desc: '以下将演示小程序云开发能力,具体属性参数详见',
        list: [
            {
                id: 'yuser',
                to: false,
                url: 'javascript:void(0);',
                name: '用户鉴权',
                open: false,
                pages: [
                    '获取OpenID',
                ]
            },
            {
                id: 'database',
                to: false,
                url: 'javascript:void(0);',
                name: '数据库',
                open: false,
                pages: [
                    '基本操作',
                    '权限管理',
                    '服务端时间',
                ]
            },
            {
                id: 'ystorage',
                to: false,
                url: 'javascript:void(0);',
                name: '存储',
                open: false,
                pages: [
                    '上传文件',
                    '下载文件',
                    '删除文件',
                    '换取临时链接',
                    '组建支持',
                ]
            },
            {
                id: 'scf',
                to: false,
                url: 'javascript:void(0);',
                name: '云函数',
                open: false,
                pages: [
                    'WXContext',
                    '数据库',
                    '存储',
                    '云调用',
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    showToggle(e) {
        let id = e.currentTarget.id;
        let list = this.data.list;
        if (e.currentTarget.dataset.to) {
            // 路由跳转

            // wx.navigateTo({
            //     url: e.currentTarget.dataset.url,
            // });
        } else {
            list.forEach((val, i) => {
                if (id == val.id) {
                    val.open = !val.open;
                } else {
                    val.open = false;
                }
            });
            this.setData({
                list
            });
        }

        wx.reportAnalytics('click_view_programmatically', {})
    }
})