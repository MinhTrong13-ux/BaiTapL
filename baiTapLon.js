window.onload=function()
{
    let images = document.querySelectorAll(".thumb img");
    let btbuy = document.getElementById('btbuy')
    let buttons = document.querySelectorAll(".colorCar > button");
    let main2= document.querySelectorAll(".car img");
    let img =[0,1,2,3,4];
    //Doi hinh
    for(let im of images)
    im.onclick=function()
    {
        let pos = this.getAttribute("rel");
        let main= document.getElementById(`main-${pos}`);
        main.src = this.src;
        for(let b of buttons)
            b.onclick=function()
        {
            let label = this.getAttribute("rel");
             main.src=`images/${label}1.jpg`;
            for(let i = 0;i<img.length;i++)
                images[i].src=`images/${label}${i+1}.jpg`;
        };
    };
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
        // xóa hieu ung
        let tmps = document.querySelectorAll(".car");
        for (let t of tmps)
            t.classList.remove('doiMauBorder');

        // gan hieu ung khi tim thay
        let txt = this.value;

        let products = document.querySelectorAll(".car>P ");
        for (let p of products)
            if (p.innerText.includes(txt) === true)
            p.parentElement.classList.add('doiMauBorder');
    }
    //mau dat coc
    
}
$(document).ready(function() {
    // co dinh menu
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
 //slider
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
