
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { Brain, Users, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized content recommendations based on your learning style, goals, and progress.",
      color: 'blue' as const
    },
    {
      icon: Target,
      title: "Mastery-Based Progression",
      description: "Advance only after demonstrating true understanding of each concept.",
      color: 'green' as const
    },
    {
      icon: Users,
      title: "Collaborative Cohorts",
      description: "Join AI-matched learning groups for peer support and collaborative projects.",
      color: 'purple' as const
    },
    {
      icon: Award,
      title: "Digital Portfolio",
      description: "Build a verifiable portfolio of achievements and skills for career advancement.",
      color: 'orange' as const
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      content: "EduMorph helped me transition from marketing to tech. The personalized learning path and collaborative cohorts made all the difference.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80"
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Engineer",
      content: "The mastery-based approach ensured I truly understood each concept before moving forward. My confidence as a developer has skyrocketed.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      name: "Dr. Lisa Wang",
      role: "Data Scientist",
      content: "As someone returning to tech after years away, the adaptive learning system perfectly matched my pace and filled my knowledge gaps.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
    }
  ];

  const benefits = [
    "Learn at your own pace with adaptive content",
    "Build real projects for your professional portfolio",
    "Connect with peers and mentors in your field",
    "Earn verifiable badges and certifications",
    "Access career guidance and job placement support",
    "Continue learning with lifetime access to content"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduMorph?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with our innovative approach to personalized learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Learning Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of learners who have accelerated their careers with our adaptive learning platform. 
                Experience education that evolves with you.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" 
                alt="Learning with technology"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600">
              See how EduMorph has transformed careers and lives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community of learners and start your personalized education journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Learning Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">EduMorph</span>
              </div>
              <p className="text-gray-400">
                Transform education into a personalized journey that evolves with every learner.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2">
                <Link to="/dashboard" className="block text-gray-400 hover:text-white transition-colors">Dashboard</Link>
                <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</Link>
                <Link to="/community" className="block text-gray-400 hover:text-white transition-colors">Community</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduMorph. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
