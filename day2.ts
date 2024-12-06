import { load_sample, zip } from "./utils.ts";

export function solve_a(sample: string) {
  return process(sample)
    .map(deltas)
    .map(safe_deltas)
    .filter((n) => n == true)
    .length;
}

export function solve_b(sample: string) {
  return 1;
}

function process(sample: string) {
  return load_sample(sample)
    .split("\n")
    .map((line) =>
      line
        .split(" ")
        .map(Number)
    );
}

function deltas(array: number[]) {
  return zip(array.slice(0, array.length - 1), array.slice(1, array.length))
    .map((el) => {
      const [l, r] = el;
      return r - l;
    });
}

function safe_deltas(array: number[]) {
  return safe_positive_deltas(array) ||
    safe_positive_deltas(array.map((n) => -n));
}

function safe_positive_deltas(array: number[]) {
  return array.every((n) => n > 0 && n <= 3);
}

console.log(solve_a("2"));
console.log(solve_b("2"));
