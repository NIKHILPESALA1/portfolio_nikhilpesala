import { Award, Trophy, Star, ArrowLeft, Calendar, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Achievements = () => {
  const certifications = [
    {
      title: "Introduction to Structured Query Language (SQL)",
      issuer: "Coursera",
      date: "2024",
      category: "Database",
      icon: <Award className="w-5 h-5" />,
      link: "https://www.coursera.org/account/accomplishments/verify/TQA423BAJTGG"
    },
    {
      title: "Microsoft Azure Fundamentals (DP-900)",
      issuer: "Microsoft",
      date: "2024",
      category: "Cloud Computing",
      icon: <Award className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/1Yi5jBviJXeya6RCqAk3hnA6utLs9INay/view"
    },
    {
      title: "DevOps Certification",
      issuer: "Oracle",
      date: "2025",
      category: "DevOps",
      icon: <Award className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/12g3Bil9GyIP0pnZzIXLPdEI32eJzH1El/view?usp=sharing"
    },
    {
      title: "Agile Scrum Fundamentals",
      issuer: "Infosys Springboard",
      date: "2024",
      category: "Project Management",
      icon: <Award className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/1-li4C2Q_QNsF76nWerLUnRTkawyLcf1t/view"
    },
    {
      title: "Cryptography I",
      issuer: "Coursera",
      date: "2024",
      category: "Security",
      icon: <Award className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/1yWZVz0GloWvN-aqYwdpaoAX0EkQRx58U/view"
    }
  ];

  const achievements = [
    {
      title: "Event Management Team",
      organization: "Mathematics Club, VIT Chennai",
      description: "Led event planning and coordination for mathematical competitions and workshops",
      date: "2023-2024",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "LeetCode Problem Solver",
      organization: "LeetCode Platform",
      description: "Successfully solved 350+ algorithmic problems across various difficulty levels",
      date: "Ongoing",
      icon: <Star className="w-5 h-5" />,
      link: "https://leetcode.com/u/NIKHIL_pesala/"
    }
  ];

  const academicAchievements = [
    {
      title: "High Academic Performance",
      description: "Maintained CGPA of 9.07 in Computer Science Engineering",
      institution: "VIT Chennai",
      date: "2022-Present"
    },
    {
      title: "Excellent Board Results",
      description: "Scored 93.5% in Class XII Board Examinations",
      institution: "Narayana Junior College",
      date: "2022"
    },
    {
    title: "Outstanding SSC Results (Class X)",
    description: "Secured 98.3% in Class X Final Board Examinations",
    institution: "Narayana Concept School, Nellore",
    date: "2020"
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
              <Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
              <Link to="/achievements" className="text-purple-400">Achievements</Link>
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
              Achievements & Certifications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional certifications, academic achievements, and leadership experiences.
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-yellow-500">
                        {cert.icon}
                        <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-400">
                          {cert.category}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-gray-300">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                    <Button asChild size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-blue-500" />
              Leadership & Activities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 text-blue-500 mb-2">
                      {achievement.icon}
                      <CardTitle className="text-white text-xl">
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-purple-300 font-medium">
                      {achievement.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      {achievement.date}
                    </div>
                    {achievement.link && (
                      <Button
                        asChild
                        size="sm"
                        className="mt-2 bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Profile
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-green-500" />
              Academic Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {academicAchievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl flex items-center gap-3">
                      <Star className="w-5 h-5 text-green-500" />
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-green-300 font-medium">
                      {achievement.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {achievement.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
