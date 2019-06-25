var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        uname: '默认'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options){
        // console.log( app.appData );
        console.log(this);
        wx.getStorage({
            key: 'userInfo',
            success: res=>{
                console.log( "--- 进入success ---" );
                console.log( res );
                // 该处未判断缓存
                if (app.appData.userInfo == null) {
                    wx.redirectTo({
                        url: '../login/login',
                    });
                } else {
                    // console.log( app );
                    console.log("有缓存-- - --也有app");
                    console.log( this );
                    this.setData({
                        uname: app.appData.userInfo.uname
                    });

                }

            },
            fail: err=>{
                console.log("--- 进入error ----");
                console.log( err );
            }
        })
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
    showViewSelect:e=>{
        console.log( e );
        wx.showActionSheet({
            itemList: ['组件示例','接口示例','云开发示例'],
            itemColor: '#333333',
            success: res=>{
                console.log( res );
                switch(res.tapIndex){
                    case 0:
                        wx.navigateTo({
                            url: '../zujian/zujian',
                            success:res=>{
                                console.log( res );
                            },
                            fail:err=>{
                                console.log( err );
                            }

                        });
                        break;
                    case 1:
                        wx.navigateTo({
                            url: '../jiekou/jiekou',
                            success: res => {
                                console.log(res);
                            },
                            fail: err => {
                                console.log(err);
                            }

                        });
                        break;
                    case 2:
                        wx.navigateTo({
                            url: '../yunkaifa/yunkaifa',
                            success: res => {
                                console.log(res);
                            },
                            fail: err => {
                                console.log(err);
                            }

                        });
                        break;

                }

            }

        })
    }

})