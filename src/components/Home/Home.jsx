import React from 'react';
import { motion } from 'framer-motion';
import HomeAnime from '../ThreeDImg/HomeAnime';
import '../../Styles/WavyBackground.css';
import  Backpic from '../../assets/home-bg.png';
import Contact from '../Contact/Contact';
function Home() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#0f172a] text-white ">
        <img src={Backpic} alt="Background" className="absolute inset-0 w-full  object-cover opacity-10 z-0" />
            {/* 🌌 Custom Wavy Background */}
            {/* <div className="absolute inset-0 z-0">
                <div className="wavy-bg"></div>
            </div> */}

            {/* 🌧️ Rainy dots (simple and clean) */}
            <div className="rainy-dots">
                <div className="dot" style={{ left: '10%', animationDuration: '3s', animationDelay: '0s' }}></div>
                <div className="dot" style={{ left: '25%', animationDuration: '4s', animationDelay: '1s' }}></div>
                <div className="dot" style={{ left: '40%', animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
                <div className="dot" style={{ left: '55%', animationDuration: '4.5s', animationDelay: '0.2s' }}></div>
                <div className="dot" style={{ left: '70%', animationDuration: '3.2s', animationDelay: '0.7s' }}></div>
                <div className="dot" style={{ left: '85%', animationDuration: '5s', animationDelay: '1.2s' }}></div>
            </div>
            {/* 💬 Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center gap-10 px-6 pt-60">
                {/* 📝 Text Section with Visual Line */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex flex-row items-start gap-5"
                >
                    {/* 🔵 Dot + Gradient Line */}
                    <div className="flex flex-col justify-center items-center mt-2">
                        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
                        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent"></div>
                    </div>

                    {/* ✏️ Text Block */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                            Hi, I am Abhishek
                        </h1>
                        <p className="text-base md:text-xl text-gray-300">
                            I'm passionate about building clean and interactive experiences for the web and App. Let’s create something amazing together.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                  contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white py-3 px-6 rounded-full font-semibold shadow-lg"
                        >
                            Contact Me
                        </motion.button>
                    </div>
                </motion.div>

                {/* 🖼️ 3D Animation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md border border-white/10"
                >
                    <HomeAnime />
                </motion.div>
            </div>
        </div>
    );
}

export default Home;



// import React from 'react';
// import HomeAnime from '../ThreeDImg/HomeAnime';
// import './Home.css'; // Optional if you want to keep CSS separate
// import bgImg from '../../assets/67269.jpg';
// function Home() {
//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* 🔮 Animated Gradient Background */}
//             <div className="absolute inset-0 z-0 bg-gradient animate-bg" />

//             {/* 💬 Main Content */}
//             <div className="relative z-10 flex flex-col md:flex-row text-white w-full justify-between items-center gap-10 p-10 md:p-20">
//                 {/* 📝 Text Section */}
//                 <div className="md:w-1/2 md:pt-10 space-y-4">
//                     <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
//                         Hi, I am Abhishek
//                     </h1>
//                     <p className="text-sm md:text-2xl tracking-tight">
//                         I'm passionate about building clean and interactive experiences for the web.
//                         Let’s create something amazing together.
//                     </p>
//                     <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300 bg-[#465697] rounded-3xl font-semibold">
//                         Contact Me
//                     </button>
//                 </div>

//                 {/* 🖼 3D Section */}
//                 <div className="md:w-1/2 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
//                     <HomeAnime />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;
