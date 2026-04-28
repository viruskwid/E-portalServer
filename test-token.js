const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWU0ZGM5ZTVlOWE3YWYzMDkxNzQyNmEiLCJpYXQiOjE3NzczOTEyMTN9.uG-L2FBZQSYQWsHvdeZlexo7mdppPbnr5u9OeudZGCw';
const secret = 'supersecretkey12345';

try {
  const decoded = jwt.verify(token, secret);
  console.log('✅ TOKEN VALID');
  console.log('Decoded:', decoded);
} catch (e) {
  console.log('❌ TOKEN INVALID');
  console.log('Error:', e.message);
}