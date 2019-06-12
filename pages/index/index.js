// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        list: [
            {
                id: 'view',
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
                name: '导航',
                open: false,
                pages: ['navigator']
            }, 
            {
                id: 'media',
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
                name: '地图',
                open: false,
                pages: ['map']
            }, 
            {
                id: 'canvas',
                name: '画布',
                open: false,
                pages: ['canvas']
            }, 
            {
                id: 'open',
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
    showToggle(e){
        // console.log(e);
        let id = e.currentTarget.id;
        let list = this.data.list;
        list.forEach((val,i)=>{
            // console.log( val );
            if( id == val.id ){
                console.log(`1111111`);
                val.open = !val.open;
            }else{
                val.open = false;    
            }
        });
        this.setData({
            list
        });

        wx.reportAnalytics('click_view_programmatically', {})
    }
})