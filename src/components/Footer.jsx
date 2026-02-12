import { Link } from 'react-router-dom';

const Footer = () => {
    const name = "Shah Arman";
    const location = "Thane, Maharashtra, India";

    return (
        <footer className="py-16 glass-nav transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent font-display tracking-tight">
                        {name}
                    </div>
                    <div className="flex gap-10 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-12" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} {name}. Developed for the modern web.
                    </p>
                    <p className="text-xs text-blue-500/60 dark:text-blue-400/40 uppercase font-black tracking-[0.3em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse"></span>
                        {location}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
