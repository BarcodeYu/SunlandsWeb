$(document).ready(function() {


// 初始化
	var youer01=0,xiaoxue01=0,chuzhong01=0,gaozhong01=0,sum01=0;//第一题数值
	var youer02=0,xiaoxue02=0,chuzhong02=0,gaozhong02=0,sum02=0;//第二题数值
	var youer03=0,xiaoxue03=0,chuzhong03=0,gaozhong03=0,sum03=0;//第三题数值
	var youer04=0,xiaoxue04=0,chuzhong04=0,gaozhong04=0,sum04=0;//第四题数值
	var youer05=0,xiaoxue05=0,chuzhong05=0,gaozhong05=0,sum05=0;//第五题数值

	var youer_sum=0,xiaoxue_sum=0,chuzhong_sum=0,gaozhong_sum=0;//总数值匹配




// 第一题
	$("#table01_selection01").click(function() 
	{

    	$("#table01_selection01_hide").css({"display":"block","color":"#fff"});
    	$("#table01_selection01").css({"display":"none"});



    	$("#table01_selection01").css({"color":"#fff","background":"#ce0000"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});

		$("#table01_selection02").css({"display":"block","color":"#333"});
		$("#table01_selection03").css({"display":"block","color":"#333"});
		$("#table01_selection04").css({"display":"block","color":"#333"});
		$("#table01_selection05").css({"display":"block","color":"#333"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=2;

		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});


	$("#table01_selection01_hide").click(function() 
	{

    	$("#table01_selection01").css({"display":"block","color":"#333333"});
    	$("#table01_selection01_hide").css({"display":"none"});



    	$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=0;

		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});



	$("#table01_selection02").click(function() 
	{
    	$("#table01_selection02_hide").css({"display":"block","color":"#fff"});
    	$("#table01_selection02").css({"display":"none"});



    	$("#table01_selection02").css({"color":"#fff","background":"#ce0000"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});

		$("#table01_selection01").css({"display":"block","color":"#333"});
		$("#table01_selection03").css({"display":"block","color":"#333"});
		$("#table01_selection04").css({"display":"block","color":"#333"});
		$("#table01_selection05").css({"display":"block","color":"#333"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=2;
		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);

	});

	$("#table01_selection02_hide").click(function() 
	{
    	$("#table01_selection02").css({"display":"block","color":"#333333"});
    	$("#table01_selection02_hide").css({"display":"none"});



    	$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=0;

		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});

	$("#table01_selection03").click(function() 
	{
    	$("#table01_selection03_hide").css({"display":"block","color":"#fff"});
    	$("#table01_selection03").css({"display":"none"});



    	$("#table01_selection03").css({"color":"#fff","background":"#ce0000"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});

		$("#table01_selection01").css({"display":"block","color":"#333"});
		$("#table01_selection02").css({"display":"block","color":"#333"});
		$("#table01_selection04").css({"display":"block","color":"#333"});
		$("#table01_selection05").css({"display":"block","color":"#333"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		xiaoxue01+=2;
		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});


	$("#table01_selection03_hide").click(function() 
	{
    	$("#table01_selection03").css({"display":"block","color":"#333333"});
    	$("#table01_selection03_hide").css({"display":"none"});



    	$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=0;

		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});



	$("#table01_selection04").click(function() 
	{
    	$("#table01_selection04_hide").css({"display":"block","color":"#fff"});
    	$("#table01_selection04").css({"display":"none"});



    	$("#table01_selection04").css({"color":"#fff","background":"#ce0000"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});

		$("#table01_selection01").css({"display":"block","color":"#333"});
		$("#table01_selection02").css({"display":"block","color":"#333"});
		$("#table01_selection03").css({"display":"block","color":"#333"});
		$("#table01_selection05").css({"display":"block","color":"#333"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		xiaoxue01+=3;
		chuzhong01+=2;
		gaozhong01+=1;
		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});



	$("#table01_selection04_hide").click(function() 
	{
    	$("#table01_selection04").css({"display":"block","color":"#333333"});
    	$("#table01_selection04_hide").css({"display":"none"});



    	$("#table01_selection04").css({"color":"#333","background":"#eee"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection05").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=0;

		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});


	$("#table01_selection05").click(function() 
	{
    	$("#table01_selection05_hide").css({"display":"block","color":"#fff"});
    	$("#table01_selection05").css({"display":"none"});



    	$("#table01_selection05").css({"color":"#fff","background":"#ce0000"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});

		$("#table01_selection01").css({"display":"block","color":"#333"});
		$("#table01_selection02").css({"display":"block","color":"#333"});
		$("#table01_selection03").css({"display":"block","color":"#333"});
		$("#table01_selection04").css({"display":"block","color":"#333"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		chuzhong01+=2;
		gaozhong01+=3;
		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});


	$("#table01_selection05_hide").click(function() 
	{
    	$("#table01_selection05").css({"display":"block","color":"#333333"});
    	$("#table01_selection05_hide").css({"display":"none"});



    	$("#table01_selection05").css({"color":"#333","background":"#eee"});
		$("#table01_selection01").css({"color":"#333","background":"#eee"});
		$("#table01_selection02").css({"color":"#333","background":"#eee"});
		$("#table01_selection03").css({"color":"#333","background":"#eee"});
		$("#table01_selection04").css({"color":"#333","background":"#eee"});

		$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		youer01+=0;

		// console.log("幼儿数值:"+youer01);
		// console.log("小学数值:"+xiaoxue01);
		// console.log("初中数值:"+chuzhong01);
		// console.log("高中数值:"+gaozhong01);
	});


// 第二题

	$("#table02_selection01").click(function() 
	{
    	$("#table02_selection01_hide").css({"display":"block","color":"#fff"});
    	$("#table02_selection01").css({"display":"none"});

		youer02+=2;
		xiaoxue02+=2;
		chuzhong02-=1;
		gaozhong02-=2;
		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});



	$("#table02_selection01_hide").click(function() 
	{
    	$("#table02_selection01").css({"display":"block","color":"#333333"});
    	$("#table02_selection01_hide").css({"display":"none"});

		youer02-=2;
		xiaoxue02-=2;
		chuzhong02+=1;
		gaozhong02+=2;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});



	$("#table02_selection02").click(function() 
	{
		$("#table02_selection02_hide").css({"display":"block","color":"#fff"});
		$("#table02_selection02").css({"display":"none"});
		youer02+=1;
		xiaoxue02+=1;
		chuzhong02+=1;
		gaozhong02+=1;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});

	$("#table02_selection02_hide").click(function() 
	{
    	$("#table02_selection02").css({"display":"block","color":"#333333"});
    	$("#table02_selection02_hide").css({"display":"none"});


		youer02-=1;
		xiaoxue02-=1;
		chuzhong02-=1;
		gaozhong02-=1;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});



	$("#table02_selection03").click(function() 
	{
		$("#table02_selection03_hide").css({"display":"block","color":"#fff"});
		$("#table02_selection03").css({"display":"none"});
		youer02-=3;
		xiaoxue02-=2;
		chuzhong02+=1;
		gaozhong02+=2;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});

	$("#table02_selection03_hide").click(function() 
	{
    	$("#table02_selection03").css({"display":"block","color":"#333333"});
    	$("#table02_selection03_hide").css({"display":"none"});


		youer02+=3;
		xiaoxue02+=2;
		chuzhong02-=1;
		gaozhong02-=2;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});


	$("#table02_selection04").click(function() 
	{
		$("#table02_selection04_hide").css({"display":"block","color":"#fff"});
		$("#table02_selection04").css({"display":"none"});

		youer02+=0;
		xiaoxue02+=0;
		chuzhong02+=2;
		gaozhong02+=2;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});

	$("#table02_selection04_hide").click(function() 
	{
    	$("#table02_selection04").css({"display":"block","color":"#333333"});
    	$("#table02_selection04_hide").css({"display":"none"});

    	youer02-=0;
    	xiaoxue02-=0;
    	chuzhong02-=2;
    	gaozhong02-=2;


		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});


	$("#table02_selection05").click(function() 
	{
		$("#table02_selection05_hide").css({"display":"block","color":"#fff"});
		$("#table02_selection05").css({"display":"none"});
		youer02+=0;
		xiaoxue02+=0;
		chuzhong02+=0;
		gaozhong02+=2;

		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});

	$("#table02_selection05_hide").click(function() 
	{
    	$("#table02_selection05").css({"display":"block","color":"#333333"});
    	$("#table02_selection05_hide").css({"display":"none"});

		youer02-=0;
		xiaoxue02-=0;
		chuzhong02-=0;
		gaozhong02-=2;


		// console.log("幼儿数值:"+youer02);
		// console.log("小学数值:"+xiaoxue02);
		// console.log("初中数值:"+chuzhong02);
		// console.log("高中数值:"+gaozhong02);
	});


// 第三题

	$("#table03_selection01").click(function() 
	{
		$("#table03_selection01_hide").css({"display":"block","color":"#fff"});
		$("#table03_selection01").css({"display":"none"});
		youer03+=2;
		xiaoxue03+=2;
		chuzhong03-=1;
		gaozhong03-=2;
		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});



	$("#table03_selection01_hide").click(function() 
	{
    	$("#table03_selection01").css({"display":"block","color":"#333333"});
    	$("#table03_selection01_hide").css({"display":"none"});

		youer03-=2;
		xiaoxue03-=2;
		chuzhong03+=1;
		gaozhong03+=2;


		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});



	$("#table03_selection02").click(function() 
	{
    	$("#table03_selection02_hide").css({"display":"block","color":"#fff"});
    	$("#table03_selection02").css({"display":"none"});
		youer03+=2;
		xiaoxue03+=2;
		chuzhong03+=0;
		gaozhong03-=1;
		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});



	$("#table03_selection02_hide").click(function() 
	{
    	$("#table03_selection02").css({"display":"block","color":"#333333"});
    	$("#table03_selection02_hide").css({"display":"none"});

		youer03-=2;
		xiaoxue03-=2;
		chuzhong03+=0;
		gaozhong03+=1;


		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});


	$("#table03_selection03").click(function() 
	{
    	$("#table03_selection03_hide").css({"display":"block","color":"#fff"});
    	$("#table03_selection03").css({"display":"none"});
		youer03+=0;
		xiaoxue03+=1;
		chuzhong03+=2;
		gaozhong03+=0;
		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});


	$("#table03_selection03_hide").click(function() 
	{
    	$("#table03_selection03").css({"display":"block","color":"#333333"});
    	$("#table03_selection03_hide").css({"display":"none"});

		youer03+=0;
		xiaoxue03-=1;
		chuzhong03-=2;
		gaozhong03+=0;


		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});




	$("#table03_selection04").click(function() 
	{
    	$("#table03_selection04_hide").css({"display":"block","color":"#fff"});
    	$("#table03_selection04").css({"display":"none"});
		youer03+=0;
		xiaoxue03+=0;
		chuzhong03+=2;
		gaozhong03+=2;
		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});


	$("#table03_selection04_hide").click(function() 
	{
    	$("#table03_selection04").css({"display":"block","color":"#333333"});
    	$("#table03_selection04_hide").css({"display":"none"});

		youer03+=0;
		xiaoxue03+=0;
		chuzhong03-=2;
		gaozhong03-=2;


		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});



	$("#table03_selection05").click(function() 
	{
    	$("#table03_selection05_hide").css({"display":"block","color":"#fff"});
    	$("#table03_selection05").css({"display":"none"});
		youer03+=1;
		xiaoxue03+=1;
		chuzhong03+=1;
		gaozhong03+=1;
		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});

	$("#table03_selection05_hide").click(function() 
	{
    	$("#table03_selection05").css({"display":"block","color":"#333333"});
    	$("#table03_selection05_hide").css({"display":"none"});

		youer03-=1;
		xiaoxue03-=1;
		chuzhong03-=1;
		gaozhong03-=1;


		// console.log("幼儿数值:"+youer03);
		// console.log("小学数值:"+xiaoxue03);
		// console.log("初中数值:"+chuzhong03);
		// console.log("高中数值:"+gaozhong03);
	});



// 第四题

	$("#table04_selection01").click(function() 
	{
    	$("#table04_selection01_hide").css({"display":"block","color":"#fff"});
    	$("#table04_selection01").css({"display":"none"});
		youer04+=3;
		xiaoxue04+=3;
		chuzhong04+=0;
		gaozhong04+=0;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

	$("#table04_selection01_hide").click(function() 
	{
    	$("#table04_selection01").css({"display":"block","color":"#333333"});
    	$("#table04_selection01_hide").css({"display":"none"});

		youer04-=3;
		xiaoxue04-=3;
		chuzhong04-=0;
		gaozhong04-=0;


		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});



	$("#table04_selection02").click(function() 
	{
		$("#table04_selection02_hide").css({"display":"block","color":"#fff"});
		$("#table04_selection02").css({"display":"none"});
		youer04+=1;
		xiaoxue04+=1;
		chuzhong04+=2;
		gaozhong04+=3;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});


	$("#table04_selection02_hide").click(function() 
	{
    	$("#table04_selection02").css({"display":"block","color":"#333333"});
    	$("#table04_selection02_hide").css({"display":"none"});

    	youer04-=1;
    	xiaoxue04-=1;
    	chuzhong04-=2;
    	gaozhong04-=3;

		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});



	$("#table04_selection03").click(function() 
	{
		$("#table04_selection03_hide").css({"display":"block","color":"#fff"});
		$("#table04_selection03").css({"display":"none"});
		youer04+=0;
		xiaoxue04+=2;
		chuzhong04+=2;
		gaozhong04+=1;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

	$("#table04_selection03_hide").click(function() 
	{
    	$("#table04_selection03").css({"display":"block","color":"#333333"});
    	$("#table04_selection03_hide").css({"display":"none"});
		youer04-=0;
		xiaoxue04-=2;
		chuzhong04-=2;
		gaozhong04-=1;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

    


	$("#table04_selection04").click(function() 
	{
		$("#table04_selection04_hide").css({"display":"block","color":"#fff"});
		$("#table04_selection04").css({"display":"none"});
		youer04+=2;
		xiaoxue04+=2;
		chuzhong04+=0;
		gaozhong04+=0;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

	$("#table04_selection04_hide").click(function() 
	{
    	$("#table04_selection04").css({"display":"block","color":"#333333"});
    	$("#table04_selection04_hide").css({"display":"none"});
		youer04-=2;
		xiaoxue04-=2;
		chuzhong04-=0;
		gaozhong04-=0;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

        
	$("#table04_selection05").click(function() 
	{
		$("#table04_selection05_hide").css({"display":"block","color":"#fff"});
		$("#table04_selection05").css({"display":"none"});
		youer04+=0;
		xiaoxue04+=0;
		chuzhong04+=2;
		gaozhong04+=2;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

	$("#table04_selection05_hide").click(function() 
	{
    	$("#table04_selection05").css({"display":"block","color":"#333333"});
    	$("#table04_selection05_hide").css({"display":"none"});
		youer04-=0;
		xiaoxue04-=0;
		chuzhong04-=2;
		gaozhong04-=2;
		// console.log("幼儿数值:"+youer04);
		// console.log("小学数值:"+xiaoxue04);
		// console.log("初中数值:"+chuzhong04);
		// console.log("高中数值:"+gaozhong04);
	});

            


// 第五题
	$("#table05_selection01").click(function() 
	{
    	$("#table05_selection01_hide").css({"display":"block","color":"#fff"});
    	$("#table05_selection01").css({"display":"none"});



    	$("#table05_selection01").css({"color":"#fff","background":"#ce0000"});
		$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection03").css({"color":"#333","background":"#eee"});
		$("#table05_selection04").css({"color":"#333","background":"#eee"});

		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});

		$("#table05_selection02").css({"display":"block","color":"#333"});
		$("#table05_selection03").css({"display":"block","color":"#333"});
		$("#table05_selection04").css({"display":"block","color":"#333"});

		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=3;
		xiaoxue05+=0;
		chuzhong05+=0;
		gaozhong05+=0;
		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});


	$("#table05_selection01_hide").click(function() 
	{

    	$("#table05_selection01").css({"display":"block","color":"#333333"});
    	$("#table05_selection01_hide").css({"display":"none"});



    	$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection03").css({"color":"#333","background":"#eee"});
		$("#table05_selection04").css({"color":"#333","background":"#eee"});

		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;

		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});

	$("#table05_selection02").click(function() 
	{
    	$("#table05_selection02_hide").css({"display":"block","color":"#fff"});
    	$("#table05_selection02").css({"display":"none"});



    	$("#table05_selection02").css({"color":"#fff","background":"#ce0000"});
		$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection03").css({"color":"#333","background":"#eee"});
		$("#table05_selection04").css({"color":"#333","background":"#eee"});

		$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});

		$("#table05_selection01").css({"display":"block","color":"#333"});
		$("#table05_selection03").css({"display":"block","color":"#333"});
		$("#table05_selection04").css({"display":"block","color":"#333"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;
		xiaoxue05+=3;
		chuzhong05+=0;
		gaozhong05+=0;
		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});



	$("#table05_selection02_hide").click(function() 
	{

    	$("#table05_selection02").css({"display":"block","color":"#333333"});
    	$("#table05_selection02_hide").css({"display":"none"});



    	$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection03").css({"color":"#333","background":"#eee"});
		$("#table05_selection04").css({"color":"#333","background":"#eee"});

		$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;

		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});

	$("#table05_selection03").click(function() 
	{
    	$("#table05_selection03_hide").css({"display":"block","color":"#fff"});
    	$("#table05_selection03").css({"display":"none"});



    	$("#table05_selection03").css({"color":"#fff","background":"#ce0000"});
		$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection04").css({"color":"#333","background":"#eee"});

		$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});

		$("#table05_selection01").css({"display":"block","color":"#333"});
		$("#table05_selection02").css({"display":"block","color":"#333"});
		$("#table05_selection04").css({"display":"block","color":"#333"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;
		xiaoxue05+=0;
		chuzhong05+=3;
		gaozhong05+=0;
		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});


	$("#table05_selection03_hide").click(function() 
	{

    	$("#table05_selection03").css({"display":"block","color":"#333333"});
    	$("#table05_selection03_hide").css({"display":"none"});



    	$("#table05_selection03").css({"color":"#333","background":"#eee"});
		$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection04").css({"color":"#333","background":"#eee"});

		$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;

		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});

	$("#table05_selection04").click(function() 
	{
    	$("#table05_selection04_hide").css({"display":"block","color":"#fff"});
    	$("#table05_selection04").css({"display":"none"});



    	$("#table05_selection04").css({"color":"#fff","background":"#ce0000"});
		$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection03").css({"color":"#333","background":"#eee"});

		$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});

		$("#table05_selection01").css({"display":"block","color":"#333"});
		$("#table05_selection02").css({"display":"block","color":"#333"});
		$("#table05_selection03").css({"display":"block","color":"#333"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;
		xiaoxue05+=0;
		chuzhong05+=0;
		gaozhong05+=3;
		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});


	$("#table05_selection04_hide").click(function() 
	{

    	$("#table05_selection04").css({"display":"block","color":"#333333"});
    	$("#table05_selection04_hide").css({"display":"none"});



    	$("#table05_selection04").css({"color":"#333","background":"#eee"});
		$("#table05_selection01").css({"color":"#333","background":"#eee"});
		$("#table05_selection02").css({"color":"#333","background":"#eee"});
		$("#table05_selection03").css({"color":"#333","background":"#eee"});

		$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer05+=0;

		// console.log("幼儿数值:"+youer05);
		// console.log("小学数值:"+xiaoxue05);
		// console.log("初中数值:"+chuzhong05);
		// console.log("高中数值:"+gaozhong05);
	});



	$(".table_btn").click(function() 
	{
		// 总数相加
		youer_sum=youer01+youer02+youer03+youer04+youer05;
		xiaoxue_sum=xiaoxue01+xiaoxue02+xiaoxue03+xiaoxue04+xiaoxue05;
		chuzhong_sum=chuzhong01+chuzhong02+chuzhong03+chuzhong04+chuzhong05;
		gaozhong_sum=gaozhong01+gaozhong02+gaozhong03+gaozhong04+gaozhong05;


		// 每个空不为空的
		sum01=youer01+xiaoxue01+chuzhong01+gaozhong01;
		sum02=youer02+xiaoxue02+chuzhong02+gaozhong02;
		sum03=youer03+xiaoxue03+chuzhong03+gaozhong03;
		sum04=youer04+xiaoxue04+chuzhong04+gaozhong04;

		// 得出最大值
		// 
		var MaxSum=new Array();
		MaxSum[0]=youer_sum;
		MaxSum[1]=xiaoxue_sum;
		MaxSum[2]=chuzhong_sum;
		MaxSum[3]=gaozhong_sum;


		var max=Math.max.apply(Math, MaxSum);
		// console.log("最大值为："+max);
		// console.log("最大值数组为："+MaxSum);


		// console.log("幼儿总数值:"+youer_sum);
		// console.log("小学总数值:"+xiaoxue_sum);
		// console.log("初中总数值:"+chuzhong_sum);
		// console.log("高中总数值:"+gaozhong_sum);




		if(sum01==0||sum02==0||sum03==0||sum04==0)
		{
			alert("填完表格后才能测试喔");
		}
		else if (youer_sum==max)
		{
			

			interactive.init('xiaoneng')


			    var wechat = $("#wechat3").val(); 

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
			        
			        alert("你适合幼儿教师喔~");
			        interactive.submitMsg(e, 'wechat', wechat, '留言发起') //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容


			    };
   


		}
		else if (xiaoxue_sum==max)
		{


			 interactive.init('xiaoneng')


			    var wechat = $("#wechat3").val(); 

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
			        
			        alert("你适合小学教师喔~");
			        interactive.submitMsg(e, 'wechat', wechat, '留言发起') //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容


			    };
   

	
		}
		else if (chuzhong_sum==max)
		{



			 interactive.init('xiaoneng')


			    var wechat = $("#wechat3").val(); 

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
			    // 
			    // 



			    if (!nochinese.test(wechat)) {
			        alert("您还没有填写QQ/微信号或输入的QQ/微信不合法！")
			        return;
			    }else {
			        
			        alert("你适合初中教师喔~");
			        interactive.submitMsg(e, 'wechat', wechat, '留言发起') //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容


			    };
  

		}
		else if (gaozhong_sum==max)
		{

			 interactive.init('xiaoneng')


			    var wechat = $("#wechat3").val(); 

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
			        
			        alert("你适合高中教师喔~");
			        interactive.submitMsg(e, 'wechat', wechat, '留言发起') //为id="btn"的元素绑定发起内容”留言发起“，当该元素发起留言时页面框架会上传该内容


			    };
   

		}



// 初始化

    	$("#table01_selection01").css({"color":"#333","background":"#eee","display":"block"});
		$("#table01_selection02").css({"color":"#333","background":"#eee","display":"block"});
		$("#table01_selection03").css({"color":"#333","background":"#eee","display":"block"});
		$("#table01_selection04").css({"color":"#333","background":"#eee","display":"block"});
		$("#table01_selection05").css({"color":"#333","background":"#eee","display":"block"});

    	$("#table02_selection01").css({"color":"#333","background":"#eee","display":"block"});
		$("#table02_selection02").css({"color":"#333","background":"#eee","display":"block"});
		$("#table02_selection03").css({"color":"#333","background":"#eee","display":"block"});
		$("#table02_selection04").css({"color":"#333","background":"#eee","display":"block"});
		$("#table02_selection05").css({"color":"#333","background":"#eee","display":"block"});

    	$("#table03_selection01").css({"color":"#333","background":"#eee","display":"block"});
		$("#table03_selection02").css({"color":"#333","background":"#eee","display":"block"});
		$("#table03_selection03").css({"color":"#333","background":"#eee","display":"block"});
		$("#table03_selection04").css({"color":"#333","background":"#eee","display":"block"});
		$("#table03_selection05").css({"color":"#333","background":"#eee","display":"block"});

    	$("#table04_selection01").css({"color":"#333","background":"#eee","display":"block"});
		$("#table04_selection02").css({"color":"#333","background":"#eee","display":"block"});
		$("#table04_selection03").css({"color":"#333","background":"#eee","display":"block"});
		$("#table04_selection04").css({"color":"#333","background":"#eee","display":"block"});
		$("#table04_selection05").css({"color":"#333","background":"#eee","display":"block"});

    	$("#table05_selection01").css({"color":"#333","background":"#eee","display":"block"});
		$("#table05_selection02").css({"color":"#333","background":"#eee","display":"block"});
		$("#table05_selection03").css({"color":"#333","background":"#eee","display":"block"});
		$("#table05_selection04").css({"color":"#333","background":"#eee","display":"block"});

		// 控制按钮
    	$("#table01_selection01_hide").css({"display":"none"});
		$("#table01_selection02_hide").css({"display":"none"});
		$("#table01_selection03_hide").css({"display":"none"});
		$("#table01_selection04_hide").css({"display":"none"});
		$("#table01_selection05_hide").css({"display":"none"});

    	$("#table02_selection01_hide").css({"display":"none"});
		$("#table02_selection02_hide").css({"display":"none"});
		$("#table02_selection03_hide").css({"display":"none"});
		$("#table02_selection04_hide").css({"display":"none"});
		$("#table02_selection05_hide").css({"display":"none"});

    	$("#table03_selection01_hide").css({"display":"none"});
		$("#table03_selection02_hide").css({"display":"none"});
		$("#table03_selection03_hide").css({"display":"none"});
		$("#table03_selection04_hide").css({"display":"none"});
		$("#table03_selection05_hide").css({"display":"none"});

    	$("#table04_selection01_hide").css({"display":"none"});
		$("#table04_selection02_hide").css({"display":"none"});
		$("#table04_selection03_hide").css({"display":"none"});
		$("#table04_selection04_hide").css({"display":"none"});
		$("#table04_selection05_hide").css({"display":"none"});

    	$("#table05_selection01_hide").css({"display":"none"});
		$("#table05_selection02_hide").css({"display":"none"});
		$("#table05_selection03_hide").css({"display":"none"});
		$("#table05_selection04_hide").css({"display":"none"});

		xiaoxue01=0,chuzhong01=0,gaozhong01=0,youer01=0;
		xiaoxue02=0,chuzhong02=0,gaozhong02=0,youer02=0;
		xiaoxue03=0,chuzhong03=0,gaozhong03=0,youer03=0;
		xiaoxue04=0,chuzhong04=0,gaozhong04=0,youer04=0;
		xiaoxue05=0,chuzhong05=0,gaozhong05=0,youer05=0;
		youer_sum=0,xiaoxue_sum=0,chuzhong_sum=0,gaozhong_sum=0;
		
	});


	



});