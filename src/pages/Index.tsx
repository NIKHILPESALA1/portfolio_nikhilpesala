
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Code, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const skills = {
    languages: ['Java', 'Python', 'C/C++', 'SQL'],
    web: ['HTML5', 'CSS3', 'JavaScript'],
    cloud: ['AWS (S3, Lambda)', 'REST APIs'],
    ml: ['scikit-learn', 'pandas', 'NumPy', 'matplotlib'],
    iot: ['ESP8266', 'Arduino', 'Sensors'],
    tools: ['Git', 'GitHub', 'Overleaf', 'Jupyter']
  };

  const projects = [
    {
      title: "File Compression (Java, Huffman)",
      date: "Oct 2024",
      description: "Multi-format compressor (PNG, JPEG, PDF, DOCX) with 40% text & 20% image reduction.",
      tech: ["Java", "Huffman Algorithm", "File Processing"]
    },
    {
      title: "Air Route Optimization (Python, BFS/DFS/UCS)",
      date: "Nov 2024",
      description: "Simulated routing under seasonal & fuel constraints: +15% efficiency.",
      tech: ["Python", "Graph Algorithms", "Optimization"]
    },
    {
      title: "News Aggregator (Python, AWS Lambda/S3)",
      date: "Nov 2024",
      description: "Low-latency pipeline ingesting News API → S3 via Lambda.",
      tech: ["Python", "AWS Lambda", "AWS S3", "News API"]
    },
    {
      title: "Honey Adulteration Detection (Python, ML)",
      date: "Mar 2025",
      description: "EDA & KNN models achieving 92% accuracy; full data pipeline & viz.",
      tech: ["Python", "Machine Learning", "KNN", "Data Analysis"]
    },
    {
      title: "Smart Plant Care (ESP8266, Arduino)",
      date: "Apr 2025",
      description: "Real-time soil/humidity sensing & automated irrigation dashboard.",
      tech: ["ESP8266", "Arduino", "IoT", "Sensors"]
    }
  ];

  const certifications = [
    "Introduction to Structured Query Language (SQL) (Coursera)",
    "Microsoft Azure (DP-900)",
    "Accenture Virtual Internship",
    "Agile Scrum Fundamentals (Infosys Springboard)",
    "Cryptography I (Coursera)"
  ];

  const achievements = [
    "Event Management Head, Mathematics Club",
    "Solved 300+ problems on LeetCode"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              NIKHIL PESALA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Computer Science Engineer | Full Stack Developer | AI/ML Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(+91)7207250339</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nikhilpesala4@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 pt-4">
              <a href="https://github.com/NIKHILPESALA1" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nikhilpesala/" target="_blank" rel="noopener noreferrer"
                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              Education
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl">VIT Chennai</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">B.Tech in CSE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">CGPA: 9.07</p>
                  <p className="text-sm text-gray-600">Sep 2022 - Present</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-xl">Narayana Junior College, Nellore</CardTitle>
                <CardDescription className="text-lg font-medium text-green-600">Class XI-XII</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">93.5%</p>
                  <p className="text-sm text-gray-600">Jul 2020 - Apr 2022</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-purple-600" />
              Technical Skills
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="capitalize text-lg">
                    {category === 'ml' ? 'ML & Data' : category === 'iot' ? 'IoT & Embedded' : category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-green-600" />
              Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{project.date}</Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-yellow-600" />
              Certifications & Achievements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Achievements & Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Mail className="w-8 h-8" />
              Get In Touch
            </h2>
            <p className="text-blue-100 text-lg">Let's discuss opportunities and collaborations</p>
          </div>
          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 text-lg font-medium">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/NIKHILPESALA1" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/nikhilpesala/" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:nikhilpesala4@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Nikhil Pesala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
