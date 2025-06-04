
import React from 'react';
import Navigation from '../components/Navigation';
import BadgeCard from '../components/BadgeCard';
import { ExternalLink, Github, Eye, Download, Share2 } from 'lucide-react';

const Portfolio = () => {
  const badges = [
    {
      title: "Frontend Master",
      description: "Completed advanced React and JavaScript modules with 95%+ scores",
      dateEarned: "2024-05-15",
      category: "Frontend Development",
      level: 'Gold' as const
    },
    {
      title: "Code Collaborator",
      description: "Successfully completed 5 peer review projects",
      dateEarned: "2024-05-10",
      category: "Teamwork",
      level: 'Silver' as const
    },
    {
      title: "Problem Solver",
      description: "Solved 50+ coding challenges with optimal solutions",
      dateEarned: "2024-04-28",
      category: "Algorithms",
      level: 'Bronze' as const
    },
    {
      title: "Design Thinker",
      description: "Created exceptional UI/UX in 3 projects",
      dateEarned: "2024-04-20",
      category: "Design",
      level: 'Platinum' as const
    }
  ];

  const projects = [
    {
      title: "Task Management App",
      description: "Full-stack React application with Node.js backend, featuring real-time updates and collaborative features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "2024-05-12"
    },
    {
      title: "E-commerce Platform",
      description: "Responsive e-commerce website with shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      technologies: ["React", "Express", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "2024-04-25"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with data visualization and location-based forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&q=80",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "2024-04-08"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold mb-2">Your Learning Portfolio</h1>
              <p className="text-blue-100">Showcase your achievements and projects to the world</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share Portfolio</span>
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Skills Mastered</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">JavaScript</span>
                <span className="text-sm font-medium text-green-600">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">React</span>
                <span className="text-sm font-medium text-green-600">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Node.js</span>
                <span className="text-sm font-medium text-blue-600">Intermediate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database Design</span>
                <span className="text-sm font-medium text-blue-600">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Learning Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Hours</span>
                <span className="text-sm font-medium text-gray-900">240h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Projects Completed</span>
                <span className="text-sm font-medium text-gray-900">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Badges Earned</span>
                <span className="text-sm font-medium text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Peer Reviews</span>
                <span className="text-sm font-medium text-gray-900">15</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Career Progress</h3>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">Ready for Junior Developer Role</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="text-xs text-gray-500 text-center">Complete 2 more advanced projects to reach 100%</div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Achievement Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {badges.map((badge, index) => (
              <BadgeCard
                key={index}
                title={badge.title}
                description={badge.description}
                dateEarned={badge.dateEarned}
                category={badge.category}
                level={badge.level}
              />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {project.completedDate}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm text-center hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm text-center hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
