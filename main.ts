// Template for each day.

import { load_sample } from "./utils.ts";

export function solve_a(sample: string) {
  return process(sample)
    .length;
}

export function solve_b(sample: string) {
    return process(sample)
    .length;
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

console.log(solve_a("1"));
console.log(solve_b("1"));
