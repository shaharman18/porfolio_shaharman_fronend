import { motion } from 'framer-motion';
import { Layers, Shield, GitBranch, Terminal, Cpu, Cloud, Database } from 'lucide-react';
import { Reveal } from './index';

const TechArchitecture = () => {
    const principles = [
        {
            icon: <Layers className="w-10 h-10 text-indigo-400" />,
            title: "Frontend Excellence",
            tech: "React • Tailwind • Framer Motion",
            description: "Component-driven development ensuring modularity, reusability, and pixel-perfect responsiveness across all devices.",
            delay: 0
        },
        {
            icon: <Cpu className="w-10 h-10 text-emerald-400" />,
            title: "Performance Engineering",
            tech: "Lazy Loading • Code Splitting • caching",
            description: "Optimization strategies that guarantee sub-second load times and silky smooth 60fps animations.",
            delay: 0.1
        },
        {
            icon: <Shield className="w-10 h-10 text-rose-400" />,
            title: "Enterprise Security",
            tech: "JWT • HTTPS • Input Validation",
            description: "Implementing defense-in-depth strategies to protect user data and ensure system integrity.",
            delay: 0.2
        },
        {
            icon: <Database className="w-10 h-10 text-blue-400" />,
            title: "Data Architecture",
            tech: "MongoDB • Schema Design • Indexing",
            description: "Scalable data modeling that handles complex relationships while maintaining query efficiency.",
            delay: 0.3
        },
        {
            icon: <Cloud className="w-10 h-10 text-sky-400" />,
            title: "Cloud Infrastructure",
            tech: "Vercel • AWS • CI/CD",
            description: "Automated deployment pipelines and serverless architecture for effortless scalability.",
            delay: 0.4
        },
        {
            icon: <Terminal className="w-10 h-10 text-amber-400" />,
            title: "API Design",
            tech: "REST • Express • Documentation",
            description: "Intuitive, self-documenting APIs built for developer experience and long-term maintainability.",
            delay: 0.5
        }
    ];

    return (
        <section id="architecture" className="py-32 bg-slate-50 dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold mb-6 border border-slate-200 dark:border-slate-700">
                            <GitBranch size={16} />
                            <span>Engineering Principles</span>
                        </div>
                    </Reveal>
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight leading-tight">
                            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-500">Architecture</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            Every project is built on a foundation of best practices, ensuring reliability,
                            maintainability, and performance at scale.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {principles.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <GitBranch size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-8 inline-flex p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">{item.title}</h3>

                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 font-display">
                                    {item.tech}
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechArchitecture;
