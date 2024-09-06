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
    submitform.onclick=function(){
        form.style.display='none';
    };
    let btclose = document.getElementById("btclose");
    btclose.onclick=function(){
        if (confirm("Bạn chắc chắn đóng không?") === true){
        form.classList.toggle('showForm');
        };
    };
        let process = document.getElementById("addProcess");
        process.onclick = function(){
            let namekg = document.getElementById("namekg").value;
            let giakg = document.getElementById("giakg").value;
            let anhkg = document.getElementById("anhkg").value;
            let h = `
                    <div class="product">
                        <div>
                            <img src="${anhkg}" alt="Xe ky gui">
                            <p>${namekg}</p>
                            <div>${giakg}<sup>vnd</sup></div>  
                            </div>
                    </div>
                    `
                 let first = document.querySelector(".product:first-child");
                 first.insertAdjacentHTML("beforebegin", h);
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
