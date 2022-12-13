// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function fizzbuzz(n: i32): string {
  if(n % 15 == 0)
    return "fizzbuzz";
  if(n % 5 == 0)
    return "buzz";
  if(n % 3 == 0)
    return "fizz";
  return n.toString();
}

export function fibb(n: i32): i32 {
  return (n == 1 || n == 0) ? 1 : fibb(n-1) + fibb(n-2);
}