$(document).ready(function() {


	setTimeout(function(){
		$(".LeftPage").css({"animation":"slideInLeft 0.8s","display":"block"});
		$(".LeftBtn").fadeOut();
		},3000);

	$(".LeftBtn").click(function() 
	{
		$(".LeftPage").css({"animation":"slideInLeft 0.8s","display":"block"});
		$(".LeftBtn").fadeOut();
	});

	$(".LeftPage_Close").click(function() 
	{
		$(".LeftPage").css({"animation":"slideOutLeft 0.8s"});
		$(".LeftBtn").fadeIn();
		$(".LeftPage").fadeOut("2s");
	});



	$(".LeftPage_TableBtn").click(function() 
	{
            interactive.init('xiaoneng');   //初始化小能发起

		    var wechat = $("#wechat4").val(); 

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
		        alert("您还没有填写QQ/微信号或输入的QQ/微信不合法！");
		        return;
		    }
		    else {
		        
		        alert("稍后将会有教务处的报考中心老师添加您记得同意老师的添加，发送2018年全国初级注册会计师考试试题到你QQ上给你下载，请注意查收。");
		        interactive.submitMsg(e, 'wechat', wechat, '留言发起'); //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容
		    };
		
	});


	$(".Right_WechatAppCode").mouseenter(function() 
	{
		$(".Right_WechatAppCodePage").css({"animation":"slideInLeft 0.8s","display":"block"});
	});

	
	$(".Right_WechatAppCode").mouseleave(function() 
	{
		$(".Right_WechatAppCodePage").css({"animation":"slideOutLeft 0.8s"});
		$(".Right_WechatAppCodePage").fadeOut();
	});


	$(".Right_WechatCode").mouseenter(function() 
	{
		$(".Right_WechatCodePage").css({"animation":"slideInLeft 0.8s","display":"block"});
	});

	
	$(".Right_WechatCode").mouseleave(function() 
	{
		$(".Right_WechatCodePage").css({"animation":"slideOutLeft 0.8s"});
		$(".Right_WechatCodePage").fadeOut();
	});


	$(".Right_AppCode").mouseenter(function() 
	{
		$(".Right_AppCodePage").css({"animation":"slideInLeft 0.8s","display":"block"});
	});

	
	$(".Right_AppCode").mouseleave(function() 
	{
		$(".Right_AppCodePage").css({"animation":"slideOutLeft 0.8s"});
		$(".Right_AppCodePage").fadeOut();
		
	});




});