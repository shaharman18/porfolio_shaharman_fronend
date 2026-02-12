import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './index';
import { useState, useEffect } from 'react';
import api from '../api/axios';

const Hero = () => {
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const resumeRes = await api.get('/resume');
                if (resumeRes.data) {
                    // Points to your specific Render backend as a fallback
                    const baseUrl = import.meta.env.VITE_API_URL || 'https://porfolio-shaharman-backend.onrender.com';
                    setResumeUrl(`${baseUrl}/api/resume/view`);
                }
            } catch (err) {
                console.error("Failed to fetch data:", err);
            }
        };
        fetchResume();
    }, []);

    const name = "Shah Arman";
    const title = "MERN Stack Engineer";
    const tagline = "I build scalable web applications and dynamic systems.";

    return (
        <div id="home" className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
            <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-[150px] opacity-50 animate-blob animation-delay-4000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 font-display">
                            Available for Projects
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tighter mb-4 font-display leading-[0.9]">
                            {name}
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.3}>
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-emerald-600 dark:from-white dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent mb-8 font-display">
                            {title}
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <div className="flex justify-center items-center gap-6 text-sm md:text-base font-semibold text-slate-500 dark:text-slate-400 mb-12 uppercase tracking-widest">
                            <span>MERN Architecture</span>
                            <span className="w-1 h-1 rounded-full bg-blue-500/40"></span>
                            <span>Scalable Systems</span>
                            <span className="w-1 h-1 rounded-full bg-emerald-500/40"></span>
                            <span>Frontend Specialist</span>
                        </div>
                    </Reveal>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
                >
                    {tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="group px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-blue-500/10"
                    >
                        View Work
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href={resumeUrl || "/resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-10 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
                    >
                        Resume
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
