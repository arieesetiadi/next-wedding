import { type HTMLAttributes, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function EaseInOutDiv({ children, ...attrs }: Props) {
    return (
        // @ts-ignore
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            viewport={{ once: true }}
            {...attrs}>
            {children}
        </motion.div>
    );
}
