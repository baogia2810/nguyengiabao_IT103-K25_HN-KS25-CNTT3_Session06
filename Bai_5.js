let n = 5;
let arr = ["a", "2", "d", "5", "e"];

if (n < 0) {
  console.log("So luong phan tu khong duoc am");
} else if (n === 0) {
  console.log("Mang khong co phan tu");
} else {
  let sum = 0;
  let hasNumber = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
      sum += Number(arr[i]);
      hasNumber = true;
    }
  }

  if (hasNumber) {
    console.log(sum);
  } else {
    console.log("Khong co phan tu nao la so");
  }
}
