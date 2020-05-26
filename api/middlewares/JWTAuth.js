import jwt from 'jsonwebtoken';
import messages from '../messages/en'

const verifyJWT = (req, res, next) => {
    const { authorization } = req.headers // Authorization : Bearer <token>

    if (!authorization) {
        res.status(401).json({ message : messages.errors.unauthorized})
    } else {
        const token = authorization.split(' ')[1]
        if (!token) {
            res.status(401).json({'message' : messages.errors.unauthorized})
        } else {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
                if (error) {
                    res.status(401).send( { 'message' : messages.errors.unauthorized , error : error})
                } else {
                    next();
                }
            })
        }
    }
}

export default verifyJWT
