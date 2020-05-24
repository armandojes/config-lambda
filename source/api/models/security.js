import jwt from 'jsonwebtoken'
import config from 'config'

export function verify (accessToken) {
  return new Promise(resolve => {
    if (accessToken === null || accessToken === '') {
      resolve(false)
    } else {
      jwt.verify(accessToken, config.secret, (error, data) => {
        if (error) { resolve(false) } else { resolve(data) }
      })
    }
  })
}

export function sign (data) {
  const accessToken = jwt.sign(data, config.secret)
  return accessToken
}

export default {
  verify,
  sign
}
