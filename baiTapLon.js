window.onload=function()
{
    let main= document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for(let im of images)
    im.onclick=function()
    {
        main.src = this.src;
    }
    let nav = document.querySelector("ul.menu")
    window.onscroll = function() {
        if (this.scrollY >= 50) {
            nav.style.position = 'fixed';
            nav.style.top = 0;
            nav.style.left = 0;
            nav.style.right = 0;
            nav.style.zIndex = 999;
        } else {
            nav.style.position = 'initial';
        }
            
    }
    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        // xóa border
        let tmps = document.querySelectorAll(".car");
        for (let t of tmps)
            t.style.border= "";

        // gắn border product tìm thấy
        let txt = this.value;

        let products = document.querySelectorAll(".car>P ");
        for (let p of products)
            if (p.innerText.includes(txt) === true)
                p.parentElement.style.border = "2px solid red";
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

    $(".slider > div:not(:first-child)").hide();
    let current = 1;
    setInterval(function() {
        current++;
        if (current === $(".slider div").length + 1)
            current = 1;
        $(".slider > div").fadeOut(200, function() {
            $(`.slider > div:nth-child(${current})`).fadeIn(1700);
        });
        
    },4000);
})
