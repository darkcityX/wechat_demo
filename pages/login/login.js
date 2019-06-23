var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        uname: null,
        upwd: null

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

    /**
     * 登陆事件
     * 
    */
    loginSubmit: function(e){
        let uname = e.detail.value.uname,
            upwd = e.detail.value.upwd;
        if( uname == "" ){
            wx.showToast({
                title: '请输入账号!',
                image: './../../images/close.png',
                duration: 2000
            });
        }else if( upwd == "" ){
            wx.showToast({
                title: '请输入密码!',
                image: './../../images/close.png',
                duration: 2000
            });
        }else{
            // 缺少后台验证【进行数据模拟】
            if( this.getData() ){
                wx.showLoading({
                    title: '登陆成功!',
                });
                this.setData({
                    uname,
                    upwd
                });

                // 赋值给全局
                app.appData.userInfo = {
                    uname,
                    upwd
                }

                // 存入缓存
                wx.setStorage({
                    key: "userInfo",
                    data: {
                        uname,
                        upwd
                    }
                });

                setTimeout(function () {
                    wx.hideLoading();
                    wx.switchTab({
                        url: '../index/index',
                    });
                }, 1000);
                

            }else{
                wx.showToast({
                    title: '账号或密码错误!',
                    image: './../../images/close.png',
                    duration: 2000
                });    
            }
            
        }
    },
    /**
     * 获取后台数据：
     * 
    */
    getData: function(){
        return true;
    }

})