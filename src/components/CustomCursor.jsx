import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-blue-500/30 pointer-events-none z-[99999] hidden md:block backdrop-blur-[1px]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.6 : 1,
                    borderColor: isHovering ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.2)',
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0)'
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.6 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-500 pointer-events-none z-[99999] hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0.5 : 1,
                }}
                transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
