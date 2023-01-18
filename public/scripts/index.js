// var lastScrollTop = $(window).scrollTop();
// var okay = true;

// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // scrolling down
//        if (okay && document.documentElement.scrollTop < $(".frontface").height()) {
//            okay = false; 
           
//            $("html, body").animate({
//                 scrollTop: $(".frontface").height()
//             });

//             setTimeout(function () {okay = true;}, 1000);
//        }
//    } else {
//        // scrolling up
//       if (okay && document.documentElement.scrollTop < $(".frontface").height() - 300) {
//            okay = false; 
           
//            $("html, body").animate({
//                 scrollTop: 0
//             });

//             setTimeout(function () {okay = true;}, 1000);
//        }
//    }
//    lastScrollTop = st;
// });