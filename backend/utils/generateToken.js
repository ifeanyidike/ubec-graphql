import jwt from 'jsonwebtoken'

const generateToken = (id, key, time) => {
    return jwt.sign({ id }, key, { expiresIn: time })
}

export { generateToken }