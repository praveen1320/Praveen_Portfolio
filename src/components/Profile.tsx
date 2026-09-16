import { motion, type Variants } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    Code2,
    Mail,
} from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import profileImage from "../assets/profile.png";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants : Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const Profile = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 py-20"
        >
            {/* Background glows */}
            <div className="pointer-events-none absolute left-[15%] top-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-[10%] right-[10%] -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[140px]" />

            <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Intro */}
                    <motion.p
                        variants={itemVariants}
                        className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
                    >
                        <span className="h-px w-8 bg-cyan-400" />
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        Praveen
                        <span className="block text-slate-400">
                            Arulmozhi
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        variants={itemVariants}
                        className="mt-7 text-2xl font-semibold text-slate-100 sm:text-3xl"
                    >
                        Frontend Developer
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-3 text-base font-semibold text-cyan-400 sm:text-lg"
                    >
                        React.js • React Native • TypeScript
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
                    >
                        Frontend Developer with 4+ years of experience building
                        scalable, high-performance web and mobile applications
                        using React.js, React Native, TypeScript, and modern
                        frontend technologies.
                    </motion.p>

                    {/* Small info */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
                    >
                        <span className="flex items-center gap-2">
                            <Code2 size={16} className="text-cyan-400" />
                            Web & Mobile Development
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-700" />

                        <span>4+ Years Experience</span>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                            View My Work

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </motion.a>

                        <motion.a
                            href="/Praveen_Resume.pdf"
                            download
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex items-center gap-3"
                    >
                        <motion.a
                            href="https://linkedin.com/in/praveenarulmozhi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ y: -3 }}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                            <BsLinkedin size={18} />
                        </motion.a>

                        <motion.a
                            href="mailto:praveencb1320@gmail.com"
                            aria-label="Email"
                            whileHover={{ y: -3 }}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                            <Mail size={19} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Profile Area */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                    className="hidden justify-center lg:flex"
                >
                    <div className="relative w-full max-w-sm">

                        {/* Background Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -inset-12 rounded-full bg-cyan-400/10 blur-[90px]"
                        />

                        {/* Profile Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                                ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="relative z-10 mx-auto mb-[-45px] h-50 w-50 overflow-hidden rounded-full border-4 border-slate-950 ring-2 ring-cyan-400/40 shadow-2xl shadow-cyan-400/10"
                        >
                            <img
                                src={profileImage}
                                alt="Praveen Arulmozhi"
                                className="h-full w-full object-cover object-top"
                            />
                        </motion.div>

                        {/* Technology Card */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 px-7 pb-7 pt-16 shadow-2xl shadow-black/20 backdrop-blur-xl"
                        >
                            {/* Subtle card highlight */}
                            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                            {/* Heading */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                        Specialization
                                    </p>

                                    <h3 className="mt-2 text-xl font-bold text-white">
                                        Frontend Engineering
                                    </h3>
                                </div>

                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.08 }}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10"
                                >
                                    <Code2
                                        size={21}
                                        className="text-cyan-400"
                                    />
                                </motion.div>
                            </div>

                            {/* Technologies */}
                            <div className="mt-7 space-y-3">
                                {[
                                    ["React.js", "Web"],
                                    ["React Native", "Mobile"],
                                    ["TypeScript", "Language"],
                                ].map(([technology, type], index) => (
                                    <motion.div
                                        key={technology}
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.65 + index * 0.12,
                                        }}
                                        whileHover={{
                                            x: 5,
                                            borderColor:
                                                "rgba(34,211,238,0.25)",
                                        }}
                                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors"
                                    >
                                        <span className="font-medium text-slate-200">
                                            {technology}
                                        </span>

                                        <span className="text-xs text-cyan-400">
                                            {type}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Experience */}
                            <div className="mt-6 border-t border-white/10 pt-5">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-4xl font-bold text-white">
                                            4+
                                        </p>

                                        <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                                            Years Experience
                                        </p>
                                    </div>

                                    <p className="text-right text-xs leading-5 text-slate-500">
                                        Airline & Airport
                                        <br />
                                        Solutions
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-cyan-400"
                aria-label="Scroll to About section"
            >
                <ArrowDown size={22} />
            </motion.a>
        </section>
    );
};

export default Profile;