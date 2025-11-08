import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const profilePhoto =
  'https://images.unsplash.com/photo-1603415526960-f7e0328d13aa?q=80&w=1200&auto=format&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 lg:pt-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center rounded-full border border-sky-300/40 dark:border-sky-500/30 bg-sky-50/60 dark:bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:text-sky-300 backdrop-blur">
            Fullstack Developer
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Aldi Mahardiansyah
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            I craft robust, scalable web applications with Laravel, PHP, JavaScript, and seamless system integrations. Passionate about clean code, delightful UX, and measurable impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@aldimahardiansyah.com"
              className="hover:text-gray-900 dark:hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] md:h-[560px]"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-sky-400/20 bg-gradient-to-b from-sky-50 to-white dark:from-sky-900/10 dark:to-transparent">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-950/80" />

          <motion.img
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            src={profilePhoto}
            alt="Aldi Mahardiansyah professional portrait"
            className="absolute -bottom-6 -left-6 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover ring-4 ring-white dark:ring-gray-900 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
