import { motion } from 'framer-motion';
import { Monitor, Server, Database, BrainCircuit, PenTool } from 'lucide-react';
import { Reveal } from './index';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Monitor className="text-blue-400" />,
            skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "GSAP", "Framer Motion", "Redux Toolkit"]
        },
        {
            title: "Backend",
            icon: <Server className="text-emerald-400" />,
            skills: ["Java (Core)", "Servlets & JSP", "Node.js", "Express.js", "REST APIs"]
        },
        {
            title: "Database",
            icon: <Database className="text-purple-400" />,
            skills: ["MySQL", "PostgreSQL", "MongoDB"]
        },
        {
            title: "Tools",
            icon: <PenTool className="text-red-400" />,
            skills: ["Git & GitHub", "VS Code", "Postman", "AWS", "Vercel"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight">Technical Arsenal</h2>
                    </Reveal>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium">
                            A specialized toolkit focused on creating high-performance web applications
                            and scalable enterprise architectures.
                        </p>
                    </Reveal>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="p-8 rounded-[2rem] glass-card hover-lift transition-all duration-500 group"
                        >
                            <div className="flex flex-col items-center text-center gap-5 mb-8">
                                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-inner group-hover:scale-110 transition-transform duration-500 border border-slate-200 dark:border-slate-800">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display tracking-tight">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-xl bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-500 transition-all duration-300 shadow-sm cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
