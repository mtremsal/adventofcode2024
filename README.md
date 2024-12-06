# Advent of Code 2024

Goals:

* Use Deno to solve AOC to learn the stdlib.
* Experiment with a functional writing style whenever possible.

Learnings and Questions:

* Right, no tuples in JS/TS we have to use arrays and can never know how many elements there are. e.g. I can't replace as `string[][]` with `[string[], string[]]` to constrain to 2 elements. Is there an alternative syntax?
* Why does Array.push return a number rather than itself? Is there not a way to push directly inside a `return`?
* Where is Array.zip? Is it still [a proposal](https://tc39.es/proposal-joint-iteration/#sec-iterator.zip)?