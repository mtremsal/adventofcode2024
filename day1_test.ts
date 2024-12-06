import { assertEquals } from "@std/assert";
import { solve_a, solve_b } from "./day1.ts";

Deno.test(function addTest() {
  assertEquals(solve_a("1a_sample"), 11);
});

Deno.test(function addTest() {
  assertEquals(solve_b("1b_sample"), 31);
});
