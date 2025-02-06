import { motion } from 'framer-motion';
import { Activity, Calendar, MessageSquare, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Activity className="w-6 h-6 text-teal-500" />,
    title: 'AI-Powered Health Analysis',
    description: 'Get instant insights about your symptoms with our advanced AI system.',
  },
  {
    icon: <Calendar className="w-6 h-6 text-teal-500" />,
    title: 'Easy Scheduling',
    description: 'Book appointments with doctors at your convenience.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-teal-500" />,
    title: 'Secure Messaging',
    description: 'Communicate with your healthcare providers safely and efficiently.',
  },
  {
    icon: <Shield className="w-6 h-6 text-teal-500" />,
    title: 'Protected Health Records',
    description: 'Your medical data is encrypted and secure with us.',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Smart Gateway to Digital Healthcare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with qualified doctors, manage your health records, and get
              AI-powered insights all in one place.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
                <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose DocReach?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of satisfied users who have made DocReach their
              healthcare companion.
            </p>
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-teal-50 group"
              >
                Sign Up Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}