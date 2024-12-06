import { freq, load_sample, zip } from "./utils.ts";

export function solve_a(sample: string) {
  const arrays = process(sample);

  const zipped = zip(arrays[0], arrays[1]);
  const res = zipped
    .reduce(
      (acc, line) => {
        const dist = Math.abs(line[0] - line[1]);
        acc.push(dist);
        return acc;
      },
      [] as number[],
    )
    .reduce((acc, dist) => {
      return acc + dist;
    }, 0);

  return res;
}

export function solve_b(sample: string) {
  const arrays = process(sample);
  const freqs = freq(arrays[1]);

  const res = arrays[0]
    .map((n) => {
      const mult = freqs.get(n.toString()) ?? 0;
      return n * mult;
    })
  .reduce((acc, dist) => {
    return acc + dist;
  }, 0);

  return res;
}

function process(sample: string) {
  const input = load_sample(sample);

  const arrays = input
    .split("\n")
    .map((s) => s.split("   "))
    .reduce(
      ([a, b], line) => {
        a.push(line[0]);
        b.push(line[1]);
        return [a, b];
      },
      [
        [],
        [],
      ] as string[][],
    )
    .map((arr) => arr.map(Number))
    .map((arr) => arr.sort());

  return arrays;
}

console.log(solve_a("1"));
console.log(solve_b("1"));
