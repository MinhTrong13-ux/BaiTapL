window.onload=function()
{
    let main= document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    let menu = document.getElementsByClassName("menu");
    for(let im of images)
    im.onclick=function()
    {
        main.src = this.src;
    }
// window.onscroll = function()
// {
// if(this.scrolly >= menu.offsetTop){
//     menu.style.position = 'fixed';
//     menu.style.top = 0;
//     menu.style.left = 0;
//     menu.style.right = 0;
//     menu.style.zIndex=999;
// }
// }
}
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) { 
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
})
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
//     $(document).ready(function()
// {
//     $('.car').hover(function()
// {
//     $('#btbuy').fadeIn(300)},
//     function()
//     { 
//         $('#btbuy').fadeOut(300)}
// );
// });
