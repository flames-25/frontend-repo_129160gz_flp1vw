import { motion } from 'framer-motion';

const skills = [
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'Livewire', level: 82 },
  { name: 'MySQL', level: 86 },
  { name: 'REST API', level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
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
    </section>
  );
}
