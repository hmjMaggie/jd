
//作业1、放大镜效果-------------------------------------------------------
$('.pic').mousemove(function(ev){
	var _this=$(this);
	
	var l=ev.pageX-_this.offset().left-$('.zoom').width()/2;
	var t=ev.pageY-_this.offset().top-$('.zoom').height()/2;
	
	//限制不要出框
	if(l<0){l=0};
	if(t<0){t=0};
	
	var maxL=_this.width()-$('.zoom').width();
	var maxT=_this.height()-$('.zoom').height();
	
	if(l>maxL){l=maxL;}
	if(t>maxT){t=maxT;}
	
	$('.zoom').css({"left":l,"top":t}).show();
	$('.pic_max').show();
	$('.pic_max img').css({"left":-l*3,"top":-t*3})	
})
$('.pic').mouseleave(function(){
	$('.zoom,.pic_max').hide();
})

//作业2、下面的小图悬浮和点击------------------------------------------------
//鼠标悬浮事件
$('.btn_list li').mouseenter(function(){
	var _this=$(this)
	var num=$(this).index()-1;
	
	//因为wrap只是隐藏，并不是remove，查找的时候会从第一个wrap里面查找，所以一定要先找到当前的wrap
	var pic_now=_this.parent().siblings('.pic').children('li');
	var max_now=_this.parent().siblings('.pic_max').children();
	
	_this.addClass('ac').siblings().removeClass('ac');
	
	//对应的的左边图片
	pic_now.hide();
	pic_now.eq(num).show();	
	
	//对应的放大图片
	max_now.hide();
	max_now.eq(num).show();	
})

//作业3、点击事件，切换样式，单选------------------------------------------------------
$('.color_size li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac');
	var index=$(this).index();
	$('.img_tab .wrap').eq(index).show().siblings('.wrap').hide();
})
$('.color_size li').mouseenter(function(){
	$(this).addClass('ac').siblings().removeClass('ac');
})

//作业4、数量加减,分期里面的价钱做出相应的变化--------------------------------------------------------
var count=1;
var aSpan=$('.note span');
//先获取到默认的值
var txt1,txt2,txt3,txt4;
var arr=[txt1,txt2,txt3,txt4];
for(var i=0;i<aSpan.length;i++){
	arr[i]=aSpan[i].innerHTML;
}
$('.addBtn').click(function(){
	count++;
	$('#input').val(count);
	//判断按钮打开
	if(count>1){
		$('.subBtn').prop("disabled",false);
	}
	//只取两位小数
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].innerHTML=(arr[i]*count).toFixed(2);
	}
})
$('.subBtn').click(function(){
	count--;
	if(count<2){
		$('.subBtn').prop("disabled",true);
	}
	$('#input').val(count);
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].innerHTML=(arr[i]*count).toFixed(2);
	}
})

//添加购物车
$('.btn').click(function(){
	alert("添加成功")
})

//作业5、下面的选项卡--------------------------------------------------------
$('.title li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac');
	var index=$(this).index();
	$('.wrap .section').eq(index).show().siblings().hide();
})
