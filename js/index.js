
//作业1、轮播图------------------------------------------------------------------------------
var num=0;
var timer;
//切换图片和按钮
function change(n){
	//切换按钮和图片
	$('.btn_list i').removeClass('ac');
	$('.btn_list i:eq('+n+')').addClass('ac');
	
	$('.img_list li').hide();
	$('.img_list li:eq('+n+')').show().css("opacity",0);
	$('.img_list li:eq('+n+')').animate({"opacity":1},1000);
}

//开定时器
function autoRun(){
	timer=setInterval(function(){
		num++;		
		if(num==$('.img_list').children().length){
			num=0;
		}
		change(num);
	},2000)
}
autoRun();

//点击按钮事件
$('.btn_list i').click(function(){
	num=$(this).index();
	change(num);
})

//点击上一页和下一页
$('.pre_btn').click(function(){
	num=$('.btn_list .ac').index();
	num--;
	change(num);
	return false;   //阻止全选文字
})
$('.next_btn').click(function(){
	num=$('.btn_list .ac').index();
	num++;
	if(num>$('.img_list li').length-1){num=0};    //判断不要溢出，因为编号是8的时候，后面没图片了，进入下一个循环
	change(num);
	return false;
})

//鼠标悬浮事件
$('.banner').mouseenter(function(){
	clearInterval(timer);
	$('.pre_btn,.next_btn').show();
})
$('.banner').mouseleave(function(){
	autoRun();
	$('.pre_btn,.next_btn').hide();
})

	
//作业2、左边的popup选项卡悬浮----------------------------------------------------------------
var aLi=$('.nav_list li');
var count;
aLi.hover(
	function(){
		count=$(this).index();
		var id=$(this).attr('data-index');
		$(this).addClass('ac').siblings().removeClass('ac');
		$('.popup').show();
		$('.section:eq('+id+')').show().siblings().hide();
	},
	function(){
		$('.popup').hide();
		aLi.removeClass('ac');
	} 
)
$('.popup').hover(
	function(){
		$(this).show();
		aLi.eq(count).addClass('ac');
	},
	function(){
		$(this).hide();
		aLi.removeClass('ac');
	}
)

//作业3、下面的选项卡-------------------------------------------------------------------------
var ss;
$('.title').each(function(index,items){
	var aLi=$('.title').eq(index).find('li');
	var r_inner=$('.title').eq(index).siblings('.main').find('.r_inner');
	
	aLi.mouseenter(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		ss=$(this).index();
		
		r_inner.hide();
		r_inner.eq(ss).show();	
	})	
})

//作业4、左边的滚动楼层------------------------------------------------------------------------
function floor(){
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		//判断滚动条距离
		scrollTop>1500 ? $('.asideList').show() : $('.asideList').hide();
		//滚动对应，算出感应区
		$('.floor').each(function(){ 		
			var t=$(this).offset().top-$(window).scrollTop();						
			var index=$('.floor').index($(this));
			if(t<280){
				$('.asideList li').removeClass('ac').eq(index).addClass('ac');							
			}			
		})	
	})
   	//点击楼层，出来对应的楼层
   	$('.asideList li').click(function(){
   		var index=$(this).index();  		  		
   		var scroll_top=$('.floor').eq(index).offset().top;
   		$('body,html').animate({"scrollTop":scroll_top},200);
   	})
   	//回到顶部
	$('.asideList span').click(function(){
		var scrollTop=$(window).scrollTop();
		$('body,html').animate({"scrollTop":0},200);
	})
}
floor();


