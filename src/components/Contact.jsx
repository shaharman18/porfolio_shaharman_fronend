import { useState } from 'react';
import api from '../api/axios';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Reveal } from './index';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const email = "shaharman604@gmail.com";
    const phone = "+91 7710046759";
    const location = "Thane, Maharashtra, India";
    const github = "https://github.com/shaharman18";
    const linkedin = "https://www.linkedin.com/in/shah-arman-696598269/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status.type === 'loading') return;

        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            const res = await api.post('/contact', formData);
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you shortly.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('Contact Error:', err);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
        }
    };

    return (
        <section id="contact" className="py-32 bg-slate-50 dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Info */}
                    <div>
                        <Reveal width="100%">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
                                <MessageSquare size={16} />
                                <span>Get in Touch</span>
                            </div>
                        </Reveal>
                        <Reveal width="100%">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight leading-tight">
                                Let's Build Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Extraordinary</span>
                            </h2>
                        </Reveal>
                        <Reveal width="100%">
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-12">
                                Check out my GitHub for more projects or connect with me on LinkedIn. I'm always open to discussing new opportunities.
                            </p>
                        </Reveal>

                        <div className="space-y-8">
                            <motion.a
                                href={`mailto:${email}`}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Me</div>
                                    <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{email}</div>
                                </div>
                            </motion.a>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Call Me</div>
                                    <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{phone}</div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</div>
                                    <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{location}</div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all hover:-translate-y-1">
                                <Github size={24} />
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                            <MessageSquare size={180} />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all font-medium resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.type === 'loading'}
                                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                            >
                                {status.type === 'loading' ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl text-sm font-bold text-center ${status.type === 'error'
                                            ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                                            : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                                        }`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
