
$(document).ready(function(){
	//登录的参数
	var login='404';
	//设备宽度
	var deviceW = window.innerWidth;
	//设备高度
	var deviceH = window.innerHeight;
	//定义用户数据（头像和昵称）
	//get the id wrap
	var wrap = $('#wrap');
	//get the id headImg
	var headImg = $('#headImg');
	//获取name 设置用户昵称
	var setName = $('#setname');
	//获取内容 设置内容框大小
	// var content = document.getElementById('content');
	var content = $('.content');
	//获取用于设置背景图的div
	var contentBg = $('#contentBg');
	//获取多行文本框
	var setText = $('#settext');
	//获取来参加的人数
	var visitNum = $('#visitNum');
	//获取参与者div
	var visitPut = $('#visitPut');
	//获取参与者div下的头像父容器
	var vitPic = $('#vitPic');
	//我要去按钮
	var goButton = $('#wantgo');
	//获取留言区域的内容
	var sayArea = $('#sayArea');
	//遮罩层
	var shade = $('#shade');
	var visit = {
		imgSrc: 'url(images/headpic.jpg)',
		imgSrc: 'url(images/headpic.jpg)',
		imgSrc: 'url(images/headpic.jpg)'
	}
	var userData = [{
		//替换为后端数据
		imgSrc: 'url(images/headpic.jpg)',
		name: 'Willxiaoda',
		inviteMess:'      这是一个邀请函的内容信息我就随便写一写到时后台数据可替换到这里然后我说些什么呢没什么说了就是想凑一点字数看看那个滚动条有没有起作用不知道有没起作用哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或,这是一个邀请函的内容信息我就随便写一写到时后台数据可替换到这里然后我说些什么呢没什么说了就是想凑一点字数看看那个滚动条有没有起作用不知道有没起作用哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或,这是一个邀请函的内容信息我就随便写一写到时后台数据可替换到这里然后我说些什么呢没什么说了就是想凑一点字数看看那个滚动条有没有起作用不知道有没起作用哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或',
		//选择的场景
		textBg:'url(images/scene/1.png)',
		visitor: [
			'images/visitor/headpic1.jpg',
			'images/visitor/headpic2.jpg',
			'images/visitor/headpic3.jpg',
			'images/visitor/headpic4.jpg',
			'images/visitor/headpic5.jpg',
			'images/visitor/headpic6.jpg',
			'images/visitor/headpic7.jpg',
			'images/visitor/headpic8.jpg',
			'images/visitor/headpic9.jpg',
			'images/visitor/headpic10.jpg',
			'images/visitor/headpic11.jpg',
			'images/visitor/headpic12.jpg',
			'images/visitor/headpic13.jpg',
			'images/visitor/headpic14.jpg',
			'images/visitor/headpic15.jpg',
			'images/visitor/headpic16.jpg',
			'images/visitor/headpic17.jpg',
			'images/visitor/headpic18.jpg',
			'images/visitor/headpic19.jpg'
		],
		//留言的人的头像
		sayPic : [
			'images/sayImg/headpic1.jpg',
			'images/sayImg/headpic2.jpg',
			'images/sayImg/headpic3.jpg',
			'images/sayImg/headpic3.jpg'
		],
		// 留言人的昵称
		sayName : [
			'风雨雾凇dasfaol;sjtgl;akjglhjlghs',
			'sufeng',
			'homtls',
			'Willxiaoda'
		],
		//说的话
		sayWord : [
			'留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试',
			'留言测试测试留言测试测试留言测试测试',
			'留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试',
			'留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试留言测试测试'
		],
		//获得赞数
		sayLove : [
			1,
			3,
			0,
			4
		]

	}];
	// 我要去函数 login是一个判断登录的参数 isJoin判断是否已参加
	var wantgo = function(isJoin){
		//用户还没参加
		if(!isJoin){
			//加载刷新参与者头像
			isJoin = true;
			for(var i = 0;i<userData[0].visitor.length;i++){
				vitPic.append('<img src="' + userData[0].visitor[i] + '"width="' + ((deviceW-(deviceW/6)) /8) + '" />');
			}
		}else{
			//遮罩层设置
			setShade();
			//弹出已参加过的框
			//遮罩层可见
			shade.css({
				'display' : 'block',
			});
			//选择登录方式可见
			$('#hadLogin').css({
				'display' : 'block',
			});
		}
	}

	//弹出登录函数
	var toLogin = function(){
		//调用遮罩层设置函数
		setShade();
		//遮罩层可见
		shade.css({
			'display' : 'block',
		});
		//选择登录方式可见
		$('#choice').css({
			'display' : 'block',
		});
	}

	//设置遮罩层
	var setShade = function(){
		$('#shade').css({
			'width' : deviceW + 'px',
			'height' : $(document.body).height() + 'px',
			// 'backgroundColor' : '#aaaaaa',
		});
		$('#shadeCon').css({
			// 长宽比2.13
			'width' : (deviceW-(deviceW/6)) + 'px',
			'height' : ((deviceW-(deviceW/6))/2.13) + 'px',
			'marginLeft' : (-(deviceW-(deviceW/6))/2) + 'px',
			'marginTop' : (-((deviceW-(deviceW/6))/2.13)/2) + 'px'
		});
	}
	//加载留言函数
	var loadSay = function(){
		for(var i = 0;i<userData[0].sayWord.length;i++){
			// 添加模板请参考相应html处的注释内容
			sayArea.append('<li><div class="liTitle"><div class="titleLeft"></div><div class="titleRight"></div></div><div class="liCon"></div></li>');
			$('.titleLeft').each(function(i){
				$(this).html('<img src="' + userData[0].sayPic[i] + '"width="' + ((deviceW-(deviceW/6)) /8) + '" /><span>' + userData[0].sayName[i]+'</span>');
			});
			$('.titleRight').each(function(i){
				$(this).html('<img src="images/loveHblack.png"  /><span>' + userData[0].sayLove[i]+'</span>');
			});
			$('.liCon').each(function(i){
				$(this).html('<p>' + userData[0].sayWord[i] + '</p>');
			});
		}
	}
	//样式设置自执行匿名函数
	!function(){
		//设置起始参考单位，为使用rem单位做铺垫
		document.documentElement.style.fontSize = (deviceW/10) + 'px';
		//设置背景图片信息
		wrap.css({
			'width' : deviceW + 'px',
			'background' : 'url(images/bg.png)',
			'background-size' : deviceW + 'px'
		});
		//这里设置头像图片和昵称
		headImg.css({
			//set the id which call info style(value == 屏幕宽度的1/4)
			'width' : (deviceW/4) + 'px',
			'height' : (deviceW/4) + 'px',
			'marginTop' : (deviceH/20) + 'px',
			//这里设置头像图片和昵称
			'background' : userData[0].imgSrc,
			//头像大小(headImg的大小)
			'backgroundSize' : (deviceW/4) + 'px'
		});
		//设置用户昵称
		setName.text(userData[0].name);
		//设置conternt的css属性 (宽高比为0.8)
		for(var i=0;i<content.length;i++){
			content.eq(i).css({
				'width' : (deviceW-(deviceW/6)) + 'px',
				'height' : ((deviceW-(deviceW/12))/0.8) + 'px',
				'marginTop' : (deviceW/12) + 'px',
			});
		}
		contentBg.css({
			'background' : userData[0].textBg,
			//设置背景图片大小
			'backgroundSize' : (deviceW-(deviceW/6)),
			'backgroundRepeat' : 'no-repeat',
			'backgroundPosition' : 'bottom'
		});
		setText.css({
			//设置高宽 留出边框
			'width' : (deviceW-(deviceW/4)) + 'px',
			'height' : ((deviceW-(deviceW/8))/0.8) + 'px',
		});
		//设置邀请函里面的内容
		setText.text(userData[0].inviteMess);
		//设置visitNum
		visitNum.html('<em>' + userData[0].visitor.length + '</em>人');
		//参与者div 长宽比1.67
		visitPut.css({
			'width' : (deviceW-(deviceW/6)) + 'px',
			'height' : ((deviceW-(deviceW/6))/1.67) + 'px',
			'background' : 'url(images/visitPut.png)',
			'backgroundSize' : (deviceW-(deviceW/6)) + 'px'
		});
		//设置参与者头像容器宽高
		vitPic.css({
			'height' : ((deviceW-(deviceW/6))/2.3) + 'px',
		});
		// 加载初始页面时参与者头像
		for(var i = 0;i<userData[0].visitor.length;i++){
			vitPic.append('<img src="' + userData[0].visitor[i] + '"width="' + ((deviceW-(deviceW/6)) /8) + '" />');
		}
		//我要去的样式
		goButton.css({
			//长宽比5.733
			'width' : (deviceW-(deviceW/2.5)) + 'px',
			'height' : ((deviceW-(deviceW/5))/5.733) + 'px',
			'lineHeight' : ((deviceW-(deviceW/5))/5.733) + 'px'
		});
		//留言板的样式 宽高比0.6
		$('#sayCon').css({
			'width' : (deviceW-(deviceW/6)) + 'px',
			// 'height' : ((deviceW-(deviceW/12))/0.5) + 'px'
		});
		//留言区域
		sayArea.css({
			// 'width' : (deviceW-(deviceW/6)) + 'px',
			'height' : ((deviceW-(deviceW/12))/0.85) + 'px'
		});
		// $('.titleLeft img').css({
		// 	'width' : ((deviceW-(deviceW/6)) /8) + 'px',
		// });
		console.log($(document.body).height());
		//初始化先加载留言
		loadSay();

	}();
	// 事件绑定
	goButton.bind('click',function(){
		//login为判断是否登录的函数
		if(login == '200'){
			//isjoin判断是否参加
			// wantgo(isJoin);
			wantgo(false);
		}else{
			//引导登录
			toLogin();
		}
	});
	//登录框关闭遮罩层
	$('#close').bind('click',function(){
		//选择方式不可见
		$('#choice').css('display','none');
		//已登录不可见
		$('#hadLogin').css('display','none');
		//遮罩层不可见
		shade.css('display','none');
	});
	//留言提交事件
	$('#sub').bind('click',function(){
		if($('#input textarea').val() == ""){
			alert("内容不能为空");
			return;
		}else{
			//刷新载入留言
			loadSay();
			alert('留言成功');
		}
	});
	//心形点击
	//获取心形
	$('.titleRight img').each(function(index){
		$(this).toggle(function(){
			$(this).attr('src','images/loveHred.png');
			$(this).next('span').text(++userData[0].sayLove[index]) ;
		},function(){
			$(this).attr('src','images/loveHblack.png');
			if(userData[0].sayLove[index]>=0){
				$(this).next('span').text(--userData[0].sayLove[index]) ;
			}
		});
	});


});
