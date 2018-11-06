// swiper de 初始化
function InitializeSwiper(obj_swiper_container,slidesPerViewNUM,spaceBetweenNum,obj_prev,obj_next) {
    var obj = new Swiper(obj_swiper_container, {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        slidesPerView:slidesPerViewNUM,
        spaceBetween:spaceBetweenNum,

        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: obj_prev,
            prevEl: obj_next,
        },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })


    return obj;
}

//页面加载动画
window.onload = function (){
    if($(".loadingpage").length > 0){
        $(".loadingpage").fadeOut("slow");
    }

    if($('.J-indexbanner').length > 0){
        var topH = $('.J-indexbanner').height();
        topH = topH - 100;
        $('.J-showPre').css('margin-top',topH + 'px');

    }

}


$(function(){
	var indexbanner = InitializeSwiper('.indexbanner',1,0,'.indexbanner-prev','.indexbanner-next');
	var showper =  InitializeSwiper('.showPre',4,24,'.showPre-prev','.showPre-next');


	
	
});