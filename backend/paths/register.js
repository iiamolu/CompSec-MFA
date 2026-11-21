import { Router } from 'express'
import { parseUserInfo } from '../utils.js'
const router = Router()

router.post('/', async (req, res) => {
    const [username, password] = parseUserInfo(req)

    //if user already exists - res.send(duplicate account)

    // generate salt string
    
    //salt and hash password

    //store password and salt string in db

    //generate secret key

    //symmetric encrytion of secret key and store in db

    //send secret key plaintext and temporary id
    //update db with temp id
    res.send('Registration succesful!')
})


export default router