// condign indicator
$(document).ready(() => {
    $(window).scroll(() => {
        let docheight = $(document).height();
        let winheight = $(window).height();
        let viewport = docheight = winheight;
        let scrollpos = $(window).scrollTop();
        let scrollpersent = (scrollpos / viewport) * 50;
        console.log(scrollpersent);
        $(".indicator").css("width", scrollpersent + "%");
    });
});