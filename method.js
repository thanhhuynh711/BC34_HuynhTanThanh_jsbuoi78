//Bài 1:  Tính tổng
function tinhTong(listNumber) {
  var sum = 0;
  for (var i = 0; i < listNumber.length; i++) {
    sum += listNumber[i];
  }
  return sum;
}

//Bài 2: Tính số dương
function timSoDuong(listNumber) {
  var soDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuong += 1;
    }
  }
  return soDuong;
}

//Bài 3: Tìm số nhỏ nhất
function soMin(listNumber) {
  var soMin = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < soMin) {
      soMin = listNumber[i];
    }
  }
  return soMin;
}

//Bài 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat(listNumber) {
  var soDuongNhoNhat = [];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuongNhoNhat.push(listNumber[i]);
    }
  }
  var soDuongMin = soDuongNhoNhat[0];
  for (var j = 0; j < soDuongNhoNhat.length; j++) {
    if (soDuongNhoNhat[j] < soDuongMin) {
      soDuongMin = soDuongNhoNhat[j];
    }
  }
  return soDuongMin;
}

//Bài 5: Tìm số chãn cuối cùng
function soChanCuoi(listNumber) {
  var chanCuoi = 0;
  for (var i = listNumber.length; i >= 0; i--) {
    if (listNumber[i] % 2 === 0) {
      chanCuoi = listNumber[i];
      return chanCuoi;
    }
  }
  return -1;
}

//Bài 6: Đổi chổ
function myFunction() {
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2");
  var doiCho = document.getElementById("doiCho");
  var x = document.getElementById("mySelect").value;
  if (x === "Đổi chổ") {
    number1.style.display = "block";
    number2.style.display = "block";
    doiCho.style.display = "block";
  } else {
    number1.style.display = "none";
    number2.style.display = "none";
    doiCho.style.display = "none";
  }
}

//Bài 7: Sắp xếp Tăng dần
function sortTheoSo(listNumber) {
  var result = listNumber.sort(function (num, numTruoc) {
    return num - numTruoc;
  });
  return result;
}

//Bài 8: Tìm số nguyên tố đầu tiên trong mảng

//Bài 9: Đếm số nguyên
function demSoNguyen(listNumber) {
  var demSoNguyen = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (Number.isInteger(listNumber[i])) {
      demSoNguyen += 1;
    }
  }
  return demSoNguyen;
}

//Bài 10: so sánh số âm và số dương
function soSanh(listNumber) {
  var ssDuong = 0;
  var ssAm = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      ssDuong += 1;
    } else if (listNumber[i] === 0) {
      ssDuong += 0;
      ssAm += 0;
    } else {
      ssAm += 1;
    }
  }
  var ssAmDuong = "";
  if (ssDuong > ssAm) {
    ssAmDuong = "số dương > số âm";
  } else if (ssDuong === ssAm) {
    ssAmDuong = "số âm = số dương";
  } else {
    ssAmDuong = "số âm > số dương";
  }
  return ssAmDuong;
}
