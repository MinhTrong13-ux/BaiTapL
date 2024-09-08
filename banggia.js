window.addEventListener('load', function()
{
    let TSX = this.document.querySelectorAll(".TSX");
    let tmp = 0;
    for(let t of TSX)
        t.onclick = function()
    {
        let rel = this.getAttribute("rel");
        let TS = document.getElementById(`TS-${rel}`);
        if(tmp!==0 && tmp!==TS){
            tmp.style.display='none';
        }
        TS.style.display='block';
        tmp = TS;
    }
})