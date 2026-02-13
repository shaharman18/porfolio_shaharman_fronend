import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './index';
import { useState, useEffect } from 'react';
import api from '../api/axios';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://porfolio-shaharman-backend.onrender.com';

const Hero = () => {
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        const fetchResume = async () => {
            try {
                // Pre-warm the server
                api.get('/health').catch(() => { });

                const resumeRes = await api.get('/resume');
                if (resumeRes.data) {
                    setResumeUrl(`${BACKEND_URL}/api/resume/view`);
                }
            } catch (err) {
                console.error("Failed to fetch resume status:", err);
            }
        };
        fetchResume();
    }, []);

    const name = "Shah Arman";
    const title = "MERN Stack Engineer";
    const tagline = "I build scalable web applications and dynamic systems.";

    return (
        <div id="home" className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            {/* Background gradient blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <Reveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm sm:text-base tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold mb-4"
                    >
                        Welcome to my portfolio
                    </motion.p>
                </Reveal>

                <Reveal>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight"
                    >
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {name}
                        </span>
                    </motion.h1>
                </Reveal>

                <Reveal>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300"
                    >
                        {title}
                    </motion.h2>
                </Reveal>

                <Reveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        {tagline}
                    </motion.p>
                </Reveal>

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

                    {resumeUrl && (
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-10 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
                        >
                            Resume
                            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                    )}
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
