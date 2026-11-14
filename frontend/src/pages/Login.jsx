function Login() {
    // Display
    return(
        // Center
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 bg-sky-50">
            {/* Card around login form */}
            <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">

            {/* Centering only the heading and paragraph */}
            <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-blue-500">
                Welcome Back
            </h1>

            <p>Sign in to your account</p>
            </div>

            {/* Flex column so that username and password aren't next to eachother; limit form's width */}
            <form className="flex flex-col gap-2 w-full max-w-sm">
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                type="text" 
                name="username"
                className="border border-gray-300 rounded-lg p-2 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none" 
                required
                />


                <label htmlFor="password">Password</label>
                {/* type="password" visually masks on UI */}
                <input 
                id="password" 
                type="password" 
                name="password"
                className="border border-gray-300 rounded-lg p-2 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none"
                required
                />
                
                {/* Giving the button color */}
                <button 
                type="submit"
                className="bg-sky-300 text-sky-950 font-semibold py-3 px-4 rounded-lg hover:bg-sky-400 transition-colors"
                >
                    Sign In
                    </button>
            </form>

            {/* Link to registration page */}
            <p className="text-center mt-4 text-sm text-slate-600">
                Need an account?{" "}
                <a
                    href="#register"
                    className="text-sky-600 font-semibold hover:underline"
                >
                    Create one
                </a>
            </p>

            </div>
        </main>
    );
}

// Allows App.jsx to use page
export default Login;