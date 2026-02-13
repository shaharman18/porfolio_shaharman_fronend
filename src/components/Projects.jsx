import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Layout, Send, Zap, Star } from 'lucide-react';
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
            case 'Frontend': return <Layout className="w-6 h-6" />;
            case 'Full Stack': return <Send className="w-6 h-6" />;
            case 'Game Dev': return <Zap className="w-6 h-6" />;
            default: return <BookOpen className="w-6 h-6" />;
        }
    }

    const SkeletonCard = () => (
        <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-[2rem] bg-slate-100 dark:bg-slate-900/50 animate-pulse">
            <div className="flex-1 space-y-4">
                <div className="h-8 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
            <div className="flex-1 h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
        </div>
    );

    return (
        <section id="projects" className="py-32 bg-slate-50 dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6">
                            <Star size={16} />
                            <span>Selected Work</span>
                        </div>
                    </Reveal>
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight leading-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Projects</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            A showcase of technical excellence, featuring full-stack applications, complex system architectures, and interactive user experiences.
                        </p>
                    </Reveal>
                </div>

                <div className="flex flex-col gap-20">
                    {loading ? (
                        <>
                            <SkeletonCard />
                            <SkeletonCard />
                        </>
                    ) : (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id || project._id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`group relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                            >
                                {/* Project Content */}
                                <div className="flex-1 space-y-8 z-10 w-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                                                {project.icon || getIcon(project.category)}
                                            </div>
                                            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase font-display">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-indigo-500/30 transition-all">
                                            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                                                <span className="w-2 h-2 rounded-full bg-rose-500" /> Challenge
                                            </h4>
                                            <p>{project.problem}</p>
                                        </div>

                                        <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 dark:border-indigo-500/20">
                                            <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                                                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Solution
                                            </h4>
                                            <p className="text-slate-800 dark:text-indigo-100">{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 pt-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
                                        >
                                            <Github size={20} />
                                            <span>Source Code</span>
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl group/demo"
                                            >
                                                <ExternalLink size={20} className="group-hover/demo:text-indigo-500 transition-colors" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Visual */}
                                <div className="flex-1 w-full lg:h-[600px] h-[400px] relative rounded-[2.5rem] overflow-hidden group/visual ring-1 ring-slate-900/5 dark:ring-white/10 shadow-2xl skew-y-1 lg:group-hover:skew-y-0 transition-all duration-700 ease-out">
                                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800/50 animate-pulse lg:group-hover:animate-none transition-all" />
                                    {project.image && (
                                        <img
                                            src={
                                                project.image.startsWith('http')
                                                    ? project.image
                                                    : `${import.meta.env.VITE_API_URL || ''}${project.image}`
                                            }
                                            alt={project.title}
                                            className="w-full h-full object-cover transform lg:scale-105 lg:group-hover:scale-100 transition-transform duration-700 ease-out filter grayscale lg:grayscale-0"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Floating Feature Tags */}
                                    <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3 transform translate-y-10 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
