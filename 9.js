var sum = 1;
function findFactorial(f) {
  for (x = 1; x <= f; x++) {
    sum = sum * x;
  }
  console.log(sum);
}

findFactorial(5);
