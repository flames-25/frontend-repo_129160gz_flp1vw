import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m open to freelance projects, collaborations, and full‑time opportunities. Feel free to reach out and I’ll get back to you soon.
              </p>
              <div className="mt-6 space-y-3">
                <a href="mailto:contact@aldimahardiansyah.com" className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-sky-600">
                  <Mail className="h-5 w-5" /> contact@aldimahardiansyah.com
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-sky-600">
                  <Github className="h-5 w-5" /> github.com/aldimahardiansyah
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-sky-600">
                  <Linkedin className="h-5 w-5" /> linkedin.com/in/aldimahardiansyah
                </a>
              </div>
            </div>
            <div className="mt-8 rounded-xl p-4 bg-gradient-to-r from-sky-500/10 to-indigo-600/10 border border-sky-500/20">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Looking to build something impactful? Let’s discuss how we can bring your ideas to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
