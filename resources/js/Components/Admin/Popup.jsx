import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

export default function Popup({ title, open, status }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [10, -10,0], opacity: 1 }}
                    exit={{ y: [0, 20, -10], opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-lg p-10 fixed top-10 left-10 flex items-center z-40 bg-white`}
                    style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
                >
                    <div>
                        <p className="text-xl">{title}</p>
                    </div>
                    {
                        status ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <motion.path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, ease: 'easeInOut'}}/>
                    </svg>
                    :
                    <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <motion.path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, ease: 'easeInOut'}}/>
                    </motion.svg>
}
                </motion.div>)
            }
        </AnimatePresence>
    );
}