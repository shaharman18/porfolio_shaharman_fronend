import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Reveal = ({ children, width = "fit-content", delay = 0.25 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
