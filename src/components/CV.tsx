import { motion } from 'framer-motion';
import { Download, Award, Briefcase, Mail, Phone, MapPin, Globe, Github, Linkedin, Code, Languages, GraduationCap } from 'lucide-react';

export const CV = () => {
  const handleDownload = async () => {
    try {
      const pdfUrl = '/cv.pdf';  // This will be served from the public directory
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error('CV file not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'John_Doe_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Sorry, the CV file is not available at the moment. Please try again later.');
    }
  };

  return (
    <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          {/* Header Section */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h1>
                <h2 className="text-xl text-primary-400 font-medium">Senior Software Engineer</h2>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-primary-400 hover:bg-primary-500 text-white px-6 py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              >
                <Download className="h-5 w-5" />
                Download CV
              </button>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Globe className="h-4 w-4 text-primary-400" />
                <span>portfolio.example.com</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Summary Section */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Senior Software Engineer with 8+ years of experience in full-stack development, specializing in React, Node.js, and cloud technologies. 
                Proven track record of leading high-impact projects and mentoring junior developers. Strong focus on code quality, performance optimization, 
                and building scalable applications.
              </p>
            </section>

            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="h-6 w-6 text-primary-400" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineer</h4>
                  <div className="text-primary-400 font-medium mb-2">TechCorp Inc. • 2020 - Present</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Led the development of a microservices-based e-commerce platform serving 1M+ users</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    <li>Mentored 5 junior developers and conducted technical interviews</li>
                    <li>Optimized application performance resulting in 40% faster load times</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer</h4>
                  <div className="text-primary-400 font-medium mb-2">InnovateSoft • 2017 - 2020</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Developed and maintained multiple React-based web applications</li>
                    <li>Implemented real-time features using WebSocket technology</li>
                    <li>Reduced API response times by 50% through query optimization</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Junior Developer</h4>
                  <div className="text-primary-400 font-medium mb-2">StartupHub • 2015 - 2017</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Built responsive web interfaces using React and Bootstrap</li>
                    <li>Collaborated with UX team to implement design systems</li>
                    <li>Participated in agile development processes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6 text-primary-400" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Science in Computer Science</h4>
                  <div className="text-primary-400 font-medium mb-2">Stanford University • 2013 - 2015</div>
                  <p className="text-gray-600 dark:text-gray-300">Specialization in Machine Learning and Distributed Systems</p>
                </div>

                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Engineering</h4>
                  <div className="text-primary-400 font-medium mb-2">MIT • 2009 - 2013</div>
                  <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics • Dean's List</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Code className="h-6 w-6 text-primary-400" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Frontend Development</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Redux, React Query, Zustand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Tailwind CSS, Material-UI, Styled Components</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Backend Development</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Node.js, Express, NestJS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">PostgreSQL, MongoDB, Redis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">GraphQL, REST API Design</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">DevOps & Tools</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">AWS, Docker, Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">CI/CD, Jenkins, GitHub Actions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Terraform, Ansible</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Other Skills</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Agile Methodologies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Technical Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">System Design & Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-primary-400" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">AWS Solutions Architect Professional</h4>
                  <div className="text-gray-600 dark:text-gray-300">Amazon Web Services • 2022</div>
                </div>
                <div className="border-l-2 border-primary-400/20 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Google Cloud Professional Developer</h4>
                  <div className="text-gray-600 dark:text-gray-300">Google Cloud • 2021</div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Languages className="h-6 w-6 text-primary-400" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Languages</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">English (Native)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Spanish (Professional)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary-400 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Mandarin (Basic)</span>
                </div>
              </div>
            </section>

            {/* Social Links */}
            <section className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};