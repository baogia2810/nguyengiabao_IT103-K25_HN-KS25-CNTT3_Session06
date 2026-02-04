let n = prompt("Nhap so phan tu cua mang");
let arr = [];

if (n < 0) {
  console.log("So luong phan tu khong hop le");
} else if (n == 0) {
  console.log("Mang khong co phan tu");
} else {
  for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhap phan tu thu ${i + 1}`);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  console.log(count);
}
