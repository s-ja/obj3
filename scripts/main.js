$(function(){
    menu()
})

function menu(){
    // $(".gnb > li").mouseenter(function(){
    //     // if($(".lnb").hasClass("d_none"))$(".lnb").removeClass("d_none")
    //     var _this = $(this);
    //     _this.children(".lnb").slideDown()
    // });
    // $(".gnb > li").mouseleave(function(){
    //     if(!$(".lnb").hasClass("d_none"))$(".lnb").addClass("d_none")
    // });
    var GNB = $(".gnb > li");
    GNB.on({
        mouseenter:function(){
            var _this = $(this);
             _this.children(".lnb").stop().slideDown("fast")
        },
        mouseleave:function(){
            var _this = $(this);
            _this.children(".lnb").stop().slideUp("fast")
        }
    })
}