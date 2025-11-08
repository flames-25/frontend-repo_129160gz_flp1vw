import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Duckbus',
    description:
      'A bus ticketing and fleet management platform featuring real-time schedules, seat selection, and admin analytics.',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop',
    link: '#',
    tech: ['Laravel', 'Livewire', 'MySQL', 'Tailwind'],
  },
  {
    title: 'Jarsensi',
    description:
      'Internal information system integrating multiple services with role-based access and audit logs.',
    image:
      'https://images.unsplash.com/photo-1529429612778-8a00b40f37aa?q=80&w=1400&auto=format&fit=crop',
    link: '#',
    tech: ['Laravel', 'REST API', 'Redis', 'Alpine.js'],
  },
  {
    title: 'Menabung.id',
    description:
      'Personal finance web app for saving goals, monthly budgeting, and secure authentication.',
    image:
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1400&auto=format&fit=crop',
    link: '#',
    tech: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    title: "de'Asasta",
    description:
      'Property booking and listing website with search filters, media galleries, and admin dashboard.',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop',
    link: '#',
    tech: ['Laravel', 'JavaScript', 'REST'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-sky-500" />
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-sky-300/40 dark:border-sky-500/30 bg-sky-50/60 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
