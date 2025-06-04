
import React from 'react';
import { Award, Calendar } from 'lucide-react';

interface BadgeCardProps {
  title: string;
  description: string;
  dateEarned: string;
  category: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

const BadgeCard: React.FC<BadgeCardProps> = ({ 
  title, 
  description, 
  dateEarned, 
  category,
  level 
}) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Bronze':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Silver':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Platinum':
        return 'bg-purple-100 text-purple-800 border-purple-200';
    }
  };

  const getBadgeIcon = () => {
    switch (level) {
      case 'Bronze':
        return 'text-amber-600';
      case 'Silver':
        return 'text-gray-600';
      case 'Gold':
        return 'text-yellow-600';
      case 'Platinum':
        return 'text-purple-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-full bg-gradient-to-br ${getLevelColor()}`}>
          <Award className={`w-6 h-6 ${getBadgeIcon()}`} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor()}`}>
              {level}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{dateEarned}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;
