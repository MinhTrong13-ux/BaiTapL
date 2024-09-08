window.onload=function()
{
    let images = document.querySelectorAll(".thumb img");
    let buttons = document.querySelectorAll(".colorCar > button");
    //Doi hinh
    for(let im of images)
    im.onclick=function()
    {
        let pos = this.getAttribute("rel");
        let main= document.getElementById(`main-${pos}`);
        main.src = this.src;
    };
    for(let b of buttons)
        b.onclick=function()
    {
        let pos2 =this.getAttribute("rel");
        let main2 = document.getElementById(`main-${pos2}`);
        let label = this.getAttribute("name");
        let img2=document.querySelectorAll(`.img-${pos2}`);
        main2.src=`images/${label}1.jpg`;
        for(let i = 0;i<img2.length;i++)
            img2[i].src=`images/${label}${i+1}.jpg`;
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
            
    };
    
    let search = document.querySelector("input[type=search]");
    search.onchange = function(){
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
    };
    //mau dat coc
    let btbuys = document.querySelectorAll('.btbuy')
    let form = document.getElementById("form");
    for(bt of btbuys){
        bt.onclick=function(){
            form.classList.add('showForm');
        }
    };
    let submitform = document.getElementById("submitform");
    let kt ="";
    submitform.onclick=function(){
        let nameform = document.getElementById("nameform").value;
        let emailform = document.getElementById("emailform").value;
        let sdt = document.getElementById("sdt").value;
        let cccd = document.getElementById("cccd").value;
        let dc = document.getElementById("dc").value;
        let tienso = document.getElementById("tienso").value;
        let tienchu = document.getElementById("tienchu").value;
        let date = document.getElementById("date").value;
        if(nameform !== kt && emailform !== kt && sdt !== kt && cccd !== kt && dc !== kt && tienso !== kt && tienchu !== kt && date!==kt)
        {
           form.style.display='none';
           alert("Ban da dat coc thanh cong");
        }
        else{
            alert("Các ô cần được điền đầy đủ thông tin!")
        }
    };
    let btclose = document.getElementById("btclose");
    btclose.onclick=function(){
        if (confirm("Bạn chắc chắn đóng không?") === true){
        form.classList.toggle('showForm');
        };
    }; 
    let checksale = document.getElementById("checksale");
    let discout = "sieusale";
    let giasanpham = document.querySelectorAll(".gia");
    checksale.onclick=function()
    {
        let sale = document.getElementById("sale").value;
        if(sale === discout){
            for(let price of giasanpham )
                if (!isNaN(price)) {
                    price.innerHTML=price-5000000;
                }
        }else{
            alert("Mã giảm giá của bạn không tồn tại!");
        }

    };
};
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
    $(".tab-content > section:not(:first-child)").hide();
    $(".tab > li > a").click(function() {
        event.preventDefault();
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let href = $(this).attr("href");
        $(".tab-content > section").hide();
        $(href).show();
    });
    $("nav ul.menu a").click(function(){
        var h= $(this).attr("href")
        $("html, body").animate({
            scrollTop:$(h).prop("offsetTop")+"px"
        },1000)
    });
});
