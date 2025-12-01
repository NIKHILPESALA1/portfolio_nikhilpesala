import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">NIKHIL PESALA</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
              <Link to="/achievements" className="hover:text-purple-400 transition-colors">Achievements</Link>
              <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-purple-500">
  <img 
    src="/Screenshot 2025-11-28 181136.png" 
    alt="Nikhil Pesala" 
    className="w-full h-full object-cover"
  />
</div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              NIKHIL PESALA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">Computer Science Engineer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              <span>(+91) 7207250539</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              <span>nikhilpesala4@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/NIKHILPESALA1" target="_blank" rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/nikhilpesala/" target="_blank" rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:nikhilpesala4@gmail.com" target="_blank" rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-4 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Contact Me
              </Button>
            </Link>
            <a href="https://drive.google.com/file/d/1RAexEam0qnNuhGvVbFgnbg4jrtN_njZa/view?usp=drive_link"
              target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                View Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I'm a Computer Science Engineering student at VIT Chennai with a passion for full-stack development
            and AI/ML technologies. I love building innovative solutions and exploring new technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Education Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="text-left">
                <div className="mb-4">
                  <h4 className="font-semibold">VIT Chennai</h4>
                  <p className="text-purple-300">B.Tech in CSE</p>
                  <p className="text-sm text-gray-400">CGPA: 9.07 | Sep 2022 - Present</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Narayana Junior College, Nellore</h4>
                  <p className="text-purple-300">Class XI-XII</p>
                  <p className="text-sm text-gray-400">93.5% | Jul 2020 - Apr 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold">Narayana Concept School, Nellore</h4>
                  <p className="text-purple-300">Class X</p>
                  <p className="text-sm text-gray-400">98.3% | Jul 2019 - May 2020</p>
                </div>
              </div>
            </div>

            {/* Skills Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1 text-purple-300">Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'MySQL'].map((skill) => (
                      <span key={skill} className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-purple-300">DevOps:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Jenkins', 'Grafana', 'Prometheus', 'Terraform'].map((skill) => (
                      <span key={skill} className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-purple-300">Cloud:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS (S3, Lambda)'].map((skill) => (
                      <span key={skill} className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Some of my projects include:
            <br />
            - Expense Tracker (Docker, Jenkins, Prometheus, Grafana)
            <br />
            - Spotify Playlist Automation (Docker, Jenkins)
            <br />
            - Automated Meeting Summarizer (GenAI, Salesforce, Jenkins)
          </p>
          <Link to="/projects">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
