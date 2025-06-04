
import React from 'react';
import Navigation from '../components/Navigation';
import { Users, MessageSquare, Calendar, Star, Award, TrendingUp } from 'lucide-react';

const Community = () => {
  const cohorts = [
    {
      name: "Frontend Innovators",
      members: 12,
      description: "Advanced React developers working on cutting-edge projects",
      activity: "High",
      nextMeeting: "Tomorrow, 2:00 PM",
      level: "Advanced",
      joined: true
    },
    {
      name: "Full-Stack Builders",
      members: 8,
      description: "Learning end-to-end development with modern tech stacks",
      activity: "Medium",
      nextMeeting: "Friday, 3:30 PM",
      level: "Intermediate",
      joined: true
    },
    {
      name: "AI & ML Enthusiasts",
      members: 15,
      description: "Exploring machine learning and artificial intelligence",
      activity: "High",
      nextMeeting: "Monday, 7:00 PM",
      level: "Advanced",
      joined: false
    },
    {
      name: "Backend Architects",
      members: 10,
      description: "Mastering server-side development and system design",
      activity: "Medium",
      nextMeeting: "Wednesday, 4:00 PM",
      level: "Intermediate",
      joined: false
    }
  ];

  const discussions = [
    {
      title: "Best practices for React component optimization",
      author: "Sarah Chen",
      replies: 23,
      lastActivity: "2 hours ago",
      cohort: "Frontend Innovators",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      title: "Implementing JWT authentication in Node.js",
      author: "Marcus Rodriguez",
      replies: 15,
      lastActivity: "4 hours ago",
      cohort: "Full-Stack Builders",
      tags: ["Node.js", "Authentication", "Security"]
    },
    {
      title: "Introduction to TensorFlow for beginners",
      author: "Dr. Lisa Wang",
      replies: 31,
      lastActivity: "1 day ago",
      cohort: "AI & ML Enthusiasts",
      tags: ["TensorFlow", "Machine Learning", "Beginner"]
    },
    {
      title: "Database indexing strategies for high-traffic apps",
      author: "James Thompson",
      replies: 18,
      lastActivity: "2 days ago",
      cohort: "Backend Architects",
      tags: ["Database", "Performance", "Scaling"]
    }
  ];

  const mentors = [
    {
      name: "Alex Rivera",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Co.",
      specialties: ["React", "Node.js", "AWS"],
      rating: 4.9,
      sessions: 45,
      available: true
    },
    {
      name: "Dr. Emily Zhang",
      title: "ML Research Scientist",
      company: "AI Labs",
      specialties: ["Python", "TensorFlow", "Data Science"],
      rating: 4.8,
      sessions: 32,
      available: false
    },
    {
      name: "Michael Chen",
      title: "DevOps Engineer",
      company: "Cloud Systems Inc.",
      specialties: ["Docker", "Kubernetes", "CI/CD"],
      rating: 4.9,
      sessions: 28,
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Community</h1>
          <p className="text-gray-600">Connect, collaborate, and grow with fellow learners</p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2,547</div>
            <div className="text-sm text-gray-600">Active Learners</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,234</div>
            <div className="text-sm text-gray-600">Discussions</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Mentors</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                <Calendar className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">89</div>
            <div className="text-sm text-gray-600">Weekly Events</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Cohorts */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Learning Cohorts</h2>
              <div className="space-y-4">
                {cohorts.map((cohort, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{cohort.name}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            cohort.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                            cohort.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {cohort.level}
                          </span>
                          {cohort.joined && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              Joined
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{cohort.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{cohort.members} members</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{cohort.nextMeeting}</span>
                          </span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            cohort.activity === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {cohort.activity} Activity
                          </span>
                        </div>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        cohort.joined 
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                        {cohort.joined ? 'View' : 'Join'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Discussions */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Discussions</h2>
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        {discussion.title}
                      </h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        {discussion.lastActivity}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span>by {discussion.author}</span>
                      <span>in {discussion.cohort}</span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Featured Mentors */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Featured Mentors</h3>
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                        <p className="text-sm text-gray-600">{mentor.title}</p>
                        <p className="text-xs text-gray-500">{mentor.company}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${mentor.available ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{mentor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{mentor.sessions} sessions</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {mentor.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <button className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      mentor.available 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    }`}>
                      {mentor.available ? 'Book Session' : 'Unavailable'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">React Workshop</h4>
                    <p className="text-xs text-gray-600">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Code Review Session</h4>
                    <p className="text-xs text-gray-600">Friday, 3:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">AI/ML Meetup</h4>
                    <p className="text-xs text-gray-600">Monday, 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
