var listNumber = [];

document.getElementById("themSo").onclick = function () {
  var number = document.getElementById("number").value * 1;
  listNumber.push(number);

  document.getElementById("thongBao").innerHTML = listNumber;
};

//Bài 1: Tính tổng
document.getElementById("tinhTong").onclick = function () {
  var output = 0;
  output = tinhTong(listNumber);
  document.getElementById("thongBao2").innerHTML = "Tính tổng: " + output;
};

//Bài 2: Tìm số dương
document.getElementById("soDuong").onclick = function () {
  var output = 0;
  output = timSoDuong(listNumber);
  document.getElementById("thongBao2").innerHTML = "Số dương: " + output;
};

//Bài 3: Tìm số nhỏ nhất
document.getElementById("soNhoNhat").onclick = function () {
  var output = 0;
  output = soMin(listNumber);
  document.getElementById("thongBao2").innerHTML = "Số nhỏ nhất: " + output;
};

//Bài 4: Tìm số dương nhỏ nhất
document.getElementById("soDuongNhoNhat").onclick = function () {
  var output = 0;
  output = soDuongNhoNhat(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Số dương nhỏ nhất: " + output;
};

//Bài 5: Tìm số chẵn cuối cùng
document.getElementById("soChanCuoi").onclick = function () {
  var output = 0;
  output = soChanCuoi(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Số chẵn cuối cùng: " + output;
};

//Bài 6: Đổi chổ
document.getElementById("doiCho").onclick = function () {
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;

  var number = listNumber;
  [listNumber[number1], listNumber[number2]] = [
    listNumber[number2],
    listNumber[number1],
  ];

  document.getElementById("thongBao").innerHTML = number;
};

//Bài 7: Sắp xếp
document.getElementById("sapXep").onclick = function () {
  var output = 0;
  output = sortTheoSo(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Sắp xếp tăng dần: " + output;
};

//Bài 8: Tìm số nguyên tố đầu tiên

document.getElementById("soNguyenTo").onclick = function () {
  var output = 0;
  output = isprime(listNumber);
  document.getElementById("thongBao2").innerHTML =
    "Số nguyên tố dầu tiên: " + output;
};

//Bai 9: Đếm số nguyên
document.getElementById("demSoNguyen").onclick = function () {
  var output = 0;
  output = demSoNguyen(listNumber);
  document.getElementById("thongBao2").innerHTML = "Số nguyên: " + output;
};

//Bai 10: So sánh số âm và số dương
document.getElementById("soSanh").onclick = function () {
  var output;
  output = soSanh(listNumber);
  document.getElementById("thongBao2").innerHTML = output;
};
