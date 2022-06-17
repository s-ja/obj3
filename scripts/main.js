$(function(){
    menu()
    shop()
})

function menu(){
    // $(".gnb > li").mouseenter(function(){
    //     // if($(".lnb").hasClass("d_none"))$(".lnb").removeClass("d_none")
    //     var _this = $(this);
    //     _this.children(".lnb").slideDown()
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


function shop(){
    // if(!$(".store_view_wrap").children().hasClass("on")){
    //     $(".store_view").removeClass("on")
    // };
    $(".store_list > li").mouseenter(function(){
        var store_list_idx = $(this).index()
        console.log(store_list_idx);
        $(".store_view").eq(store_list_idx).addClass("on")
    });
    $(".store_list > li").mouseleave(function(){
        var store_list_idx = $(this).index()
        console.log(store_list_idx);
        $(".store_view").eq(store_list_idx).removeClass("on")
    });
}