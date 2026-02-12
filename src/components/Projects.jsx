import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Layout, Send, Zap } from 'lucide-react';
import { Reveal } from './index';
import { useState, useEffect } from 'react';
import api from '../api/axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await api.get('/projects');
                setProjects(res.data);
            } catch (err) {
                console.error("Failed to fetch projects:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const getIcon = (category) => {
        switch (category) {
            case 'Frontend': return <Layout className="w-10 h-10 text-purple-400" />;
            case 'Full Stack': return <Send className="w-10 h-10 text-rose-400" />;
            case 'Game Dev': return <Zap className="w-10 h-10 text-yellow-400" />;
            default: return <BookOpen className="w-10 h-10 text-blue-400" />;
        }
    }

    return (
        <section id="projects" className="scroll-mt-32 py-24 bg-white dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    </Reveal>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                            Showcasing production-level architecture and real-world problem-solving
                            across Frontend and Backend domains.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id || project._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`flex flex-col ${project.featured ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 glass-card p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] hover-lift group`}
                        >
                            <div className="flex-1 space-y-6 md:space-y-8">
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 md:p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                                            {project.icon || getIcon(project.category)}
                                        </div>
                                        <span className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase font-display">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">{project.title}</h3>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                                        <h4 className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 md:mb-3">The Challenge</h4>
                                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.problem}</p>
                                    </div>
                                    <div className="p-5 md:p-6 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20">
                                        <h4 className="text-[10px] md:text-xs font-bold text-blue-500/80 uppercase tracking-widest mb-2 md:mb-3">The Solution</h4>
                                        <p className="text-sm md:text-base text-slate-800 dark:text-blue-100/90 leading-relaxed font-bold">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 text-[10px] md:text-xs font-bold rounded-lg md:rounded-xl border border-slate-200 dark:border-slate-800 transition-colors group-hover:border-blue-500/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 md:gap-8 pt-2 md:pt-4">
                                    <a href={project.github} className="flex items-center gap-2 md:gap-2.5 text-sm md:text-base text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all font-bold group/link">
                                        <Github className="w-4 h-4 md:w-5 md:h-5 group-hover/link:scale-110 transition-transform" />
                                        <span className="border-b-2 border-transparent group-hover/link:border-blue-500/50 transition-all">Source Code</span>
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} className="flex items-center gap-2 md:gap-2.5 text-sm md:text-base text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-all font-bold group/link">
                                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            <span className="border-b-2 border-transparent group-hover/link:border-emerald-500/50 transition-all">Live Preview</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 min-h-[250px] md:min-h-[300px] bg-slate-100/50 dark:bg-slate-900/40 rounded-3xl md:rounded-[2rem] p-6 md:p-10 border border-slate-200 dark:border-slate-800/50 flex flex-col justify-center relative overflow-hidden group-hover:bg-white/50 dark:group-hover:bg-slate-900 transition-all shadow-inner">
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            loading="lazy"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    )}
                                </div>
                                <div className="relative z-10 space-y-4 md:space-y-6">
                                    <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                                        System Architecture
                                    </div>
                                    <ul className="space-y-3 md:space-y-4">
                                        {project.features.map((feature, i) => (
                                            <li key={feature} className="flex items-start gap-3 md:gap-4 text-slate-900 dark:text-slate-200 font-bold text-base md:text-xl leading-tight">
                                                <div className="mt-1.5 md:mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
