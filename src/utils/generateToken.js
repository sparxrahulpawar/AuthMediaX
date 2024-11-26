const jwt = require("jsonwebtoken");

/**
 * Generates a JWT token.
 * @param {Object} payload - The payload to include in the token.
 * @param {string} [secret=process.env.JWT_SECRET] - The secret key for signing the token.
 * @param {string|number} [expiresIn=process.env.TOKEN_EXPIRES_IN || "30d"] - Token expiration time.
 * @returns {string} - The signed JWT token.
 */
const generateToken = (
  payload,
  secret = process.env.JWT_SECRET,
  expiresIn = process.env.TOKEN_EXPIRES_IN || "30d"
) => {
  if (!secret)
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = { generateToken };
