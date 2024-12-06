import { assertEquals } from "@std/assert";
import { solve_a, solve_b } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(solve_a("1a_sample"), 6);
});

Deno.test(function addTest() {
    assertEquals(solve_b("1b_sample"), 6);
  });
  