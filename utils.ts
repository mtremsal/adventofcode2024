export function load_sample(day: string) {
  const input = Deno.readTextFileSync(`./inputs/${day}.txt`);
  // console.log(`input for day ${day} is:\n${input}`)
  return input;
}

export function zip<S1, S2>(
  firstCollection: Array<S1>,
  lastCollection: Array<S2>,
): Array<[S1, S2]> {
  const length = Math.min(firstCollection.length, lastCollection.length);
  const zipped: Array<[S1, S2]> = [];

  for (let index = 0; index < length; index++) {
    zipped.push([firstCollection[index], lastCollection[index]]);
  }

  return zipped;
}

export function freq(array: number[]) {
  const acc = new Map<string, number>();

  array.forEach((el) => {
    const key = el.toString();
    const val = acc.get(key);
    acc.set(key, val ? val + 1 : 1);
    
  })
  return acc;
}
