import { assertEquals } from "@std/assert";
import { solve_a, solve_b } from "./day2.ts";

Deno.test(function addTest() {
  assertEquals(solve_a("2a_sample"), 2);
});
