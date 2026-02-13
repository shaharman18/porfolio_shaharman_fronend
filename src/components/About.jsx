import { motion } from 'framer-motion';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';
import { Reveal } from './index';

const About = () => {
    const aboutText = "I'm a dedicated developer bridge the gap between robust backend architectures and modern, interactive frontend experiences. My journey involves creating reliable web systems and optimized user interfaces.";
    const degree = "B.Tech in Information Technology";
    const college = "Pillai College of Engineering";
    const focus = "Focusing on Full Stack Systems & Software Engineering";

    const highlights = [
        {
            icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
            title: "Education",
            description: `B.Tech IT student at Pillai College of Engineering. Maintaining a strong CGPA.`,
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: <Code className="w-8 h-8 text-emerald-500" />,
            title: "Focus",
            description: "Fullstack MERN Stack Engineer specialized in building scalable real-world web applications.",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-fuchsia-500" />,
            title: "Mindset",
            description: "Passionate about problem-solving and building scalable, reliable systems.",
            bg: "bg-fuchsia-500/10",
            border: "border-fuchsia-500/20"
        }
    ];

    return (
        <section id="about" className="py-32 bg-slate-50 dark:bg-[#030712] overflow-hidden transition-colors duration-300 relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight leading-tight">
                                Personal <span className="text-blue-600 dark:text-blue-400">Narrative</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                                {aboutText}
                            </p>
                        </Reveal>

                        <div className="space-y-6">
                            <Reveal delay={0.2}>
                                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-blue-500/30 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">Academic Milestone</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">{college}</p>
                                            <div className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 px-3 py-1 rounded-lg inline-block">
                                                {degree}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30 transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                            <Code size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 transition-colors">Current Focus</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium italic">"{focus}"</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-2 shadow-2xl shadow-slate-200/50 dark:shadow-none group relative overflow-hidden`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className={`p-4 rounded-2xl ${item.bg} ${item.border} border group-hover:scale-110 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
