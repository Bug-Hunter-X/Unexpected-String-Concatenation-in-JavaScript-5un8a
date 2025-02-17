function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '1')); // Output: 2

function foo(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
  }
  
  console.log(foo(1, '1')); // Output: 2