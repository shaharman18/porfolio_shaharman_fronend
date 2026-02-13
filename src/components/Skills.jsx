import { motion } from 'framer-motion';
import { Server, Database, Layout, Box, Cpu } from 'lucide-react';
import { Reveal } from './index';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            id: "frontend",
            icon: <Layout className="w-6 h-6" />,
            description: "Building responsive, interactive user interfaces with modern frameworks.",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            skills: [
                { name: "React.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 85 },
                { name: "Tailwind CSS", level: 95 },
                { name: "GSAP", level: 75 },
                { name: "Framer Motion", level: 80 },
                { name: "Redux Toolkit", level: 85 },
                { name: "HTML5/CSS3", level: 95 },
                { name: "Vite", level: 90 }
            ]
        },
        {
            title: "Backend Engineering",
            id: "backend",
            icon: <Server className="w-6 h-6" />,
            description: "Architecting robust server-side logic and scalable APIs.",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 90 },
                { name: "Java (Core)", level: 80 },
                { name: "Servlets & JSP", level: 75 },
                { name: "REST APIs", level: 95 },
                { name: "Authentication (JWT)", level: 90 },
                { name: "Microservices", level: 70 }
            ]
        },
        {
            title: "Database Management",
            id: "database",
            icon: <Database className="w-6 h-6" />,
            description: "Designing efficient schemas and managing data persistence.",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            skills: [
                { name: "MongoDB", level: 90 },
                { name: "PostgreSQL", level: 80 },
                { name: "MySQL", level: 85 },
                { name: "Mongoose", level: 90 },
                { name: "Redis", level: 60 }
            ]
        },
        {
            title: "DevOps & Tools",
            id: "tools",
            icon: <Box className="w-6 h-6" />,
            description: "Streamlining development workflows and deployment pipelines.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            skills: [
                { name: "Git & GitHub", level: 95 },
                { name: "Docker", level: 75 },
                { name: "AWS", level: 65 },
                { name: "Vercel / Netlify", level: 90 },
                { name: "Postman", level: 95 },
                { name: "VS Code", level: 100 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/10 opacity-60" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
                            <Cpu size={16} />
                            <span>Technical Proficiency</span>
                        </div>
                    </Reveal>
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Tech Arsenal</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            A carefully cultivated stack of modern technologies focused on performance, scalability, and developer experience.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/5 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl ${category.bg} ${category.color} ${category.border} border shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display text-left">{category.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium text-left mt-1">{category.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="relative p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 overflow-hidden group/pill cursor-default"
                                    >
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 ${category.bg.replace('/10', '/50')} transition-all duration-700 w-0 group-hover/pill:w-full`}
                                        />
                                        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover/pill:text-slate-900 dark:group-hover/pill:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
