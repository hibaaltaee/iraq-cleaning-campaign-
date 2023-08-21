import { motion } from "framer-motion";
import useIntersectionObserver from "../app/useIntersectionObserver";
import { useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AnimateOnView = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed
    }
  );

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, translateY: 20 }}
      animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimateOnView;
