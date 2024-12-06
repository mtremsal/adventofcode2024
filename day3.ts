import { load_sample } from "./utils.ts";

export function solve_a(sample: string) {
  return process(sample)
    .map(chunk)
    .filter((e) => e.length == 2)
    .filter(([l, r]) => l > 0 && l < 1000 && r > 0 && r < 1000)
    .map(([l, r]) => l * r)
    .reduce((acc, val) => acc + val, 0);
  // .length;
}

export function solve_b(sample: string) {
  return process(sample)
    .length;
}

function process(sample: string) {
  return load_sample(sample)
    .split("mul(");
}

function chunk(input: string) {
  return input
    .substring(0, input.indexOf(")"))
    .split(",")
    .map(Number);
}

console.log(solve_a("3"));
console.log(solve_b("3"));
