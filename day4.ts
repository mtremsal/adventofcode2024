import { load_sample, zip } from "./utils.ts";

const W = "XMAS";

const VECTORS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

export function solve_a(sample: string) {
  const mat = process(sample);
  let res = 0;

  mat.forEach((row, i) => {
    row.forEach((_val, j) => {
      VECTORS.forEach((vec) => {
        if (read_word_from_post_with_vector(mat, i, j, vec) == W) res += 1;
      });
    });
  });

  return res;
}

export function solve_b(sample: string) {
  return process(sample)
    .length;
}

function process(sample: string): string[][] {
  return load_sample(sample)
    .split("\n")
    .map((line) => line.split(""));
}

function read_word_from_post_with_vector(
  mat: string[][],
  row: number,
  col: number,
  v: number[],
) {
  let res = "";
  for (const i of [0, 1, 2, 3]) {
    res = res + read_letter_at_pos(mat, row + v[0] * i, col + v[1] * i);
  }
  return res;
}

function read_letter_at_pos(mat: string[][], row: number, col: number) {
  return (mat[row]) ? (mat[row][col] ?? "") : "";
}

function flatten(mat: string[][]) {
  return mat.map((l) => l.join("")).join("\n");
}

console.log(solve_a("4"));
// console.log(solve_b("4"));
