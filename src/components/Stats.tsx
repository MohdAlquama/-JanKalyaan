import React from 'react';
import { Users, FileText, Award, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '10+',
      label: 'Beneficiaries',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      value: '50+',
      label: 'Active Schemes',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      value: '₹50K Cr',
      label: 'Benefits Distributed',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;