const readMore = document.querySelector(".xemthembutton");
const bannerThongtin = document.querySelector('.noidung-thontinsanpham');
const thongtinsanphamBanner = document.querySelector('.thongtinsanpham-banner');
const thongtinsanpham = document.querySelector('.thongtinsanpham');
let isTrue = true;

readMore.addEventListener("click", function () {


    if (isTrue) {
        readMore.innerText = 'Thu gọn';
        bannerThongtin.style.height = "fit-content";
        thongtinsanphamBanner.style.height = "fit-content";
        thongtinsanpham.style.height = "fit-content"
    } else {
        readMore.innerText = 'Xem Thêm';
        bannerThongtin.style.height = "15rem";
        thongtinsanphamBanner.style.height = "24.9375rem";
        thongtinsanpham.style.height = "32rem";
    }

    isTrue = !isTrue; // Đảo ngược trạng thái
});

var moTa = document.querySelector('.mota')
var thongTin = document.querySelector('.thontin')

var noiDungmota = document.querySelector('.noidung-thontinsanpham')
var noiDungthongtin = document.querySelector('.noidungthongtin')
noiDungthongtin.style.display="none"
moTa.addEventListener('click',function(){
    thongTin.style.color="#000000b1";
    moTa.style.color="#99B9E1";
    noiDungmota.style.display="block";
    noiDungthongtin.style.display ="none"
    readMore.style.display="block"

});

thongTin.addEventListener('click',function(){
    moTa.style.color="#000000b1";
    thongTin.style.color=" #99B9E1";
    noiDungmota.style.display="none";
    noiDungthongtin.style.display ="block"
    readMore.style.display="none"
});


