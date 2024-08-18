window.onload=function()
{
    let main= document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for(let im of images)
    im.onclick=function()
    {
        main.src = this.src;
    }
     let menu = document.getElementById('menu');
    window.onscroll = function(){
        if(menu.scrollY >= menu.offsetTop){
            menu.style.position = 'fixed';
            menu.style.top=0;
        }else{
            menu.style.position = 'initial';
        }
    }
}
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) { 
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
})
    $(document).ready(function()
{
    $('.car').hover(function()
{
    $('#btbuy').fadeIn(300)},
    function()
    { 
        $('#btbuy').fadeOut(300)
    });

    let index = 0;

    setInterval(function(){
        index++;
        if(index>$(".slider img").lenght)
            index = 1;
        
        $(".slider img").hide();
        $(`.slider img:nth-child(${index})`).show();
    },1000);
})
