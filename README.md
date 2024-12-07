# Advent of Code 2024

## Goals

* Use Deno to solve AOC to learn the stdlib, without any additional imports.
* Experiment with a functional writing style whenever possible.

## Learnings and Questions

* Right, no tuples in JS/TS we have to use arrays and can never know how many elements there are. e.g. I can't replace as `string[][]` with `[string[], string[]]` to constrain to 2 elements. Is there an alternative syntax?
* Why does Array.push return a number rather than itself? Is there not a way to push directly inside a `return`?
* Where is Array.zip? Is it still [a proposal](https://tc39.es/proposal-joint-iteration/#sec-iterator.zip)?
* Also had to implement freq() that turns an array into the Map of its values and associated frequencies.
* I can't find a [pipe operator](https://github.com/tc39/proposal-pipeline-operator) so even in FP style the code is nested in parenthesis and the logic reads in reverse.
* Is there no way to generate an array with forEach without "pushing"? Why is the output of forEach not itself an array?
* Is there a `isTrue` predicate? What's a better way than writing `booleanArray.some(b => b == true)`?
* Is there no sinmple way to declare and assign multiple variables at once unless I write something like `let [a, b, c] = Array(3).fill('foo')`?

## Approach

* `deno test --allow-read day1_test.ts` to check against the provided samples
* `deno run --allow-read day1.ts` to generate answers based on the full inputs