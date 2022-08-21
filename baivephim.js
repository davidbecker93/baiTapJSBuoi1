/**
 * Tinh tien tư thien
 */

var btnTinhTienTT = document.getElementById("btnTinhTienTT");
btnTinhTienTT.onclick = function () {
    //Dau vào: tenPhim,gia ve nguoi lon,SL ve,gia ve tre em,SL ve, ti le
    var tenPhim = document.getElementById("tenPhim").value;
    var giaVeNL = document.getElementById("giaVeNL").value * 1;
    var soVeNL = document.getElementById("soVeNL").value * 1;
    var giaVeTE = document.getElementById("giaVeTE").value * 1;
    var soVeTE = document.getElementById("soVeTE").value * 1;
    var selectTT = document.getElementById("selectTT").value * 1;
    //Xu ly: (VeNL*SLNL + VeTE*SLTE) * tileTT
    var soVeBan = soVeNL + soVeTE;
    var tongTienVe = giaVeNL * soVeNL + giaVeTE * soVeTE;
    var tienTT = tongTienVe * selectTT / 100;
    var loiNhuan = tongTienVe - tienTT;
    var currentFormat = new Intl.NumberFormat("VN-vn");

    //Dau ra:
    var ketQuaTB = "<div class='alert alert-success'>"
    ketQuaTB += "<p>Tên Phim: " + tenPhim + "</p>"
    ketQuaTB += "<p>Số vé đã bán: " + soVeBan + "</p>"
    ketQuaTB += "<p>Doanh thu: " + currentFormat.format(tongTienVe) + " VNĐ</p>"
    ketQuaTB += "<p>Trích % từ thiện: " + selectTT + "%</p>"
    ketQuaTB += "<p>Tổng số tiền trích từ thiện: " + tienTT + " VNĐ</p>"
    ketQuaTB += "<p>Tổng thu tiền sau khi trừ: " + currentFormat.format(loiNhuan) + " VNĐ</p>"
    ketQuaTB += "</div>"
    document.getElementById("showInfoTien").innerHTML = ketQuaTB;
}