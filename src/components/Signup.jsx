import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Simulate sign-up success
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
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
                    Sign Up
                </h2>
                <form onSubmit={handleSubmit} className="text-left">
                    <label
                        htmlFor="name"
                        className="block mb-2 font-semibold text-accent-1"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-1"
                    />

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
                        className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-1"
                    />

                    <label
                        htmlFor="confirmPassword"
                        className="block mb-2 font-semibold text-accent-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full mb-6 px-4 py-2 rounded border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-1"
                    />

                    <button
                        type="submit"
                        className="w-full bg-accent-1 text-primary-bg px-6 py-3 rounded font-mono hover:bg-opacity-80 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>


                <div className="flex flex-col items-center mt-6 space-y-2">
                    <span className="text-gray-300 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-accent-1 hover:underline">
                            Login
                        </Link>
                    </span>
                    <Link to="/" className="text-accent-1 hover:underline text-sm">
                        &larr; Back to Home
                    </Link>
                </div>

                {submitted && (
                    <p className="mt-4 text-green-500 font-semibold text-center">
                        Successfully signed up!
                    </p>
                )}
            </motion.div>
        </section>
    );
};

export default Signup;
