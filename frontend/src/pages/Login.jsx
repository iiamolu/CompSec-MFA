function Login() {
    // Display
    return(
        <main>
            <h1>Welcome Back</h1>
            <p>Sign in to your account</p>
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" name="username" required/>


                <label htmlFor="password">Password</label>
                {/* type="password" visually masks on UI*/}
                <input id="password" type="password" name="password" required/>

                <button type="submit">Sign In</button>
            </form>
        </main>
    );
}

// Allows App.jsx to use page
export default Login;