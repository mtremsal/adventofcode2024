import { assertEquals } from "@std/assert";
import { solve_a, solve_b } from "./day3.ts";

Deno.test(function addTest() {
  assertEquals(solve_a("3a_sample"), 161);
});

// Deno.test(function addTest() {
//     assertEquals(solve_b("3a_sample"), 1);
//   });
  