import { userDB } from "../database/database";

function checkUserExist(email: string, username: string) {
    for (let { key, value } of userDB.getRange()) {
        if (value.username === username || value.email === email) {
            return true;
        }
    }

    return false;
}