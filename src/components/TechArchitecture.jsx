import { motion } from 'framer-motion';
import { Layers, Zap, Shield, GitBranch, Terminal } from 'lucide-react';
import { Reveal } from './index';

const TechArchitecture = () => {
    const principles = [
        {
            icon: <Layers className="text-blue-400" />,
            title: "Modular Frontend",
            description: "Component-based architecture using React and Vite for highly maintainable and scalable UIs."
        },
        {
            icon: <Terminal className="text-emerald-400" />,
            title: "Professional Backend",
            description: "RESTful API design with Java and Node.js, emphasizing security and performance."
        },
        {
            icon: <Zap className="text-yellow-400" />,
            title: "Optimized Performance",
            description: "Lazy loading, code splitting, and asset optimization for instantaneous load times."
        },
        {
            icon: <Shield className="text-purple-400" />,
            title: "Secure Auth",
            description: "JWT-based authentication and environment variable management for production-grade security."
        },
        {
            icon: <GitBranch className="text-red-400" />,
            title: "Modern DevOps",
            description: "CI/CD pipelines with GitHub Actions and automated deployments to Vercel/AWS."
        },
    ];

    return (
        <section id="architecture" className="py-24 bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight">System Blueprints</h2>
                    </Reveal>
                    <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.3)]"></div>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            A production-first mindset applied to every architecture layer, ensuring
                            enterprise reliability and infinite scalability.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] glass-card hover-lift group border border-slate-200 dark:border-slate-800/50"
                        >
                            <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 inline-block group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 shadow-inner border border-slate-200 dark:border-slate-800">
                                {item.icon}
                            </div>
                            <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-2">{item.title}</div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display tracking-tight group-hover:text-blue-500 transition-colors">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechArchitecture;
