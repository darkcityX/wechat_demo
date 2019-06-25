// pages/jiekou/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        logoUrl: '/images/icon_API.png',
        desc: '以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见',
        list: [
            {
                id: 'api',
                to: false,
                url: 'javascript:void(0);',
                name: '开放接口',
                open: false,
                pages: [
                    '微信登陆',
                    '获取用户信息',
                    '发起支付',
                    '转发',
                    '转发按钮',
                    '客服消息',
                    '模板消息',
                    '收货地址',
                    '获取发票抬头',
                    '生物认证',
                    '设置'
                ]
            },
            {
                id: 'page',
                to: false,
                url: 'javascript:void(0);',
                name: '界面',
                open: false,
                pages: [
                    '设置界面标题',
                    '标题栏加载动画',
                    '设置TabBar',
                    '页面跳转',
                    '下拉刷新',
                    '创建动画',
                    '创建绘画',
                    '显示操作菜单',
                    '显示模态弹窗',
                    '页面滚动',
                    '显示消息提示框',
                    '获取WXML节点信息',
                    'WXML节点布局相交状态',
                    '',
                ]
            },
            {
                id: 'device',
                to: false,
                url: 'javascript:void(0);',
                name: '设备',
                open: false,
                pages: [
                    '获取手机网络状态',
                    '监听手机网络变化',
                    '获取手机系统信息',
                    '监听重力感应数据',
                    '监听罗盘数据',
                    '打电话',
                    '扫码',
                    '剪切板',
                    '蓝牙',
                    'iBeacon',
                    '屏幕亮度',
                    '用户截屏事件',
                    '振动',
                    '手机联系人',
                    'Wi-Fi',
                ]
            },
            {
                id: 'network',
                to: false,
                url: 'javascript:void(0);',
                name: '网络',
                open: false,
                pages: [
                    '发起一个请求',
                    'WebSocket',
                    '上传文件',
                    '下载文件',
                ]
            },
            {
                id: 'media',
                to: false,
                url: 'javascript:void(0);',
                name: '媒体',
                open: false,
                pages: [
                    '图片',
                    '录音',
                    '背景音频',
                    '文件',
                    '视频',
                    '动态加载字体',
                ]
            },
            {
                id: 'location',
                to: false,
                url: 'javascript:void(0);',
                name: '位置',
                open: false,
                pages: [
                    '获取当前位置',
                    '使用原生地图查看位置',
                    '使用原生地图选择位置',
                ]
            },
            {
                id: 'storage',
                to: true,
                url: 'storage/storage',
                name: '数据',
                open: false,
                pages: []
            },
            {
                id: 'worker',
                to: true,
                url: 'worker/worker',
                name: '多线程',
                open: false,
                pages: []
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