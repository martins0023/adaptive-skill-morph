
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Education into a
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Personalized Journey</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                EduMorph provides adaptive, mastery-based learning that evolves with every learner. 
                Chart your skill growth with AI-powered recommendations and collaborative cohorts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Learning Modules</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">250+</div>
                <div className="text-sm text-gray-600">Skill Badges</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                alt="Person learning with laptop"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-2xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
