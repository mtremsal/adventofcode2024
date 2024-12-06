import { assertEquals } from "@std/assert";
import { load_sample } from "./utils.ts";
import { solve } from "./day1.ts";

Deno.test(function addTest() {
  assertEquals(solve("1a_sample"), 11);
});
