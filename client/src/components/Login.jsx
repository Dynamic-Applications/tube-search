import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate login request (replace with real API call)
        if (formData.email && formData.password) {
            setSubmitted(true);
            setFormData({ email: "", password: "" });
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <section className="py-20 bg-primary-bg min-h-screen flex items-center justify-center">
            <motion.div
                className="bg-gray-700 p-8 rounded-lg max-w-md w-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-accent-1 mb-6 text-center">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="text-left">
                    <label
                        htmlFor="email"
                        className="block mb-2 font-semibold text-accent-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-1"
                    />

                    <label
                        htmlFor="password"
                        className="block mb-2 font-semibold text-accent-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full mb-6 px-4 py-2 rounded border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-1"
                    />

                    <button
                        type="submit"
                        className="w-full bg-accent-1 text-primary-bg px-6 py-3 rounded font-mono hover:bg-opacity-80 transition duration-300"
                    >
                        Log In
                    </button>
                </form>

                <div className="flex flex-col items-center mt-6 space-y-2">
                    <Link to="/forgot-password" className="text-accent-1 hover:underline text-sm">
                        Forgot password?
                    </Link>
                    <span className="text-gray-300 text-sm">
                        First time?{' '}
                        <Link to="/signup" className="text-accent-1 hover:underline">
                            Create an account.
                        </Link>
                    </span>
                    <Link to="/" className="text-accent-1 hover:underline text-sm">
                        &larr; Back to Home
                    </Link>
                </div>

                {submitted && (
                    <p className="mt-4 text-green-500 font-semibold text-center">
                        Successfully logged in!
                    </p>
                )}
            </motion.div>
        </section>
    );
};

export default Login;
