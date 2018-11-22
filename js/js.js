// swiper de 初始化
function InitializeSwiper(obj_swiper_container, slidesPerViewNUM, spaceBetweenNum, obj_prev, obj_next) {
    var obj = new Swiper(obj_swiper_container, {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        slidesPerView: slidesPerViewNUM,
        spaceBetween: spaceBetweenNum,

        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: obj_next,
            prevEl: obj_prev,
        },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })


    return obj;
}

// 加载动画
function setAnimation(element){

    var eTop = $(element).offset().top;//橙色容器距离整个页面顶部的距离
    var wTop = $(window).height();//绿色框可视区域的高度
    window.onresize = function(){
        var wTop = $(window).height();//缩放窗口这个高度会改变，需要再取得
    }

   
    $(window).scroll(function(){


        var dTop = $(document).scrollTop();  //绿色框可视区域上面到黑色页面顶部的距离，会实时改变
       
        var atop = parseInt(dTop) + parseInt(wTop) + 200;
       
        if(atop > eTop){

            // if($(element).is(":hidden")){
                 
            // }

            // if(!$(element).hasClass('fadeInUp')){
            //      $(element).addClass('fadeInUp');
            // }

             $(element).stop(true,true).addClass(' fadeInUp');



           

          

           
        }else{

            // $(element).removeClass('fadeInUp');
            
        }
    });


}


//页面加载动画
window.onload = function() {
    

    if ($(".loadingpage").length > 0) {
        $(".loadingpage").fadeOut("slow");
    }

    if ($('.J-indexbanner').length > 0) {

        var win_w = $(window).width();
        var topH = $('.J-indexbanner').height();
         if (win_w > 640) {          
            topH = 0.2 * topH;
            $('.J-showPre').css('margin-top', -topH + 'px');
        }

        $(window).resize(function() {
            win_w = $(window).width();
            topH = $('.J-indexbanner').height();
          
            if (win_w > 640) {
                topH = 0.2 * topH;
                $('.J-showPre').css('margin-top', -topH + 'px');
            }
        })

    }

}


$(function() {
    if ($('.fancy').length > 0) {
        $('.fancy').fancybox();
    }




    var shownum1 = 4;
    var shownum2 = 5;
    var win_w = $(window).width();


    function changeWindowWidth() {
        var win_w = $(window).width();
        if(win_w > 1280){
            shownum1 = 4;
            shownum2 = 5;
        }
        if (win_w < 1280) {
            shownum1 = 3;
            shownum2 = 3;
        }

        if (win_w < 768) {
            shownum1 = 2;
            shownum2 = 2;
        }

        if (win_w < 640) {
            shownum1 = 1;
            shownum2 = 1;
        }



    }
    changeWindowWidth();

   

   

   




    var showper = InitializeSwiper('.showPre', shownum1, 24, '.showPre-prev', '.showPre-next');
    var swiperGallery = InitializeSwiper('.Gallerybox-swiper', shownum2, 24, '.Gallerybox-prev', '.Gallerybox-next');

     $(window).resize(function() {
          changeWindowWidth();
          console.log('shownum1:'+ shownum1+ 'shownum2:'+ shownum2);
          showper = InitializeSwiper('.showPre', shownum1, 24, '.showPre-prev', '.showPre-next');
          swiperGallery = InitializeSwiper('.Gallerybox-swiper', shownum2, 24, '.Gallerybox-prev', '.Gallerybox-next');
    })

   

  

    var indexbanner = InitializeSwiper('.indexbanner', 1, 0, '.indexbanner-prev', '.indexbanner-next');


    $('.J-mobile-nav').on('click',function(e){
        e.stopPropagation(); 
        $('.J-mobile-box').slideToggle();
    });

    $('body').on('click',function(){
        $('.J-mobile-box').slideUp();
    });
  
    $('.animated').each(function(index,item){
        setAnimation(item);
    });




});


