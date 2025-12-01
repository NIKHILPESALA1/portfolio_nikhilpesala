import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Automated Meeting Summarizer",
      date: "2025",
      description: [
        "Built a pipeline to transcribe and summarize meetings using GenAI and NLP.",
        "Configured CI/CD: GitHub pushes trigger Jenkins pipelines.",
        "Automated creation of summarized file objects in Salesforce for real-time insights.",
        "Improved meeting follow-up efficiency by 40%."
      ],
      tech: ["GenAI", "Salesforce", "Jenkins", "GitHub"],
      category: "GenAI & Salesforce",
      code: null,
      demo: null
    },
    {
      title: "Spotify Playlist Automation",
      date: "2025",
      description: [
        "Automated daily playlist updates, fetching the latest songs from selected artists.",
        "Dockerized PowerShell script integrated with Jenkins for CI/CD scheduling."
      ],
      tech: ["Docker", "Jenkins", "Spotify API"],
      category: "Automation",
      code: "https://github.com/NIKHILPESALA1/spotify_automation",
      demo: null
    },
    {
      title: "Honey Adulteration Detection",
      date: "2025",
      description: [
        "Designed ML models (LDA, KNN) achieving 92% classification accuracy.",
        "Reduced manual testing time by 60% through automated preprocessing and classification."
      ],
      tech: ["Python", "Machine Learning", "LDA", "KNN"],
      category: "Machine Learning",
      code: "https://github.com/NIKHILPESALA1/Adulteration_ML.git",
      demo: null
    },
    {
      title: "Dockerized Expense Tracker",
      date: "2025",
      description: [
        "Built a Dockerized Expense Tracker with a complete CI/CD pipeline using Jenkins.",
        "Integrated Prometheus and Grafana to monitor both application performance and Jenkins metrics.",
        "Enabled real-time observability and efficient deployment."
      ],
      tech: ["Docker", "Jenkins", "Prometheus", "Grafana"],
      category: "DevOps & Monitoring",
      code: "https://github.com/NIKHILPESALA1/my_expense_tracker",
      demo: null
    },
    {
      title: "Advanced RAG Optimization Module",
      description: [
          "Built a plug-and-play module that upgrades any Naive RAG system into an Advanced RAG pipeline."
          "Implemented hybrid retrieval (Vector + BM25), reranking, chunk compression, and freshness-aware scoring."
          "Added hallucination reduction techniques, grounding prompts, and citation-based verification."
          "Designed modular architecture enabling seamless connection/disconnection without modifying core RAG logic."
        ],
        tech: ["Python","Chroma DB", "BM25", "LLM'S", "RAG"],
        category: "Artificial Intelligence",
        code: "https://github.com/NIKHILPESALA1/ADVANCE-RAG-MODULE",
        demo:null
        
    },
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
              A collection of my technical projects showcasing skills in GenAI, automation, machine learning, DevOps, and monitoring.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    <ul className="list-disc list-inside space-y-1">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
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
