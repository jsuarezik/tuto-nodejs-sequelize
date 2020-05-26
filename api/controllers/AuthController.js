require('dotenv').config()
import UserService from '../services/UserService'
import jwt from 'jsonwebtoken'

class AuthController {
    static async login (req, res) {
        const { email, password } = req.body 
        let user = await UserService.getByEmail(email); 
        if (!user) {
            res.status(401).json({ message : 'Invalid credentials' })
        } else if ( email == user.email && password == user.password) { //Si se logeo correctamente
            const token = jwt.sign( JSON.stringify(user), process.env.JWT_SECRET_KEY)
            
            res.status(200).json({ token : token , message : 'Success' })
        }
    }
}

export default AuthController;