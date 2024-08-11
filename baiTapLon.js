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
$(document).ready(function() {
    // Hiển thị nút khi cuộn xuống
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) { // Hiển thị nút khi cuộn xuống hơn 100px
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Cuộn mượt mà về đầu trang khi nhấp vào nút
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); // 800ms cho hiệu ứng cuộn mượt mà
        return false; // Ngăn không làm mới trang
    });
})