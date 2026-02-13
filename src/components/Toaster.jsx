import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const Toaster = forwardRef((props, ref) => {
    const [toasts, setToasts] = useState([]);

    useImperativeHandle(ref, () => ({
        addToast: (message, type = 'success', duration = 3000) => {
            const id = Date.now();
            setToasts(prev => [...prev, { id, message, type, duration }]);
        }
    }));

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(() => {
                setToasts(prev => prev.slice(1));
            }, toasts[0].duration);
            return () => clearTimeout(timer);
        }
    }, [toasts]);

    const removeToast = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    const getIcon = (type) => {
        switch (type) {
            case 'success': return <CheckCircle className="text-emerald-500" size={20} />;
            case 'error': return <AlertCircle className="text-rose-500" size={20} />;
            default: return <Info className="text-blue-500" size={20} />;
        }
    };

    const getStyles = (type) => {
        switch (type) {
            case 'success': return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500';
            case 'error': return 'bg-rose-500/10 border-rose-500/20 text-rose-500';
            default: return 'bg-blue-500/10 border-blue-500/20 text-blue-500';
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        layout
                        className={`min-w-[300px] p-4 rounded-xl border backdrop-blur-md shadow-xl flex items-center justify-between gap-4 ${getStyles(toast.type)}`}
                    >
                        <div className="flex items-center gap-3">
                            {getIcon(toast.type)}
                            <span className="font-bold text-sm tracking-wide">{toast.message}</span>
                        </div>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
});

Toaster.displayName = 'Toaster';

export default Toaster;
