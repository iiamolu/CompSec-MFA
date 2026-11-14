import { useState } from 'react'
import './Register.css'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [created, setCreated] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault() // stops the page reload and keeps the password out of the URL
    setError('')
    const name = username.trim()

    // Client-side checks are for user experience only. The backend must re-check everything.
    if (!/^[A-Za-z0-9_.-]{3,30}$/.test(name)) {
      setError('Username must be 3-30 characters: letters, numbers, _ . or -')
      return
    }
    if (password.length < 12) {
      setError('Password must be at least 12 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password }), // never send "confirm"
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data.message || 'Could not create account.')
        return
      }
      // TODO: when issue #6 (QR code setup page) exists, go to it here instead:
      // window.location.hash = '#setup-auth'
      setCreated(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (created) {
    return (
      <main className="register-card">
        <h1>Account created</h1>
        <p>Your account is ready. You can log in now.</p>
        <p className="register-alt"><a href="#login">Back to login</a></p>
      </main>
    )
  }

  return (
    <main className="register-card">
      <h1>Create your account</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <small>At least 12 characters. A passphrase works well.</small>

        <label htmlFor="confirm">Confirm password</label>
        <input
          id="confirm"
          name="confirm"
          type="password"
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <p className="register-error" role="alert">{error}</p>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating account…' : 'Create account'}
        </button>
      </form>

      <p className="register-alt">
        Already have an account? <a href="#login">Log in</a>
      </p>
    </main>
  )
}

export default Register