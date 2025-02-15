import { allSongs } from "./index.mjs";
import assert from "assert";

const it = (desc, fn) => {
  try {
    fn();
    console.log("\x1b[32m%s\x1b[0m", `\u2714 ${desc}`);
  } catch (error) {
    console.log("\n");
    console.log("\x1b[31m%s\x1b[0m", `\u2718 ${desc}`);
    console.error(error);
  }
};

it("should fetch song IDs from OK Computer", async () => {
  const id = 2060534;
  const songs = await allSongs(id);
  const expected = [];
  for (let i = 22497470; i <= 22497481; i++) {
    expected.push(i);
  }
  assert.deepEqual(songs, expected);
});
