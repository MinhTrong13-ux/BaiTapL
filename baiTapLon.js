window.onload=function()
{
    let main= document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for(let im of images)
    im.onclick=function()
    {
        main.src = this.src;
    }
}