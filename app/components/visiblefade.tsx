"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  direction?: "left" | "right";
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, direction = "left" }) => {
  const xOffset = direction === "left" ? -50 : 50; 

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
