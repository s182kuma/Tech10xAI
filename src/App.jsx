import React, { useState } from 'react';
import {
  BriefcaseIcon,
  SearchIcon,
  UserIcon,
  PlusCircleIcon,
  VideoIcon,
  StarIcon,
  CodeIcon,
  CalendarIcon,
  MessageSquareIcon,
  Cpu,
  CloudIcon,
  UsersIcon,
  ClockIcon,
  ShieldIcon,
  MailIcon,
  PhoneIcon,
  BookOpenIcon,
  TrendingUpIcon,
  AwardIcon,
  GraduationCapIcon
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleSubmit = (e) => { 
    e.preventDefault();
    window.location.href = `mailto:support@tech10xai.com?subject=Query from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nQuery: ${formData.query}`)}`;
    setFormData({ name: '', email: '', query: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">Tech10xAI</span>
                <span className="text-sm text-blue-600 block -mt-1">Freelance Hub</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">Find Work</button>
              <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">Post a Job</button>
              <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">Interviews</button>
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 mix-blend-multiply opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Powered by</span>
              <span className="block text-indigo-200">Tech10xAI</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              AI-powered freelance platform for seamless hiring, interviewing, and talent management.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  <PlusCircleIcon className="h-5 w-5 mr-2" />
                  Post a Project
                </button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                  <VideoIcon className="h-5 w-5 mr-2" />
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Tech10xAI is a fast-growing platform dedicated to simplifying hiring, upskilling, and career growth in the IT industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Team meeting"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <AwardIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
                  <p className="mt-2 text-gray-600">
                    Our team comprises highly experienced IT professionals from top MNCs like Wipro, HCL, TCS, Infosys, Microsoft, Nokia, BT, and Orange.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GraduationCapIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Comprehensive Training</h3>
                  <p className="mt-2 text-gray-600">
                    We provide expert-driven solutions including AI-powered mock interviews and expert-led boot camps for Cloud, Networking, and IT Infrastructure domains.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <TrendingUpIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Career Growth</h3>
                  <p className="mt-2 text-gray-600">
                    Whether you're a fresher or an experienced professional, we help you land your dream job with personalized guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mock Interviews & Career Guidance */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <VideoIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Mock Interviews & Career Guidance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get hands-on experience with real-time mock interviews conducted by seasoned IT professionals.
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="text-blue-500 mr-2">🎯</span>
                Personalized feedback and strategic guidance for success!
              </p>
            </div>

            {/* Expert-Led Boot Camps */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpenIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Expert-Led Boot Camps</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intensive training programs designed to bridge the gap between skills and industry demands.
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="text-blue-500 mr-2">📚</span>
                Learn from IT experts with decades of experience.
              </p>
            </div>

            {/* Online Interview Platform */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Online Interview Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI-Powered platform for seamless online interviews with automated assessments.
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="text-blue-500 mr-2">✅</span>
                Streamlined hiring process for better results.
              </p>
            </div>

            {/* Feedback System */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <StarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Feedback System</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get detailed performance analysis and constructive feedback after every interview.
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="text-blue-500 mr-2">📊</span>
                Track progress and ensure continuous improvement.
              </p>
            </div>

            {/* End-to-End Support */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">End-to-End Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                From resume screening to final selection, we streamline the entire process.
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="text-blue-500 mr-2">⚡</span>
                Reduce hiring time and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Choose Tech10xAI?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <AwardIcon className="h-6 w-6 text-blue-200" />
                <h3 className="ml-3 text-xl font-semibold text-white">Industry Experts</h3>
              </div>
              <p className="text-blue-100">Learn from IT professionals with experience at top global companies.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <GraduationCapIcon className="h-6 w-6 text-blue-200" />
                <h3 className="ml-3 text-xl font-semibold text-white">Job-Oriented Training</h3>
              </div>
              <p className="text-blue-100">Focused coaching to enhance technical skills and confidence.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <Cpu className="h-6 w-6 text-blue-200" />
                <h3 className="ml-3 text-xl font-semibold text-white">AI-Driven Solutions</h3>
              </div>
              <p className="text-blue-100">Smart tools for accurate candidate assessment and matching.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-blue-200" />
                <h3 className="ml-3 text-xl font-semibold text-white">Career Growth Support</h3>
              </div>
              <p className="text-blue-100">Ongoing mentorship to help you land high-paying IT jobs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Form */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">Kickstart Your IT Career Today!</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                  Your Query
                </label>
                <textarea
                  name="query"
                  id="query"
                  required
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="Please describe your query or requirements"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="flex justify-center space-x-8 pt-8 border-t">
              <a href="mailto:support@tech10xai.com" className="flex items-center text-gray-600 hover:text-blue-600">
                <MailIcon className="h-5 w-5 mr-2" />
                support@tech10xai.com
              </a>
              <a href="tel:+919873623751" className="flex items-center text-gray-600 hover:text-blue-600">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +919873623751
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-white">10K+</div>
              <div className="mt-2 text-blue-100">Active Freelancers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">5K+</div>
              <div className="mt-2 text-blue-100">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">50K+</div>
              <div className="mt-2 text-blue-100">AI-Powered Interviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">95%</div>
              <div className="mt-2 text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
