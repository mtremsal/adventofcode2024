import { assertEquals } from "@std/assert";
import { solve_a, solve_b } from "./day4.ts";

Deno.test(function addTest() {
  assertEquals(solve_a("4a_sample"), 18);
});

// Deno.test(function addTest() {
//     assertEquals(solve_b("4b_sample"), 6);
//   });