let arr = ["c", "2", "d", "3"];

let result = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= "0" && arr[i] <= "9") {
    result += arr[i] + " ";
  }
}

if (result === "") {
  console.log("Khong co ky tu so");
} else {
  console.log(result.trim());
}
