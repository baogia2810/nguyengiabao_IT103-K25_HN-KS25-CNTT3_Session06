let arr = [1, 22, 12, 8, 7, 9];

let count = 0;
let result = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    result += arr[i] + " ";
    count++;
  }
}

if (count > 0) {
  console.log(result.trim());
} else {
  console.log("Khong co so nao lon hon 10");
}
