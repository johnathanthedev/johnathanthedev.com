"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeOnScrollProps } from "./FadeOnScroll.types";

export default function FadeOnScroll({ children, key }: FadeOnScrollProps) {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            key={key}
        >
            {children}
        </motion.div>
    );
}
