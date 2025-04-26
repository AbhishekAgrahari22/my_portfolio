import React from 'react';
import { motion } from 'framer-motion';

import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

const skillCards = [
  {
    title: "Web Developer",
    icon: FaLaptopCode,
    description: "Building responsive, modern web interfaces using React.js and Tailwind CSS."
  },
  {
    title: "Mobile App Developer",
    icon: FaMobileAlt,
    description: "Creating cross-platform mobile apps with Flutter that feel native and performant."
  },
  {
    title: "UI/UX Designer",
    icon: FaPalette,
    description: "Designing intuitive and engaging interfaces with user-focused design principles."
  }
];


const About = () => {
    return (
        <motion.section
            id='about'
            className="relative w-full min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 md:pt-30  md:px-20 py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col items-center text-start w-full max-w-7xl">
                {/* Text Section */}
                <div className="max-w-4xl mb-16">
                    <h2 className="text-xl font-semibold text-teal-400">INTRODUCTION</h2>
                    <h6 className="text-6xl font-extrabold text-white mb-6">Overview</h6>

                    <p className="text-lg leading-8 text-gray-300">
                        I’m a passionate frontend and mobile app developer skilled in <span className="text-blue-300">Flutter</span>, <span className="text-blue-300">React.js</span>, and <span className="text-blue-300">Tailwind CSS</span>. With a strong foundation in UI/UX design and cross-platform development, I build seamless, high-performance digital experiences.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        I also bring backend knowledge with experience in tools like <span className="text-blue-300">Firebase</span> and basic <span className="text-blue-300">Node.js</span>, allowing me to work comfortably across the full stack. I love solving problems, learning fast, and turning ideas into real-world solutions. Let’s create something meaningful together!
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {skillCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            className="relative bg-[#0f172a] rounded-2xl p-[2px] group transition-transform hover:scale-105 duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Gradient Border */}
                            <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-2xl p-[1px]">
                                <div className="bg-[#1e293b] rounded-2xl p-6 text-center h-[340px] w-[280px] flex flex-col justify-center items-center">
                                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border border-cyan-400 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md mb-6">
                                        <card.icon className="text-teal-400 text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-400 text-sm">{card.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default About;
