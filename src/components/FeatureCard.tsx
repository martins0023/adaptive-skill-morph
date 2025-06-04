
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color = 'blue' 
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
