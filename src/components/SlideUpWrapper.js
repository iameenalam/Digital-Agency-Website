// src/components/SlideUpWrapper.js
import React from 'react';
import { motion } from 'framer-motion';

const slideUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SlideUpWrapper = ({ children }) => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
      {children}
    </motion.div>
  );
};

export default SlideUpWrapper;
