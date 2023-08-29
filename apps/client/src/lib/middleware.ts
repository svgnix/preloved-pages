import jwt from "jsonwebtoken";

export const getUser = (token: string, cb) => {
    jwt.verify(token, "SECRET", (err, user) => {
        if (err) {
            return cb(false);
        }
        return cb(user);
    });
}