/**
 * 
 */
document.getElementById("btnTaoNoiDung").onclick = function () {
    var content = "";
    content += "<tr>";
    content += "<td>1</td>";
    content += "<td>Iphone</td>";
    content += "<td>20</td>";
    content += "<td>dep</td>";
    content += "</td>";
    content += "<tr>";
    content += "<td>2</td>";
    content += "<td>Samsung</td>";
    content += "<td>20</td>";
    content += "<td>dep</td>";
    content += "</td>";

    document.getElementById("myTbody").innerHTML = content;
};