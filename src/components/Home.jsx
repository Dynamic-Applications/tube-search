import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";

// Your education data example (replace with your actual data import)
const education = [
    {
        institution: "State University",
        degree: "BSc Computer Science",
        duration: "2015 - 2019",
        score: "GPA: 3.8/4.0",
    },
    {
        institution: "City High School",
        degree: "High School Diploma",
        duration: "2013 - 2015",
        score: "Grade: A+",
    },
];

// About section card animation variants
const cardVariants = {
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

const mockVideos = [
    {
        id: 1,
        title: "React Tutorial for Beginners",
        thumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg",
        channel: "Code Academy",
        views: "1.2M views",
        duration: "12:34",
    },
    {
        id: 2,
        title: "JavaScript ES6 Crash Course",
        thumbnail: "https://img.youtube.com/vi/NCwa_xi0Uuc/hqdefault.jpg",
        channel: "Tech Guru",
        views: "850K views",
        duration: "15:20",
    },
    {
        id: 3,
        title: "CSS Grid Tutorial",
        thumbnail: "https://img.youtube.com/vi/jV8B24rSN5o/hqdefault.jpg",
        channel: "Design Academy",
        views: "420K views",
        duration: "10:05",
    },
    // Add more sample videos if you want
];

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredVideos, setFilteredVideos] = useState(mockVideos);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = mockVideos.filter((video) =>
            video.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredVideos(filtered);
    };

    return (
        <section className="min-h-screen bg-primary-bg pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* About Section */}
                <motion.div
                    className="mb-16 bg-secondary-bg p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-mono font-semibold text-accent-1 mb-6 text-center">
                        About Tube Search
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto text-center">
                        Tube Search is a user-friendly video search application
                        that helps you quickly find video tutorials, clips, and
                        educational content from various channels. Whether
                        you're learning to code, exploring new technologies, or
                        just looking for entertainment, Tube Search provides a
                        simple interface with curated video thumbnails to
                        streamline your browsing experience.
                    </p>

                  

                    
                </motion.div>

                {/* Search bar */}
                <motion.form
                    onSubmit={handleSearch}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex max-w-xl mx-auto mb-12"
                >
                    <input
                        type="text"
                        placeholder="Search for videos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow px-4 py-3 rounded-l-md border border-gray-600 bg-gray-600 text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-1"
                    />
                    <button
                        type="submit"
                        className="bg-accent-1 text-primary-bg px-6 rounded-r-md font-semibold hover:bg-opacity-80 transition"
                    >
                        Search
                    </button>
                </motion.form>

                {/* Video thumbnails grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {filteredVideos.length > 0 ? (
                        filteredVideos.map((video) => (
                            <motion.div
                                key={video.id}
                                className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-accent-1/50 transition-shadow"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                                        {video.duration}
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-text-primary font-semibold mb-1 line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">
                                        {video.channel}
                                    </p>
                                    <p className="text-text-secondary text-xs">
                                        {video.views}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-text-secondary col-span-full text-center mt-8">
                            No videos found for "{searchTerm}"
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
