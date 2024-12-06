import { load_sample } from "./utils.ts";

export function solve(day: string) {
  const input = load_sample(day);

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

  const zipped = zip(arrays[0], arrays[1]);
  const dists = zipped
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

  return dists;
}

export function zip<S1, S2>(
  firstCollection: Array<S1>,
  lastCollection: Array<S2>,
): Array<[S1, S2]> {
  const length = Math.min(firstCollection.length, lastCollection.length);
  const zipped: Array<[S1, S2]> = [];

  for (let index = 0; index < length; index++) {
    zipped.push([firstCollection[index], lastCollection[index]]);
  }

  return zipped;
}

console.log(solve("1a"));
