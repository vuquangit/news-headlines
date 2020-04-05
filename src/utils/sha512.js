import crypto from "crypto";

export const sha512 = (password, salt) => {
  var hash = crypto.createHmac("sha512", salt); /** Hashing algorithm sha512 */
  hash.update(password);
  return hash.digest("hex");
};
