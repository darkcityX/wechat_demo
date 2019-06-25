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
    onLoad: options=>{
        // console.log( app.appData );
        wx.getStorage({
            key: 'userInfo',
            success: res=>{
                console.log( "--- 进入success ---" );
                console.log( res );
                if( res.data ){
                    /* 1、如果有用户信息缓存，全局 */

                }
                // if (app.appData.userInfo == null || locatStrong == null) {
                //     wx.redirectTo({
                //         url: '../login/login',
                //     });
                // } else {
                //     // console.log( app );
                //     console.log("有缓存-- - --也有app");
                //     this.setData({
                //         uname: app.appData.userInfo.uname
                //     });

                // }

            },
            fail: err=>{
                console.log("--- 进入error ----");
                console.log( err );
            }
        })
    },
    // onLoad: function (options) {
    //     console.log("111111111111111111111111");
    //     let that = this;
    //     wx.getStorage({
    //         key: 'userInfo',
    //         success(res) {
    //             console.log("获取缓存信息");
    //             let locatStrong = res.data;
    //             console.log('1111---------:' + app.appData.userInfo == null);
    //             if (app.appData.userInfo == null || locatStrong == null ) {
    //                 wx.redirectTo({
    //                     url: '../login/login',
    //                 });
    //             } else {
    //                 // console.log( app );
    //                 console.log("有缓存-- - --也有app");
    //                 that.setData({
    //                     uname: app.appData.userInfo.uname
    //                 });

    //             }
    //         },
    //         fail:err=>{
    //             console.log(err);
    //         }
    //     });
    // },

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
                        brea
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
                        brea
                        break;

                }

            }

        })
    }

})