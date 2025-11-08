import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        >
          I am a fullstack web developer with over two years of experience building robust web systems. I specialize in Laravel, PHP, JavaScript, and modern web integrations. I enjoy transforming complex ideas into reliable, maintainable products—focusing on performance, security, and developer-friendly architecture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-6"
        >
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <li>• End-to-end web development: from RESTful APIs to polished UIs</li>
            <li>• Database design and optimization with MySQL</li>
            <li>• Real-time features and third‑party integrations</li>
            <li>• CI/CD and version control best practices</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
