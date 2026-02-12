import { motion } from 'framer-motion';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';
import { Reveal } from './index';

const About = () => {
    const aboutText = "I'm a dedicated developer with a focus on bridging the gap between robust backend architectures and modern, interactive frontend experiences. My journey involves creating reliable web systems and optimized user interfaces.";
    const degree = "B.Tech in Information Technology";
    const college = "Pillai College of Engineering";
    const focus = "Focusing on Full Stack Systems & Software Engineering";

    const highlights = [
        {
            icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
            title: "Education",
            description: `B.Tech IT student at Pillai College of Engineering. Maintaining a strong CGPA.`
        },
        {
            icon: <Code className="w-6 h-6 text-emerald-400" />,
            title: "Focus",
            description: "Fullstack MERN Stack Engineer specialized in building scalable, real-world web applications and enterprise systems."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
            title: "Mindset",
            description: "Passionate about problem-solving and building scalable, reliable systems."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-[#030712] overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                >
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight">Personal Narrative</h2>
                    </Reveal>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                    <Reveal width="100%">
                        <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            {aboutText}
                        </p>
                    </Reveal>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-[2rem] glass-card hover-lift transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 inline-block group-hover:scale-110 transition-transform shadow-inner border border-slate-200 dark:border-slate-800">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display tracking-tight">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                        <GraduationCap size={180} className="text-blue-500" />
                    </div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-extrabold text-white font-display tracking-tight">Academic Milestone</h3>
                            <div className="space-y-2">
                                <p className="text-xl text-blue-400 font-bold">{college}</p>
                                <p className="text-slate-300 font-semibold">{degree}</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                            <p className="text-slate-400 text-lg leading-relaxed italic">
                                "{focus}"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
