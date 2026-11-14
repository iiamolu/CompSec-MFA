export const parseUserInfo = async (req) => {
    const body = await req.body
    const username = body.username
    const password = body.password

    return [username, password]
}

