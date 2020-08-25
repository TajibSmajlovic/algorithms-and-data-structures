let cache = {};

function memoizedAdd80() {
  let cache = {};

  // Closures
  return function (n) {
    if (n in cache) return cache[n];

    cache[n] = n + 80;
    return cache[n];
  };
}

const memoized = memoizedAdd80();

memoized(5);
memoized(5);
memoized(5);
memoized(5);
memoized(5);

// Fibonacci
let calculations = 0;
function fibonacci() {
  let cache = {};

  return function fib(n) {
    calculations++;

    if (n in cache) return cache[n];
    else {
      if (n < 2) return n;

      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const memoizedFibonacci = fibonacci();
console.log(memoizedFibonacci(10));
console.log(calculations);

// Bottom-up approach
function fibonacci2(n) {
  const list = [0, 1];

  for (let i = 2; i <= n; i++) list.push(list[i - 1] + list[i - 2]);

  return list.pop();
}

console.log(fibonacci2(10));
