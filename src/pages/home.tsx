import { motion } from 'framer-motion';
import { Activity, Calendar, MessageSquare, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Activity className="w-6 h-6 text-[#00A3FF]" />, // Adjusted to match the theme
    title: 'AI-Powered Health Analysis',
    description: 'Get instant insights about your symptoms with our advanced AI system.',
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#00A3FF]" />,
    title: 'Easy Scheduling',
    description: 'Book appointments with doctors at your convenience.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#00A3FF]" />,
    title: 'Secure Messaging',
    description: 'Communicate with your healthcare providers safely and efficiently.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#00A3FF]" />,
    title: 'Protected Health Records',
    description: 'Your medical data is encrypted and secure with us.',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-[#E3F2FD] via-[#F1F8FF] to-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#003366] mb-6">
              Your Smart Gateway to Digital Healthcare
            </h1>
            <p className="text-xl text-[#003366] mb-8">
              Connect with qualified doctors, manage your health records, and get
              AI-powered insights all in one place.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
              <Button size="lg" className="bg-[#16BAC5] text-white hover:bg-[#5863F8] group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-[#16BAC5] text-[#16BAC5] hover:bg-[#EFE9F4]">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-[#F6FAFF] via-[#FFFFFF] to-[#F6FAFF]">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
            Why Choose DocReach?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#5863F8] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#171D1C]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#E6F7FF] via-[#FFFFFF] to-[#F6FAFF]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#003366] mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-[#003366] mb-8">
              Join thousands of satisfied users who have made DocReach their
              healthcare companion.
            </p>
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-[#16BAC5] text-white hover:bg-[#5863F8] group">
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
