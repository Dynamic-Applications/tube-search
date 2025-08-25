import React, { useState, useEffect } from "react";

import { personalInfo, socialLinks } from "../data/appData.jsx";
import { motion } from "framer-motion";

const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert(data.error || "Failed to send message");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-primary-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-mono text-accent-1 relative py-4">
                                    Get In Touch
                                </h2>
                <motion.div
                    className="max-w-xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                        I'm currently open to new opportunities and
                        collaborations. Whether you have a project in mind, a
                        question, or just want to say hi, my inbox is always
                        open. I'll try my best to get back to you!
                    </p>

                    {/* Contact form */}
                    <form onSubmit={handleSubmit} className="mt-10 text-left">
                        <label
                            className="block mb-2 font-semibold text-accent-1"
                            htmlFor="name"
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
                            className="block mb-2 font-semibold text-accent-1"
                            htmlFor="email"
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
                            className="block mb-2 font-semibold text-accent-1"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full mb-4 px-4 py-2 rounded border border-gray-600 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-1"
                        />

                        <button
                            type="submit"
                            className="bg-accent-1 text-primary-bg px-6 py-3 rounded font-mono hover:bg-opacity-80 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {submitted && (
                        <p className="mt-4 text-green-500 font-semibold">
                            Thank you for your message! I'll get back to you
                            soon.
                        </p>
                    )}

                    <div className="mt-12 flex justify-center space-x-6">
                        {Object.entries(socialLinks).map(
                            ([key, link], index) => (
                                <motion.a
                                    key={key}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-accent-1 transition-colors"
                                    aria-label={key}
                                    variants={contactItemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={index + 2} // Start delay after main button
                                    viewport={{ once: true }}
                                >
                                    {React.cloneElement(link.icon, {
                                        size: 32,
                                    })}
                                </motion.a>
                            )
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
