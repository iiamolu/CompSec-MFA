function Login() {
    // Display
    return(
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
            <h1 className="text-4xl font-bold text-blue-500">
                Welcome Back
            </h1>
            <p>Sign in to your account</p>
            {/* Flex column so that username and password aren't next to eachother; limit form's width */}
            <form className="flex flex-col gap-2 w-full max-w-sm">
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                type="text" 
                name="username"
                className="border border-gray-300 rounded-lg p-2" 
                required
                />


                <label htmlFor="password">Password</label>
                {/* type="password" visually masks on UI */}
                <input 
                id="password" 
                type="password" 
                name="password"
                className="border border-gray-300 rounded-lg p-2"
                required
                />

                <button type="submit">Sign In</button>
            </form>
        </main>
    );
}

// Allows App.jsx to use page
export default Login;