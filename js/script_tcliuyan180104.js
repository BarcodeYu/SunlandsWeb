/* 
* @Author: Shuyu Chen
* @Date:   2018-01-04 19:48:20
* @Last Modified by:   Shuyu Chen
* @Last Modified time: 2018-01-08 14:37:30
*/

$(".special").click(function () {
    $(".tanchuan_180104_bg").fadeIn();
    $(".tanchuan_180104").fadeIn();
});
$(".tanchuan_180104_close").click(function () {
    $(".tanchuan_180104").fadeOut();
    $(".tanchuan_180104_bg").fadeOut();
});

$('#btn').click(function(e) { 
    var wechat = $("#wechat").val(); 

    // var wxreg= /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/; 
    // 中文正则  
    var nochinese= /^[0-9a-zA_Z]+$/;   
    
    // 判断微信为空
    
    // if (wechat == '') {
    //     alert("您还没有填写微信资料或输入的微信不合法！");
    //     return ;
    // } 
    // if (wechat.length == 0) {
    //     alert("您还没有填写微信资料或输入的微信不合法！");
    //     return ;
    // } 
    // if (!wxreg.test(wechat)) {
    //     alert("您还没有填写QQ/微信号或输入的QQ/微信不合法！")
    //     return;
    // }
    if (!nochinese.test(wechat)) {
        alert("您还没有填写QQ/微信号或输入的QQ/微信不合法！")
        return;
    }else {
        
        alert("稍后将会有教务处的报考中心老师添加您记得同意老师的添加，发送2018年全国初级注册会计师考试试题到你QQ上给你下载，请注意查收。");
        interactive.submitMsg(e, 'wechat', wechat, '留言发起') //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容
    };
});
$('#but2').click(function(e) { 
    var wechat = $("#wechat2").val(); 

    // var wxreg= /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/; 
    // 中文正则  
    var nochinese= /^[0-9a-zA_Z]+$/;   
    
    // 判断微信为空
    
    // if (wechat == '') {
    //     alert("您还没有填写微信资料或输入的微信不合法！");
    //     return ;
    // } 
    // if (wechat.length == 0) {
    //     alert("您还没有填写微信资料或输入的微信不合法！");
    //     return ;
    // } 
    // if (!wxreg.test(wechat)) {
    //     alert("您还没有填写QQ/微信号或输入的QQ/微信不合法！")
    //     return;
    // }
    if (!nochinese.test(wechat)) {
        alert("您还没有填写QQ/微信号或输入的QQ/微信不合法！")
        return;
    }else {
        
        alert("稍后将会有教务处的报考中心老师添加您记得同意老师的添加，发送优惠券给您，请注意查收。");
        interactive.submitMsg(e, 'wechat', wechat, '留言发起') //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容
    };
});    