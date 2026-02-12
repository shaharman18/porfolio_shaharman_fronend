import { useState } from 'react';
import api from '../api/axios';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
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

        setStatus({ type: 'loading', message: 'Sending message... (Server may take 1 min to wake up)' });

        try {
            const res = await api.post('/contact', formData);
            setStatus({ type: 'success', message: res.data.message });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('Contact error:', err);
            let errorMsg = err.response?.data?.message || 'Failed to send message';

            if (err.code === 'ECONNABORTED' || err.message === 'Network Error') {
                errorMsg = 'Server is waking up (Render free tier). Please wait 1 minute and try again.';
            }

            setStatus({ type: 'error', message: errorMsg });
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-display tracking-tight">Get In Touch</h2>
                    </Reveal>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
                    <Reveal width="100%">
                        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium">
                            Interested in collaboration or have a project in mind? Let's connect and build something extraordinary.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="p-10 rounded-[2.5rem] glass-card shadow-2xl">
                            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 font-display tracking-tight">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                                        <Mail className="text-blue-500" />
                                    </div>
                                    <span className="text-slate-600 dark:text-slate-300 font-bold text-lg">{email}</span>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                                        <Phone className="text-emerald-500" />
                                    </div>
                                    <span className="text-slate-600 dark:text-slate-300 font-bold text-lg">{phone}</span>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                                        <MapPin className="text-rose-500" />
                                    </div>
                                    <span className="text-slate-600 dark:text-slate-300 font-bold text-lg">{location}</span>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6 font-display">Connect on Social</h4>
                                <div className="flex gap-4">
                                    <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-blue-600 transition-all border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-110">
                                        <Github />
                                    </a>
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 transition-all border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-110">
                                        <Linkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 p-10 rounded-[2.5rem] glass-card"
                        >
                            {status.message && (
                                <div className={`p-4 rounded-2xl text-sm font-bold ${status.type === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                                    status.type === 'success' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                                        'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                                    }`}>
                                    {status.message}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 font-display">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-all shadow-inner font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 font-display">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-all shadow-inner font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 font-display">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="Inquiry about project"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-all shadow-inner font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 font-display">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Your message here..."
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500/50 transition-all shadow-inner font-medium"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status.type === 'loading'}
                                className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/10 disabled:opacity-50"
                            >
                                {status.type === 'loading' ? 'Sending...' : 'Transmit Message'} <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
