window.addEventListener('load', function()
{
    let process = document.getElementById("addProcess");
    process.onclick = function(){
        let namekg = document.getElementById("namekg").value;
        let giakg = document.getElementById("giakg").value;
        let anhkg = document.getElementById("anhkg").value;
        let h = `<div class="products">
                    <div class="product">
                        <img class="anhkg" src="${anhkg}" alt="Xe ky gui">
                        <h2>${namekg}</h2>
                        <div class="gia2">${giakg}<sup>vnd</sup></div>  
                    </div>
                </div>
                `
             let first = document.querySelector(".products:first-child");
             first.insertAdjacentHTML("beforebegin", h);
    }; 
    let check = document.getElementById("check");
    let kyguixe = document.getElementById("kyguixe");
    const pass = "123";
    let thongtinkygui=document.getElementById("thongtinkygui");
    let passw = this.document.getElementById("password");
    let number = 3;
    check.onclick=function()
    {
        let password =document.getElementById("password").value;
        if(password === pass){
            kyguixe.style.display='block';
        }else{
            number=number-1;
            if(number === 0)
            {
                passw.style.display='none';
                check.style.display='none';
                thongtinkygui.innerHTML="Nhập mật khẩu thất bại vui lòng liên hệ cửa hàng theo thông tin bên dưới.";
                alert("Xin lỗi dường như bạn đang gặp vấn đề về mật khẩu của mình vui lòng liên hệ với chúng tôi!");
            }
            if(number === 2)
            {
            alert("Mật khẩu không chính xác! Bạn còn 2 lần nhập.");
            }
            if(number === 1)
            {
                alert("Mật khẩu không chính xác! Bạn còn 1 lần nhập.");
            }
        }
    };
})