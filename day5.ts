import { load_sample } from "./utils.ts";

export function solve_a(sample: string) {
  const [rules, updates] = process(sample);

  return updates
    .filter((update) => valid_update(update, rules))
    .map((update) => update.at(update.length / 2))
    .reduce((acc, e) => (acc ?? 0) + (e ?? 0), 0);
}

export function solve_b(sample: string) {
  return process(sample)
    .length;
}

function valid_update(update: number[], rules: number[][]) {
  return rules
    .map(([l, r]) =>
      (update.indexOf(l) == -1) || (update.indexOf(r) == -1) ||
      (update.indexOf(l) < update.indexOf(r))
    ).every((b) => b == true);
}

function process(sample: string) {
  const [l, r] = load_sample(sample)
    .split("\n\n");
  load_sample(sample);

  const rules = l
    .split("\n")
    .map((ins) => ins.split("|").map(Number));

  const updates = r
    .split("\n")
    .map((row) => row.split(",").map(Number));

  return [rules, updates];
}

console.log(solve_a("5"));
// console.log(solve_b("5"));
