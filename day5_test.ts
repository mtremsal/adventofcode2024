import { assertEquals } from "@std/assert";
import { solve_a, solve_b } from "./day5.ts";

Deno.test(function addTest() {
  assertEquals(solve_a("5a_sample"), 143);
});

Deno.test(function addTest() {
  assertEquals(solve_b("5a_sample"), 123);
});
