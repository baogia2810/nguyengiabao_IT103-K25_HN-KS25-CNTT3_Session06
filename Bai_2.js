let arr = [1, 2, 3, 4, 5, 6];

if (arr.length === 0) {
  console.log("Khong co so lon nhat");
} else {
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  console.log("So lon nhat: " + max);
  console.log("Vi tri: " + index);
}
