import { randomBytes, pbkdf2Sync, createHmac } from "crypto";

const SALT_LENGTH = 16;
const HASH_ALGORITHM = "sha256";
const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const HEX = "hex";
const SECRET = "SECRET";

export function generatePasswordHash(password: string) {
  const salt = randomBytes(SALT_LENGTH).toString(HEX);
  const hash = pbkdf2Sync(
    password,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    HASH_ALGORITHM
  ).toString(HEX);

  const hmac = createHmac(HASH_ALGORITHM, SECRET);
  const finalHash = hmac.update(hash).digest(HEX);

  return `${finalHash}.${salt}`;
}

export function validatePassword(storedPassword: string, password: string) {
  const [storedHash, storedSalt] = storedPassword.split(".");

  const hash = pbkdf2Sync(
    password,
    storedSalt,
    ITERATIONS,
    KEY_LENGTH,
    HASH_ALGORITHM
  ).toString(HEX);

  const hmac = createHmac(HASH_ALGORITHM, SECRET);
  const finalHash = hmac.update(hash).digest("hex");

  return storedHash === finalHash;
}
