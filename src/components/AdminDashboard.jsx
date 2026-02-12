import { useState, useEffect } from 'react';
import api from '../api/axios';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit2, Save, X, Upload, User, Shield } from 'lucide-react';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [resume, setResume] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '', passcode: '' });
    const [isEditing, setIsEditing] = useState(null);
    const [newProject, setNewProject] = useState({
        id: '', title: '', category: '', problem: '', solution: '',
        tech: '', github: '', demo: '', features: '', featured: false, image: ''
    });
    const [profileUpdates, setProfileUpdates] = useState({ username: '', password: '' });

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            fetchProjects();
            fetchResume();
        }
    }, [isAuthenticated]);

    const checkAuth = async () => {
        try {
            const res = await api.get('/auth/status');
            setIsAuthenticated(res.data.isAuthenticated);
        } catch (err) {
            setIsAuthenticated(false);
        }
    };

    const fetchProjects = async () => {
        try {
            const res = await api.get('/projects');
            setProjects(res.data);
        } catch (err) {
            console.error('Failed to fetch projects');
        }
    };

    const fetchResume = async () => {
        try {
            const res = await api.get('/resume');
            setResume(res.data);
        } catch (err) {
            console.error('Failed to fetch resume');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/login', credentials);
            setIsAuthenticated(true);
        } catch (err) {
            alert(err.response?.data?.message || 'Login failed');
        }
    };

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
            setIsAuthenticated(false);
        } catch (err) {
            console.error('Logout failed');
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        const projectData = {
            ...newProject,
            tech: Array.isArray(newProject.tech) ? newProject.tech : newProject.tech.split(',').map(s => s.trim()),
            features: Array.isArray(newProject.features) ? newProject.features : newProject.features.split(',').map(s => s.trim()),
            id: isEditing ? newProject.id : newProject.title.toLowerCase().replace(/\s+/g, '-')
        };

        try {
            if (isEditing) {
                await api.put(`/projects/${isEditing}`, projectData);
            } else {
                await api.post('/projects', projectData);
            }
            setNewProject({ id: '', title: '', category: '', problem: '', solution: '', tech: '', github: '', demo: '', features: '', featured: false, image: '' });
            setIsEditing(null);
            fetchProjects();
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed');
        }
    };

    const handleEditClick = (project) => {
        setIsEditing(project._id);
        setNewProject({
            id: project.id,
            title: project.title,
            category: project.category,
            problem: project.problem,
            solution: project.solution,
            tech: project.tech.join(', '),
            github: project.github || '',
            demo: project.demo || '',
            features: project.features.join(', '),
            featured: project.featured || false,
            image: project.image || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setIsEditing(null);
        setNewProject({ id: '', title: '', category: '', problem: '', solution: '', tech: '', github: '', demo: '', features: '', featured: false, image: '' });
    };

    const handleDeleteProject = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;

        try {
            await api.delete(`/projects/${id}`);
            fetchProjects();
        } catch (err) {
            alert(err.response?.data?.message || 'Delete failed');
        }
    };

    const handleResumeUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('resume', file);
        try {
            await api.post('/resume/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            fetchResume();
            alert('Resume uploaded successfully!');
        } catch (err) {
            alert(err.response?.data?.message || 'Upload failed');
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await api.put('/auth/profile', profileUpdates);
            alert('Profile updated successfully!');
            setProfileUpdates({ username: '', password: '' });
        } catch (err) {
            alert(err.response?.data?.message || 'Update failed');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#030712] px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 w-full max-w-md"
                >
                    <form onSubmit={handleLogin} className="glass-card p-10 rounded-[2.5rem] border border-slate-800/50 shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-extrabold text-white mb-2 font-display tracking-tight">Lockdown Portal</h2>
                            <p className="text-slate-500 text-sm font-medium">Identity Verification Required</p>
                        </div>

                        <div className="mb-8 p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-500 text-[10px] text-center font-black uppercase tracking-[0.3em] animate-pulse">
                            Secure Encrypted Tunnel Active
                        </div>

                        <div className="space-y-4">
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-950/50 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                />
                            </div>
                            <input
                                type="password"
                                placeholder="Security Token (Password)"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-950/50 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                            />
                            <div className="pt-2">
                                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Master Authorization Key</label>
                                <input
                                    type="password"
                                    placeholder="••••••••••••"
                                    value={credentials.passcode}
                                    onChange={(e) => setCredentials({ ...credentials, passcode: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-950/50 border border-emerald-500/30 text-emerald-400 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-center tracking-widest uppercase"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full mt-8 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/5">
                            Authorize Session
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030712] text-white p-8 pt-24 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h1 className="text-4xl font-extrabold font-display tracking-tight bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Command Center</h1>
                        <p className="text-slate-500 font-medium mt-1">Portfolio Management & Security Oversight</p>
                    </div>
                    <button onClick={handleLogout} className="px-6 py-2.5 rounded-xl border border-slate-800 hover:bg-slate-900 transition-all font-bold text-slate-400 hover:text-white">
                        Terminate Session
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-8">
                        <section className="glass-card p-10 rounded-[2.5rem] border border-slate-800/50 shadow-xl">
                            <h2 className="text-xl font-extrabold mb-8 flex items-center gap-4 font-display">
                                <Upload className="text-emerald-500" /> Resume Key
                            </h2>
                            <div className="space-y-6">
                                {resume ? (
                                    <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Active Asset</p>
                                        <p className="text-white font-bold truncate">{resume.fileName}</p>
                                        <p className="text-[10px] text-slate-600 mt-2">Verified: {new Date(resume.updatedAt).toLocaleDateString()}</p>
                                    </div>
                                ) : (
                                    <div className="p-6 bg-slate-950/30 rounded-2xl border border-dashed border-slate-800 text-slate-600 font-medium text-center">No active resume.</div>
                                )}
                                <label className="block w-full text-center py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all cursor-pointer">
                                    Update PDF
                                    <input type="file" accept=".pdf" className="hidden" onChange={handleResumeUpload} />
                                </label>
                            </div>
                        </section>

                        <section className="glass-card p-10 rounded-[2.5rem] border border-slate-800/50 shadow-xl mt-8">
                            <h2 className="text-xl font-extrabold mb-8 flex items-center gap-4 font-display">
                                <Shield className="text-blue-500" /> Admin Profile
                            </h2>
                            <form onSubmit={handleUpdateProfile} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">New Username</label>
                                    <input
                                        type="text"
                                        placeholder="Enter new username"
                                        value={profileUpdates.username}
                                        onChange={(e) => setProfileUpdates({ ...profileUpdates, username: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-950/50 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        value={profileUpdates.password}
                                        onChange={(e) => setProfileUpdates({ ...profileUpdates, password: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-950/50 border border-slate-800 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    />
                                </div>
                                <button type="submit" className="w-full py-4 bg-blue-500/10 border border-blue-500/20 text-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all">
                                    Update Credentials
                                </button>
                            </form>
                        </section>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <section className="glass-card p-10 rounded-[2.5rem] border border-slate-800/50 shadow-xl">
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-2xl font-extrabold flex items-center gap-4 font-display tracking-tight">
                                    <Plus className="text-blue-500" /> Project Registry
                                </h2>
                                {isEditing && (
                                    <button onClick={handleCancelEdit} className="text-xs font-black text-rose-500 uppercase tracking-widest border-b border-rose-500/20 hover:border-rose-500 transition-all">
                                        Abort Edit
                                    </button>
                                )}
                            </div>

                            <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input type="text" placeholder="Project Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" required />
                                <input type="text" placeholder="Category" value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" required />
                                <textarea placeholder="Problem Statement" value={newProject.problem} onChange={(e) => setNewProject({ ...newProject, problem: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-medium outline-none focus:border-blue-500/50 md:col-span-2 h-32" required />
                                <textarea placeholder="Solution/Value" value={newProject.solution} onChange={(e) => setNewProject({ ...newProject, solution: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-medium outline-none focus:border-blue-500/50 md:col-span-2 h-32" required />
                                <input type="text" placeholder="Tech Stack (comma separated)" value={newProject.tech} onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" required />
                                <input type="text" placeholder="Features (comma separated)" value={newProject.features} onChange={(e) => setNewProject({ ...newProject, features: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" required />
                                <input type="text" placeholder="GitHub URL" value={newProject.github} onChange={(e) => setNewProject({ ...newProject, github: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" />
                                <input type="text" placeholder="Demo URL" value={newProject.demo} onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })} className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" />
                                <input type="text" placeholder="Image URL (e.g. /assets/mockups/p1.png)" value={newProject.image} onChange={(e) => setNewProject({ ...newProject, image: e.target.value })} className="md:col-span-2 px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500/50" />

                                <div className="md:col-span-2 flex items-center gap-4 px-6 py-5 bg-slate-950 border border-slate-800 rounded-2xl group">
                                    <input
                                        type="checkbox"
                                        id="featured"
                                        checked={newProject.featured}
                                        onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                                        className="w-6 h-6 rounded-lg bg-slate-900 border-slate-700 text-blue-500 focus:ring-blue-500 transition-all"
                                    />
                                    <label htmlFor="featured" className="text-slate-400 font-bold cursor-pointer group-hover:text-blue-400 transition-colors uppercase text-xs tracking-widest">Mark as Featured Masterpiece</label>
                                </div>

                                <button type="submit" className={`md:col-span-2 py-5 rounded-2xl font-black uppercase tracking-[0.3em] transition-all mt-4 flex items-center justify-center gap-4 shadow-xl ${isEditing ? 'bg-emerald-500 text-white shadow-emerald-500/10' : 'bg-blue-600 text-white shadow-blue-600/10'}`}>
                                    {isEditing ? <><Save /> Deploy Changes</> : <><Plus /> Register Project</>}
                                </button>
                            </form>

                            <div className="mt-16 space-y-4">
                                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Archive Registry</h3>
                                {projects.length === 0 ? (
                                    <div className="p-12 text-center border-2 border-dashed border-slate-800 rounded-[2.5rem] text-slate-600 font-bold uppercase tracking-widest">
                                        No Records Found
                                    </div>
                                ) : (
                                    projects.map(project => (
                                        <div key={project._id} className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                                            <div className="flex items-center gap-6">
                                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/50" />
                                                <div>
                                                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{project.category}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <button onClick={() => handleEditClick(project)} className="p-3 text-emerald-400 hover:bg-emerald-400/10 rounded-xl transition-all border border-slate-800/50 hover:border-emerald-400/30">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button onClick={() => handleDeleteProject(project._id)} className="p-3 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all border border-slate-800/50 hover:border-rose-500/30">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
