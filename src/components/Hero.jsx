import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Sparkles, ChevronDown } from 'lucide-react';
import { Reveal } from './index';
import { useState, useEffect, useRef } from 'react';
import api from '../api/axios';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://porfolio-shaharman-backend.onrender.com';

// Floating particle component
const FloatingParticle = ({ delay, duration, x, y, size }) => (
    <motion.div
        className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/10"
        style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
        animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
        }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
);

// Typewriter effect for the tagline
const TypeWriter = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayText(text.slice(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    // Blink cursor then hide
                    setTimeout(() => setShowCursor(false), 2000);
                }
            }, 40);
            return () => clearInterval(interval);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return (
        <span>
            {displayText}
            {showCursor && <span className="animate-pulse text-blue-500">|</span>}
        </span>
    );
};

const Hero = () => {
    const [resumeUrl, setResumeUrl] = useState('');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        const fetchResume = async () => {
            try {
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

    // Generate random particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
    }));

    return (
        <div ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#030712] overflow-hidden transition-colors duration-300">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                {/* Particle grid */}
                <div className="absolute inset-0 particle-grid opacity-60" />

                {/* Morphing gradient blobs */}
                <motion.div
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-morph"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-400/25 via-teal-400/20 to-cyan-400/25 dark:from-emerald-900/25 dark:via-teal-900/20 dark:to-cyan-900/25 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-morph"
                    style={{ animationDelay: '3s' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-violet-400/20 to-indigo-400/20 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-morph"
                    style={{ animationDelay: '5s' }}
                />

                {/* Floating particles */}
                {particles.map((p, i) => (
                    <FloatingParticle key={i} {...p} />
                ))}
            </div>

            {/* Content */}
            <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Status badge */}
                <Reveal>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 mb-8"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
                            Available for opportunities
                        </span>
                    </motion.div>
                </Reveal>

                {/* Name */}
                <Reveal>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 dark:text-white leading-[1.05] tracking-tight"
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text-animated relative">
                            {name}
                            <Sparkles className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
                        </span>
                    </motion.h1>
                </Reveal>

                {/* Title with animated underline */}
                <Reveal>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 sm:mt-6"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 inline-block relative">
                            {title}
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </h2>
                    </motion.div>
                </Reveal>

                {/* Tagline with typewriter */}
                <Reveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium px-4"
                    >
                        <TypeWriter text={tagline} delay={1.2} />
                    </motion.p>
                </Reveal>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto group px-8 sm:px-10 py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 dark:shadow-white/10 relative overflow-hidden"
                    >
                        <span className="relative z-10">View Work</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.a>

                    {resumeUrl && (
                        <motion.a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto group px-8 sm:px-10 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                        >
                            <span className="relative z-10">Resume</span>
                            <Download className="w-5 h-5 relative z-10 group-hover:translate-y-0.5 transition-transform" />
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
                        </motion.a>
                    )}
                </motion.div>

                {/* Tech stack badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-14 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
                >
                    {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + i * 0.1 }}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/50 hover:text-blue-500 transition-all duration-300 cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-600" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
