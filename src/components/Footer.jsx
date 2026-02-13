import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-12 bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-display">
                            Shah Arman
                        </span>
                        <span className="hidden md:inline-block w-px h-6 bg-slate-200 dark:bg-slate-800" />
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://github.com/shaharman18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://www.linkedin.com/in/shah-arman-696598269/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="mailto:shaharman604@gmail.com"
                            className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                        >
                            <Mail size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
