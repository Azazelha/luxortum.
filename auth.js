import jwt from 'jsonwebtoken';

const secret = process.env.ADMIN_SECRET;

export function generateToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}