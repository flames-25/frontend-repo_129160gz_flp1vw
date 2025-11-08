import { motion } from 'framer-motion';

const skills = [
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'Livewire', level: 82 },
  { name: 'MySQL', level: 86 },
  { name: 'REST API', level: 90 },
];

export default function AboutSkills() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
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

          <div id="skills">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              Skills
            </motion.h3>

            <div className="mt-6 grid gap-4">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{s.level}%</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full rounded-full bg-gray-200/70 dark:bg-gray-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
