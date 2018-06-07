$(document).ready(function(){
	//设置的图片下标
	var picIndex = 1;
	//设备宽度
	var deviceW = window.innerWidth;
	//设备高度
	var deviceH = window.innerHeight;
	//先获得场景选择的容器
	var areaChoice = $('#areaChoice');
	//textArea内容
	var setText = $('#settext');
	//清空textArea内容
	setText.text('');
	//自执行匿名函数  场景框设置
	!function(){
		//长宽比3.536
		console.log((deviceW-(deviceW/6)));
		areaChoice.css({
			'width' : (deviceW-(deviceW/6)) + 'px',
			'height' : ((deviceW-(deviceW/6))/3.2) + 'px'
		});
		//长宽比5.21
		$('#finish').css({
			'width' : (deviceW-(deviceW/6)) + 'px',
			'height' : ((deviceW-(deviceW/6))/5.21) + 'px'
		});
	}();
	$('.place').each(function(index){
		$(this).click(function(){
			console.log('testing');
			$(this).css('backgroundColor','#00a0e9').siblings().css('backgroundColor','');
			//更换背景
			$('#contentBg').css({
				'background' : 'url(images/scene/' + (index+1) + '.png)',
				//设置背景图片大小
				'backgroundSize' : (deviceW-(deviceW/6)),
				'backgroundRepeat' : 'no-repeat',
				'backgroundPosition' : 'bottom'
			});
			//记录图片下标
			picIndex = index+1;
		});
	});
	// 完成按钮
	$('#complete').click(function(){
		//获取textarea提交到后台
		console.log(setText.val());
		//提交图片下标
		console.log(picIndex);
		alert('制作完成!');
		window.location.href = 'index.html';

	});
	//预览按钮
	$('#preview').toggle(function(){
		setText.text(setText.val());
		areaChoice.css('display','none');
		//他妈的jq toggle方法点击后元素竟然会隐藏
		// $(this).css('display','block');
		$(this).find('p').text('重做');
		$('#finish').css('marginTop','0.5rem');
		setText.attr('readonly','readonly');
	},function(){
		areaChoice.css('display','-webkit-box');
		// $(this).css('display','block');
		$(this).find('p').text('预览效果');
		setText.removeAttr('readonly');
	});
});