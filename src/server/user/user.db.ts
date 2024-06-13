import { pbkdf2Sync } from "crypto";
import { userDB } from "../database/database";

function checkUserExist(email: string, username: string) {
  for (let { key, value } of userDB.getRange()) {
    if (value.username === username || value.email === email) {
      return true;
    }
  }

  return false;
}

function saveNewUser({ email, password, name }) {
  const savedUser = userDB.get(email);
  if (!savedUser) throw Error("We're sorry. This login email already exists");
  const hashPassword = pbkdf2Sync(
    password,
    "salt",
    1000,
    64,
    "sha512"
  ).toString("hex");
}
