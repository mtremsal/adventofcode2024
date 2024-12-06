export function load_sample(day: string) {
    const input = Deno.readTextFileSync(`./inputs/${day}.txt`);
    // console.log(`input for day ${day} is:\n${input}`)
    return input;
}