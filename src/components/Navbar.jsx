import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const name = "Shah Arman";
    const github = "https://github.com/shaharman18";
    const linkedin = "https://www.linkedin.com/in/shah-arman-696598269/";

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent font-display tracking-tight hover:scale-105 transition-transform inline-block">
                            {name}
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-2xl bg-white/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all hover:scale-110 border border-slate-200 dark:border-slate-700/50"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <div className="flex items-center space-x-5 border-l border-slate-200/50 dark:border-slate-800/50 pl-6">
                            <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-2xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900 border-b border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-800 mt-4 pt-4">
                                <div className="flex space-x-4">
                                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        <Github size={20} />
                                    </a>
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
