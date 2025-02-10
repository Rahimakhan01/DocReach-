import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';

const doctors = [
  { id: 1, name: 'Dr. Jane Smith', specialty: 'General Practitioner' },
  { id: 2, name: 'Dr. Michael Johnson', specialty: 'Cardiologist' },
  { id: 3, name: 'Dr. Emily Brown', specialty: 'Dermatologist' },
];

export function BookAppointmentPage() {
  const { user } = useAuth(); // Remove this if not needed
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E3F2FD] via-[#F1F8FF] to-[#FFFFFF] pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold text-[#003366]">Book an Appointment</h1>
          <p className="mt-1 text-[#003366]">Schedule your next visit with ease</p>
        </motion.div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="text-lg font-medium">Select Doctor</label>
              <select
                value={selectedDoctor}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedDoctor(e.target.value)
                }
                className="block w-full mt-2 rounded border-gray-300 focus:ring focus:ring-indigo-200"
              >
                <option value="" disabled>Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} ({doctor.specialty})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-lg font-medium">Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                className="block w-full mt-2 rounded border-gray-300 focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="text-lg font-medium">Select Time</label>
              <input
                type="time"
                value={time}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value)}
                className="block w-full mt-2 rounded border-gray-300 focus:ring focus:ring-indigo-200"
              />
            </div>

            <Button className="mt-4 w-full" onClick={() => alert('Appointment Booked!')}>
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
