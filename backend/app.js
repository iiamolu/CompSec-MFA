import express from 'express'
import login from './paths/login.js'
import register from './paths/register.js'
import auth from './paths/auth-code.js'

const app = express()

app.get('/', (req, res) => {
    const message = 'WELCOME TO PROJECT MFA!'
    console.log(message)
    res.send(message)
})


app.use('/api/login', login)
app.use('/api/register', register)
app.use('/api/auth', auth)


app.listen(3000)