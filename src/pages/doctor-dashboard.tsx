import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Video } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';

const appointments = [
  {
    id: 1,
    patient: 'John Doe',
    date: '2024-03-20',
    time: '10:00 AM',
    type: 'Check-up',
    status: 'Confirmed',
  },
  {
    id: 2,
    patient: 'Sarah Johnson',
    date: '2024-03-20',
    time: '11:30 AM',
    type: 'Follow-up',
    status: 'Confirmed',
  },
  {
    id: 3,
    patient: 'Mike Wilson',
    date: '2024-03-20',
    time: '2:00 PM',
    type: 'New Patient',
    status: 'Pending',
  },
];

const stats = [
  {
    label: 'Today\'s Patients',
    value: '8',
    icon: Users,
  },
  {
    label: 'Upcoming',
    value: '12',
    icon: Calendar,
  },
  {
    label: 'Available Hours',
    value: '6',
    icon: Clock,
  },
];

export function DoctorDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user?.name}
          </h1>
          <p className="mt-1 text-gray-600">Here's your schedule for today</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-3xl font-semibold text-blue-600">
                    {stat.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{appointment.patient}</h3>
                      <p className="text-sm text-gray-500">{appointment.type}</p>
                      <p className="text-sm text-gray-500">
                        {appointment.time} - {appointment.status}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="flex items-center">
                        <Video className="w-4 h-4 mr-2" />
                        Start Call
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}