import { Router } from 'express'
import { parseUserInfo } from '../utils.js'
const router = Router()

router.post('/', async (req, res) => {
    const [username, password] = parseUserInfo(req)

    
    //user-pword database query for pword and salt

    //salt and hash -> compare

    //if no match - res.send(no account)

    //res.send(some id to get back for auth code matching)
    //update user-secret db with this temp id
    res.send('Login succesful!')
})



export default router