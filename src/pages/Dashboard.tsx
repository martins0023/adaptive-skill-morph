
import React from 'react';
import Navigation from '../components/Navigation';
import ProgressCard from '../components/ProgressCard';
import { BookOpen, Target, TrendingUp, Users } from 'lucide-react';

const Dashboard = () => {
  const learningPaths = [
    {
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript basics with hands-on projects",
      progress: 75,
      status: 'in-progress' as const,
      difficulty: 'Beginner' as const
    },
    {
      title: "React & Modern Frontend",
      description: "Build dynamic user interfaces with React and modern tooling",
      progress: 100,
      status: 'completed' as const,
      difficulty: 'Intermediate' as const
    },
    {
      title: "Backend Development with Node.js",
      description: "Create APIs and server-side applications",
      progress: 30,
      status: 'in-progress' as const,
      difficulty: 'Intermediate' as const
    },
    {
      title: "Database Design & Management",
      description: "Learn SQL, NoSQL, and database optimization",
      progress: 0,
      status: 'locked' as const,
      difficulty: 'Advanced' as const
    },
    {
      title: "DevOps & Deployment",
      description: "Master CI/CD, Docker, and cloud deployment",
      progress: 0,
      status: 'locked' as const,
      difficulty: 'Advanced' as const
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to AI and ML concepts",
      progress: 0,
      status: 'locked' as const,
      difficulty: 'Advanced' as const
    }
  ];

  const stats = [
    {
      icon: BookOpen,
      label: "Modules Completed",
      value: "24",
      change: "+3 this week",
      color: "blue"
    },
    {
      icon: Target,
      label: "Current Streak",
      value: "12 days",
      change: "Keep it up!",
      color: "green"
    },
    {
      icon: TrendingUp,
      label: "Skill Level",
      value: "Intermediate",
      change: "75% to Advanced",
      color: "purple"
    },
    {
      icon: Users,
      label: "Cohort Rank",
      value: "#3",
      change: "Top 10%",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Dashboard</h1>
          <p className="text-gray-600">Track your progress and continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  stat.color === 'green' ? 'bg-green-100 text-green-600' :
                  stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Learning Path */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Learning Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <ProgressCard
                key={index}
                title={path.title}
                description={path.description}
                progress={path.progress}
                status={path.status}
                difficulty={path.difficulty}
              />
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Recommendations for You</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Recommended Next: API Design Patterns</h4>
              <p className="text-sm text-gray-600 mb-3">Based on your progress in Backend Development, mastering API patterns will accelerate your learning.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Start Module
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Join Study Group: React Best Practices</h4>
              <p className="text-sm text-gray-600 mb-3">Connect with 4 other learners in your cohort to review React patterns and share projects.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Join Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
