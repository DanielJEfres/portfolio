'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  direction?: "left" | "right";
  mobile?: boolean;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, direction = "left", mobile }) => {
  let xOffset = direction === "left" ? -100 : 100; 
  

  if (mobile) {
    xOffset = direction === "left" ? -0.5 : 0.5;
  }

  return (
    <motion.div
      initial={{ opacity: 0, }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;