window.onload=function()
{
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