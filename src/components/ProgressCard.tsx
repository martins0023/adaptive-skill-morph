
import React from 'react';
import { CheckCircle, Circle, Lock } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  description: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'locked';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const ProgressCard: React.FC<ProgressCardProps> = ({ 
  title, 
  description, 
  progress, 
  status,
  difficulty 
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'in-progress':
        return <Circle className="w-6 h-6 text-blue-600" />;
      case 'locked':
        return <Lock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className={`p-6 rounded-lg border-2 transition-all cursor-pointer hover:shadow-lg ${
      status === 'locked' 
        ? 'bg-gray-50 border-gray-200' 
        : 'bg-white border-gray-200 hover:border-blue-300'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            {getStatusIcon()}
            <h3 className={`font-semibold ${status === 'locked' ? 'text-gray-500' : 'text-gray-900'}`}>
              {title}
            </h3>
          </div>
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getDifficultyColor()}`}>
            {difficulty}
          </span>
        </div>
      </div>
      
      <p className={`text-sm mb-4 ${status === 'locked' ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
      
      {status !== 'locked' && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium text-gray-900">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressCard;
