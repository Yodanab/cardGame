import { open } from "lmdb";

export const database = open("./database", {
  compression: true,
});

export function generateId() {
  const time = Date.now() | 0;
  const hex = time.toString(16);
  const rnd = "x"
    .repeat(16)
    .replace(/x/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    );
  return `${hex}${rnd}`;
}
