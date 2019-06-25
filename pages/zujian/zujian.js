// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        logoUrl: '/images/icon_component.png',
        desc: ' 以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见',
        list: [
            {
                id: 'view',
                to: false,
                url: 'javascript:void(0);',
                name: '视图容器',
                open: false,
                pages: [
                    'view', 
                    'scroll-view', 
                    'swiper', 
                    'movable-view', 
                    'cover-view'
                ]
            }, 
            {
                id: 'content',
                to: false,
                url: 'javascript:void(0);',
                name: '基础内容',
                open: false,
                pages: [
                    'text', 
                    'icon', 
                    'progress', 
                    'rich-text'
                ]
            }, 
            {
                id: 'form',
                to: false,
                url: 'javascript:void(0);',
                name: '表单组件',
                open: false,
                pages: [
                    'button', 
                    'checkbox', 
                    'form', 
                    'input', 
                    'label', 
                    'picker', 
                    'picker-view', 
                    'radio', 
                    'slider', 
                    'switch', 
                    'textarea'
                ]
            }, 
            {
                id: 'nav',
                to: false,
                url: 'javascript:void(0);',
                name: '导航',
                open: false,
                pages: ['navigator']
            }, 
            {
                id: 'media',
                to: false,
                url: 'javascript:void(0);',
                name: '媒体组件',
                open: false,
                pages: [
                    'image', 
                    'audio', 
                    'video', 
                    'camera'
                ]
            }, 
            {
                id: 'map',
                to: false,
                url: 'javascript:void(0);',
                name: '地图',
                open: false,
                pages: ['map']
            }, 
            {
                id: 'canvas',
                to: false,
                url: 'javascript:void(0);',
                name: '画布',
                open: false,
                pages: ['canvas']
            }, 
            {
                id: 'open',
                to: false,
                url: 'javascript:void(0);',
                name: '开放能力',
                open: false,
                pages: [
                    'ad', 
                    'open-data', 
                    'web-view'
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