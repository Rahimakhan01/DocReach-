import { motion } from 'framer-motion';
import { Activity, Calendar, FileText, MessageSquare, LineChart as ChartLine, Bell, Settings } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Tabs } from '@/components/ui/tabs';

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Jane Smith',
    date: '2024-03-20',
    time: '10:00 AM',
    type: 'Check-up',
  },
  {
    id: 2,
    doctor: 'Dr. Michael Johnson',
    date: '2024-03-25',
    time: '2:30 PM',
    type: 'Follow-up',
  },
];

const healthMetrics = [
  {
    label: 'Heart Rate',
    value: '72 bpm',
    trend: 'stable',
  },
  {
    label: 'Blood Pressure',
    value: '120/80',
    trend: 'normal',
  },
  {
    label: 'Weight',
    value: '70 kg',
    trend: 'stable',
  },
];

const notifications = [
  {
    id: 1,
    title: 'Appointment Reminder',
    message: 'Your appointment with Dr. Jane Smith is tomorrow at 10:00 AM',
    time: '1 hour ago',
  },
  {
    id: 2,
    title: 'New Message',
    message: 'Dr. Michael Johnson sent you a message',
    time: '2 hours ago',
  },
];

export function DashboardPage() {
  const { user } = useAuth();

  const dashboardTabs = [
    { id: 'overview', label: 'Overview', icon: <ChartLine className="w-4 h-4" /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}
          </h1>
          <p className="mt-1 text-gray-600">Here's your health overview</p>
        </motion.div>

        <Tabs tabs={dashboardTabs}>
          {/* Overview Tab */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {healthMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <h3 className="text-lg font-medium text-gray-900">{metric.label}</h3>
                  <p className="mt-2 text-3xl font-semibold text-teal-600">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Status: {metric.trend}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center"
                  >
                    <Calendar className="h-6 w-6 mb-2" />
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center"
                  >
                    <MessageSquare className="h-6 w-6 mb-2" />
                    Message Doctor
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center"
                  >
                    <Activity className="h-6 w-6 mb-2" />
                    Track Symptoms
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 flex flex-col items-center justify-center"
                  >
                    <FileText className="h-6 w-6 mb-2" />
                    View Records
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-sm text-gray-600">Today</p>
                    <p className="font-medium">Updated health metrics</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-sm text-gray-600">Yesterday</p>
                    <p className="font-medium">Booked appointment with Dr. Smith</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointments Tab */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
                <Button>
                  <Calendar className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </div>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-500">{appointment.type}</p>
                        <p className="text-sm text-gray-500">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Join Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications Tab */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="border-l-4 border-teal-500 bg-teal-50 p-4 rounded-r-lg"
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{notification.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings Tab */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        value={user?.name}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        value={user?.email}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive email updates about your appointments</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Time Zone</h4>
                        <p className="text-sm text-gray-500">Set your local time zone for accurate scheduling</p>
                      </div>
                      <Button variant="outline">Update</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}