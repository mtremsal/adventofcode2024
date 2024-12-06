import { load_sample } from "./utils.ts";

export function solve_a(sample: string) {
  return mult_valid_chunks(process(sample));
}

export function solve_b(sample: string) {
  return mult_valid_chunks(process_and_clean(sample));
}

function process(sample: string) {
  return load_sample(sample)
    .split("mul(");
}

function process_and_clean(sample: string) {
  return load_sample(sample)
    .split("do()")
    .map((chunk) => {
      const valid_until = chunk.indexOf("don't()");
      return (valid_until == -1) ? chunk : chunk.substring(0, valid_until);
    })
    .join("")
    .split("mul(");
}

function chunk_mul(input: string) {
  return input
    .substring(0, input.indexOf(")"))
    .split(",")
    .map(Number);
}

function mult_valid_chunks(array: string[]) {
  return array
    .map(chunk_mul)
    .filter((e) => e.length == 2)
    .filter(([l, r]) => l > 0 && l < 1000 && r > 0 && r < 1000)
    .map(([l, r]) => l * r)
    .reduce((acc, val) => acc + val, 0);
}

console.log(solve_a("3"));
console.log(solve_b("3"));
