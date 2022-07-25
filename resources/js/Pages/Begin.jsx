import { InertiaLink } from "@inertiajs/inertia-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Begin() {
    const [animateIn, setAnimateIn] = React.useState(true);

    return (
        <div className="relative overflow-clip w-full flex flex-col items-center justify-center min-h-screen bg-[#FDF4AF]">
            <AnimatePresence exitBeforeEnter>
                {
                    animateIn &&
                    <motion.div
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: [-100, 0], opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full flex flex-col items-center justify-center m-auto"
                    >
                        <img src="/images/logo_horizontal.svg" className="-ml-10" width="300" />
                        <div className="w-1/2">
                            <div>
                                <h1 className="text-center text-lg md:text-2xl mt-5">Selamat datang di Website LibNow. Silakan masuk untuk memulai sesi</h1>
                            </div>
                            <div className="w-full flex items-center justify-center mt-7">
                                <div>
                                    <InertiaLink href="/signin" className="text-center m-auto w-full ">
                                    <button onClick={() => setAnimateIn(false)} type="button" className="text-white w-full md:w-fit flex items-center justify-center bg-[#050708] focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:inline-flex hover:bg-transparent border-2 border-black transition-all duration-200 hover:text-black dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        <span className="ml-3">Masuk</span>
                                    </button>
                                    </InertiaLink>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}