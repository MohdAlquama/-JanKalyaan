import React from 'react';
import { 
  Users, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  ArrowRight,
  Calendar,
  MapPin,
  IndianRupee
} from 'lucide-react';

const FeaturedSchemes = () => {
  const schemes = [
    {
      id: 1,
      title: 'PM Kisan Samman Nidhi',
      category: 'Agriculture',
      description: 'Financial support to small and marginal farmers across India',
      benefit: '₹6,000 per year',
      beneficiaries: '12 Crore+',
      deadline: '31 March 2024',
      location: 'Pan India',
      icon: Users,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      tag: 'Most Popular'
    },
    {
      id: 2,
      title: 'Ayushman Bharat PMJAY',
      category: 'Health',
      description: 'Health insurance coverage for economically weaker sections',
      benefit: '₹5 Lakh coverage',
      beneficiaries: '50 Crore+',
      deadline: 'Open enrollment',
      location: 'Pan India',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      tag: 'High Impact'
    },
    {
      id: 3,
      title: 'National Scholarship Portal',
      category: 'Education',
      description: 'Scholarships for students from various backgrounds',
      benefit: 'Up to ₹2 Lakh',
      beneficiaries: '1.5 Crore+',
      deadline: '15 January 2024',
      location: 'Pan India',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      tag: 'Student Focused'
    },
    {
      id: 4,
      title: 'PM Employment Generation',
      category: 'Employment',
      description: 'Credit linked subsidy for employment generation',
      benefit: 'Up to ₹25 Lakh',
      beneficiaries: '75 Lakh+',
      deadline: 'Ongoing',
      location: 'Pan India',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      tag: 'Job Creation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Government Schemes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most impactful and popular government schemes currently available
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {schemes.map((scheme, index) => (
            <div
              key={scheme.id}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${scheme.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
              </div>

              {/* Tag */}
              <div className="absolute top-6 right-6">
                <span className={`bg-gradient-to-r ${scheme.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {scheme.tag}
                </span>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${scheme.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <scheme.icon className={`text-${scheme.color.split('-')[1]}-600`} size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                        {scheme.title}
                      </h3>
                    </div>
                    <span className={`bg-gradient-to-r ${scheme.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {scheme.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {scheme.description}
                </p>

                {/* Key Information */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="text-green-600" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Benefit</p>
                      <p className="font-semibold text-gray-900">{scheme.benefit}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="text-blue-600" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Beneficiaries</p>
                      <p className="font-semibold text-gray-900">{scheme.beneficiaries}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-orange-600" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Deadline</p>
                      <p className="font-semibold text-gray-900">{scheme.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-purple-600" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Coverage</p>
                      <p className="font-semibold text-gray-900">{scheme.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className={`flex-1 bg-gradient-to-r ${scheme.color} text-white py-3 px-4 rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center space-x-2`}>
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                  <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Schemes */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl">
            <span>View All Schemes</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSchemes;