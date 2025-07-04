import React, { useState, useEffect } from 'react';
import { Users, Target, Heart, Search, FileText, MousePointer, Shield, Clock, Globe, CheckCircle } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id='about' className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-green-300">JanKalyaan</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering citizens through simplified access to government schemes and benefits
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bridging the Gap Between Citizens and Government
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                JanKalyaan is a comprehensive government scheme finder platform designed to simplify the process of discovering and accessing government benefits. We understand that navigating through numerous government schemes can be overwhelming and time-consuming.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our platform serves as a centralized hub where citizens can easily search, filter, and find government schemes that match their specific needs and eligibility criteria. From agricultural support to healthcare benefits, education assistance to employment opportunities - we bring all government schemes under one roof.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Active Schemes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-gray-600">Citizens Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-gray-600">Categories</div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Trusted Portal</h3>
                    <p className="text-sm text-gray-600">Official government data</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Time Saving</h3>
                    <p className="text-sm text-gray-600">Quick scheme discovery</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Accessible</h3>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Verified</h3>
                    <p className="text-sm text-gray-600">Accurate information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600">Driving change through technology and accessibility</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our vision is to make citizens life easier by providing seamless access to government schemes and benefits, eliminating barriers and creating a more inclusive society where every citizen can benefit from government initiatives.
                </p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to streamline the government – user interface for government schemes and benefits. Reduce time and effort required to find and avail a government scheme through innovative technology and user-centric design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How JanKalyaan Helps You</h2>
            <p className="text-xl text-gray-600">Simplifying government scheme access for every citizen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Search</h3>
                <p className="text-gray-700">Find schemes by eligibility, benefits, application deadlines, and more with our intelligent search and filter system.</p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Categories Schemes</h3>
                <p className="text-gray-700">Schemes available in category wise almost every type of category available in our website in which you find schemes on your scheme all in one place.</p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Schemes</h3>
                <p className="text-gray-700">JanKalyaan makes it easy for users to keep track of the government schemes they're interested in. With our Saved Schemes feature, you can bookmark any scheme you find useful.

</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-4">How it works</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Easy steps to apply
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              for Government Schemes
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">LogIn Details</h3>
                <p className="text-gray-900 font-medium mb-2">Start by entering your <span className="font-bold">basic details!</span></p>
                <p className="text-gray-600 text-sm">LogIn yourself to make your account and find schemes </p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block absolute top-24 left-1/3 transform -translate-x-1/2 z-10">
              <div className="w-8 h-8 text-gray-300">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Search</h3>
                <p className="text-gray-900 font-medium mb-2">Our search engine will <span className="font-bold">find the relevant schemes!</span></p>
                <p className="text-gray-600 text-sm">Our Search filters help you discover schemes that match your needs</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block absolute top-24 right-1/3 transform translate-x-1/2 z-10">
              <div className="w-8 h-8 text-gray-300">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MousePointer className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Visit Official Website</h3>
                <p className="text-gray-900 font-medium mb-2"><span className="font-bold">Select and apply</span> for the best suited scheme</p>
                <p className="text-gray-600 text-sm">Choose the perfect scheme and then click on their official website and start application process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Discover Your Benefits?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of citizens who have already benefited from government schemes through JanKalyaan
            </p>
           
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default App;