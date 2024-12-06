import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              Creative
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                {" "}Developer{" "}
              </motion.span>
              & Designer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-300"
            >
              Crafting digital experiences that blend creativity with functionality.
              Specialized in building modern, responsive web applications.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button 
                onClick={() => navigate('/cv')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-500 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me <FileText className="w-5 h-5" />
              </motion.button>
              <motion.a 
                href="#contact" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-500 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <MessageCircle className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Social media links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:example@email.com" }
              ].map((social, index) => (
                <motion.a 
                  key={social.href}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-400"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: index % 2 === 0 ? 10 : -10,
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side animation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative w-[600px] h-[600px] hidden lg:block"
            style={{
              transform: `translateY(${Math.min(window.scrollY * 0.2, 200)}px)`,
              transition: 'transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)'
            }}
          >
            {/* Floating Particles Layer */}
            <div className="absolute inset-0 w-screen h-full -left-1/2">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * 600,
                  }}
                  animate={{
                    x: [
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                    ],
                    y: [
                      Math.random() * 600,
                      Math.random() * 600,
                    ],
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_4px_rgba(168,85,247,0.3)]" />
                </motion.div>
              ))}
            </div>

            {/* Contained Network Animation */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 100,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Core Circle */}
                <motion.div
                  className="absolute w-32 h-32"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/90 to-pink-500/90 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                  </div>
                </motion.div>

                {/* Orbiting Nodes */}
                {[...Array(18)].map((_, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute w-[450px] h-[450px]"
                    initial={{
                      rotate: i * (360 / 18),
                    }}
                    animate={{
                      rotate: [i * (360 / 18), i * (360 / 18) + 360],
                    }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute left-1/2 top-0 -translate-x-1/2 origin-bottom"
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Node */}
                      <div className="relative">
                        <div className="absolute top-0 -translate-x-1/2 w-4 h-4">
                          <motion.div 
                            className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.1,
                            }}
                          >
                            <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                          </motion.div>
                        </div>
                        
                        {/* Connection Line */}
                        <div className="absolute h-[225px] w-[1.5px] -translate-x-1/2 origin-bottom bg-gradient-to-b from-purple-500/80 to-transparent" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Inner Orbiting Nodes */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`inner-node-${i}`}
                    className="absolute w-[250px] h-[250px]"
                    initial={{
                      rotate: i * (360 / 12),
                    }}
                    animate={{
                      rotate: [i * (360 / 12), i * (360 / 12) - 360],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute left-1/2 top-0 -translate-x-1/2 origin-bottom"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Node */}
                      <div className="relative">
                        <div className="absolute top-0 -translate-x-1/2 w-3 h-3">
                          <motion.div 
                            className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-600 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.15,
                            }}
                          >
                            <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/40 to-transparent" />
                          </motion.div>
                        </div>
                        
                        {/* Connection Line */}
                        <div className="absolute h-[125px] w-[1px] -translate-x-1/2 origin-bottom bg-gradient-to-b from-purple-500/60 to-transparent" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-pink-500/5 to-transparent animate-pulse-slow" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};