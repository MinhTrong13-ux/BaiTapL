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
    let password =document.getElementById("password").value;
    let check = document.getElementById("check");
    let kyguixe = document.getElementById("kyguixe");
    check.onclick=function()
    {
        if(password ==='123')
        {
            kyguixe.style.display='block';
        }
        else{
            alert("Mật khẩu sai mời nhập lại!");
        }
    };
})