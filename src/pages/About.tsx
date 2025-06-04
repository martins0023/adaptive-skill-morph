
import React from 'react';
import Navigation from '../components/Navigation';
import FeatureCard from '../components/FeatureCard';
import { Brain, Users, Target, Award, Zap, Globe, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Advanced machine learning algorithms analyze your learning patterns to suggest personalized content, projects, and study paths that match your goals and learning style.",
      color: 'blue' as const
    },
    {
      icon: Target,
      title: "Mastery-Based Progression",
      description: "Move at your own pace through granular competencies. Each module builds upon the previous, ensuring solid understanding before advancing to new concepts.",
      color: 'green' as const
    },
    {
      icon: Users,
      title: "Collaborative Cohorts",
      description: "Join AI-matched learning circles with peers at similar levels. Engage in group projects, peer reviews, and mentorship sessions for enhanced learning.",
      color: 'purple' as const
    },
    {
      icon: Award,
      title: "Digital Portfolio & Badges",
      description: "Collect verifiable badges and build a comprehensive portfolio of your projects and achievements that you can share with employers and institutions.",
      color: 'orange' as const
    },
    {
      icon: Zap,
      title: "Dynamic Assessments",
      description: "Experience adaptive testing that adjusts difficulty based on your performance, ensuring you're always appropriately challenged and engaged.",
      color: 'blue' as const
    },
    {
      icon: Globe,
      title: "Lifelong Learning Ecosystem",
      description: "Continue learning beyond formal education with content that evolves with industry trends and your career progression.",
      color: 'green' as const
    }
  ];

  const principles = [
    {
      title: "Personalized Learning",
      description: "Every learner is unique. Our platform adapts to individual learning styles, paces, and goals."
    },
    {
      title: "Skill-Based Progression",
      description: "Focus on practical competencies rather than time-based curricula for meaningful skill development."
    },
    {
      title: "Community-Driven Growth",
      description: "Learn better together through peer collaboration, mentorship, and knowledge sharing."
    },
    {
      title: "Real-World Application",
      description: "Bridge the gap between learning and application with project-based assessments and portfolio building."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Learners" },
    { number: "1000+", label: "Learning Modules" },
    { number: "250+", label: "Skill Badges" },
    { number: "95%", label: "Completion Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Education for the <span className="text-blue-200">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              EduMorph is revolutionizing how we learn by creating personalized, adaptive, and collaborative educational experiences that evolve with every learner.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Problem & Solution */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge with Traditional Education</h2>
              <div className="space-y-4 text-gray-600">
                <p>Traditional education systems rely on one-size-fits-all curricula and fixed pacing, often leaving learners behind or unchallenged. This approach fails to support the diverse learning styles and paces that make each individual unique.</p>
                <p>Moreover, conventional education rarely adapts to the rapidly changing skill demands of the modern workforce, creating a disconnect between what is taught and what is needed in real-world applications.</p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" 
                alt="Traditional classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" 
                alt="Modern learning"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision: Adaptive Learning for All</h2>
              <div className="space-y-4 text-gray-600">
                <p>EduMorph transforms education into a continuous, adaptive journey that personalizes content, assessments, and social interactions to each learner's goals, style, and pace.</p>
                <p>By combining mastery-based progression with AI-driven recommendations and collaborative learning, we empower learners of all ages to chart their own educational path and demonstrate tangible skill growth over time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white py-12 px-8 rounded-2xl shadow-lg mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionizing Learning Through Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with proven educational methodologies to create an unprecedented learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Core Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Educational Principles</h2>
            <p className="text-xl text-gray-600">
              Built on research-backed methodologies and modern learning science
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology & Security */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Privacy & Security in Mind</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Data Privacy Protection</h3>
                    <p className="text-gray-600">GDPR and CCPA compliant with full data export and deletion capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Algorithmic Fairness</h3>
                    <p className="text-gray-600">Regular audits ensure our AI doesn't disadvantage any learner group</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent AI</h3>
                    <p className="text-gray-600">Explainable AI helps learners understand content recommendations</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80" 
                alt="Technology and security"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
