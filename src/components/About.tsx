import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Briefcase, Award } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: "2023",
      title: "Senior Developer",
      company: "Tech Innovators Inc.",
      description: "Leading development of enterprise applications",
      icon: Briefcase,
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Building scalable web applications",
      icon: Clock,
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Frontend development and UI/UX design",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code.
            With expertise in modern web technologies and a keen eye for design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With over 5 years of experience in web development, I've worked on various projects
                ranging from small business websites to large-scale enterprise applications.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized in React, Node.js, and modern web technologies. Passionate about
                creating responsive, user-friendly applications with clean, maintainable code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-purple-600 dark:text-purple-300 font-medium">
                        {item.year}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {item.company}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};