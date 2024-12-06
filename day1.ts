import { freq, load_sample, zip } from "./utils.ts";

export function solve_a(sample: string) {
  const arrays = process(sample);
  const zipped = zip(arrays[0], arrays[1]);

  return zipped
    .reduce(
      (acc, line) => {
        const dist = Math.abs(line[0] - line[1]);
        acc.push(dist);
        return acc;
      },
      [] as number[],
    )
    .reduce((acc, dist) => acc + dist, 0);
}

export function solve_b(sample: string) {
  const arrays = process(sample);
  const freqs = freq(arrays[1]);

  return arrays[0]
    .map((n) => (freqs.get(n.toString()) ?? 0) * n)
    .reduce((acc, dist) => acc + dist, 0);
}

function process(sample: string) {
  const input = load_sample(sample);

  return input
    .split("\n")
    .map((s) => s.split("   "))
    .reduce(
      ([a, b], [la, lb]) => {
        a.push(la);
        b.push(lb);
        return [a, b];
      },
      [
        [],
        [],
      ] as string[][],
    )
    .map((arr) => arr.map(Number))
    .map((arr) => arr.sort());
}

console.log(solve_a("1"));
console.log(solve_b("1"));
