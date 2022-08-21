/**
 * 
 */

var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
    //Đầu vao người dùng nhập
    const LUONG_NGAY = 100000;
    var soNgay = document.getElementById("soNgay").value * 1;
    //Xu Ly
    var tongLuong = soNgay * LUONG_NGAY;
    //Fomat VN
    var currentFormat = new Intl.NumberFormat("VN-vn")
    var ketQua = "<p class='alert alert-success '>Tổng lương là: " + currentFormat.format(tongLuong) + " VNĐ</p>";
    //Đau ra
    document.getElementById("showInfoLuong").innerHTML = ketQua;
}