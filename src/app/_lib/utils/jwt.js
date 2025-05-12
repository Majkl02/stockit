export function decodeJwt(token) {
  try {
    const payload = token.split('.')[1]
    const decoded = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'))
    return decoded
  } catch (err) {
    console.error('Failed to decode JWT:', err)
    return null
  }
}
