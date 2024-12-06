import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layout, Server } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend Development",
      icon: Layout,
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend Development",
      icon: Server,
      items: ["Node.js", "Express", "Python", "Java"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    },
    {
      category: "Other Technologies",
      icon: Code,
      items: ["Git", "Docker", "AWS", "GraphQL"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="space-y-3">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};