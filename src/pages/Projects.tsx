import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "File Compression (Java, Huffman)",
      date: "Oct 2024",
      description: "Multi-format compressor (PNG, JPEG, PDF, DOCX) with 40% text & 20% image reduction using advanced Huffman algorithm implementation.",
      tech: ["Java", "Huffman Algorithm", "File Processing", "Data Compression"],
      category: "Algorithm Implementation",
      code: "https://github.com/NIKHILPESALA1/file-compression", // replace with your actual link
      demo: null
    },
    {
      title: "Air Route Optimization (Python, BFS/DFS/UCS)",
      date: "Nov 2024",
      description: "Intelligent routing system simulating air travel under seasonal & fuel constraints, achieving +15% efficiency through advanced graph algorithms.",
      tech: ["Python", "Graph Algorithms", "Optimization", "BFS/DFS", "UCS"],
      category: "Algorithm & Optimization",
      code: null,
      demo: null
    },
    {
      title: "News Aggregator (Python, AWS Lambda/S3)",
      date: "Nov 2024",
      description: "Scalable low-latency pipeline ingesting real-time news data from News API and storing in AWS S3 via Lambda functions.",
      tech: ["Python", "AWS Lambda", "AWS S3", "News API", "Cloud Computing"],
      category: "Cloud & Backend",
      code: "https://github.com/NIKHILPESALA1/newsaggregator",
      demo: null
    },
    {
      title: "Honey Adulteration Detection (Python, ML)",
      date: "Mar 2025",
      description: "Complete ML pipeline with EDA & KNN models achieving 92% accuracy in detecting honey adulteration with comprehensive data visualization.",
      tech: ["Python", "Machine Learning", "KNN", "Data Analysis", "scikit-learn"],
      category: "Machine Learning",
      code: "https://github.com/NIKHILPESALA1/Adulteration_ML.git",
      demo: null
    },
    {
      title: "Smart Plant Care (ESP8266, Arduino)",
      date: "Apr 2025",
      description: "IoT-based automated plant care system with real-time soil/humidity sensing and automated irrigation with web dashboard.",
      tech: ["ESP8266", "Arduino", "IoT", "Sensors", "Web Dashboard"],
      category: "IoT & Embedded",
      code: null, // replace with your actual repo
      demo: "https://drive.google.com/file/d/1vwVe-n7i9bP4x4BewPyOZrCm8CMBQEkC/view?usp=drivesdk"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">NIKHIL PESALA</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/projects" className="text-purple-400">Projects</Link>
              <Link to="/achievements" className="hover:text-purple-400 transition-colors">Achievements</Link>
              <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my technical projects showcasing skills in algorithms, web development, machine learning, and IoT.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-purple-300 border-purple-400 mb-2">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-gray-400 border-gray-500">
                      {project.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-purple-600/30 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.code && (
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white flex-1" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
