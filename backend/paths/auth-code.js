import { Router } from 'express'
const router = Router()

router.post('/', async (req, res) => {
    const body = await req.body
    const id = body.id
    const code = body.code

    //user-secret database query -> secretkey

    //symmetric decryption of secret key

    //calc otp for past, present, and future 30 second intervals

    //if not match res.send(wrong code)

    //if match, create session and res.send()
    res.send('Welcome to the jungle!')
})


export default router