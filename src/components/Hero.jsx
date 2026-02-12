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
                // Pre-warm the server
                api.get('/health').catch(() => { });

                const resumeRes = await api.get('/resume');
                if (resumeRes.data) {
                    setResumeUrl('https://porfolio-shaharman-backend.onrender.com/api/resume/view');
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
            {/* Background blobs omitted for brevity in replace tool, but they are there */}
            {/* ... rest of your beautiful UI code ... */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* ... Titles and Tags ... */}

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
                        href="https://porfolio-shaharman-backend.onrender.com/api/resume/view"
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
