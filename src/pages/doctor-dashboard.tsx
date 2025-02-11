import { useState, useEffect } from "react"; // Add useEffect
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const today = new Date().toISOString().split("T")[0];

const allAppointments = [
  // Today's Appointments
  {
    id: 1,
    patient: "John Doe",
    date: new Date().toISOString().split("T")[0], // Today's date
    time: "10:00 AM",
    type: "Check-up",
    status: "Scheduled",
  },
  {
    id: 2,
    patient: "Alice Smith",
    date: new Date().toISOString().split("T")[0], // Today's date
    time: "11:30 PM",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Bob Johnson",
    date: new Date().toISOString().split("T")[0], // Today's date
    time: "2:00 PM",
    type: "New Patient",
    status: "Pending",
  },

  // Upcoming Appointments
  {
    id: 4,
    patient: "Emily Davis",
    date: "2025-03-21",
    time: "10:30 AM",
    type: "Consultation",
    status: "Scheduled",
  },
  {
    id: 5,
    patient: "David Brown",
    date: "2025-03-21",
    time: "12:00 PM",
    type: "Follow-up",
    status: "Scheduled",
  },
  {
    id: 6,
    patient: "Mike Tison",
    date: "2025-03-22",
    time: "2:00 PM",
    type: "New Patient",
    status: "Pending",
  },
  {
    id: 7,
    patient: "Sarah Johnson",
    date: "2025-03-23",
    time: "11:30 AM",
    type: "Follow-up",
    status: "Confirmed",
  },

  // Previous Appointments
  {
    id: 8,
    patient: "Rajma Wilson",
    date: "2025-01-20",
    time: "2:00 PM",
    type: "New Patient",
    status: "Completed",
  },
  {
    id: 9,
    patient: "Chris Evans",
    date: "2025-01-15",
    time: "9:00 AM",
    type: "Check-up",
    status: "Completed",
  },
  {
    id: 10,
    patient: "Emma Watson",
    date: "2025-01-10",
    time: "3:00 PM",
    type: "Consultation",
    status: "Completed",
  },
  {
    id: 11,
    patient: "Michael Scott",
    date: "2025-01-05",
    time: "1:00 PM",
    type: "Follow-up",
    status: "Completed",
  },
];

const stats = [
  {
    label: "Today's Appointments",
    value: allAppointments.filter(
      (appt) => appt.date === today && appt.status !== "Completed"
    ).length,
    icon: Users,
  },
  {
    label: "Upcoming Appointments",
    value: allAppointments.filter((appt) => appt.date > today).length,
    icon: Calendar,
  },
  {
    label: "Previous Appointments",
    value: allAppointments.filter((appt) => appt.status === "Completed").length,
    icon: Clock,
  },
];

export function DoctorDashboardPage() {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState("today"); // 'today', 'upcoming', or 'past'
  const [currentTime, setCurrentTime] = useState(new Date()); // Add currentTime state

  // Update currentTime every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute (60,000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to check if the appointment time has passed
  const isAppointmentMissed = (appointment: {
    id: number;
    patient: string;
    date: string;
    time: string;
    type: string;
    status: string;
  }) => {
    if (selectedTab === "today") {
      const appointmentDateTime = new Date(
        `${appointment.date} ${convertTo24HourFormat(appointment.time)}`
      );
      return currentTime > appointmentDateTime;
    }
    return false;
  };

  // Helper function to convert "10:00 AM" to "10:00" (24-hour format)
  const convertTo24HourFormat = (time: string) => {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours) + 12);
    } else if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    return `${hours}:${minutes}`;
  };

  // Filtering data based on selected tab
  const filteredAppointments =
    selectedTab === "today"
      ? allAppointments.filter(
          (appt) => appt.date === today && appt.status !== "Completed"
        )
      : selectedTab === "upcoming"
      ? allAppointments.filter((appt) => appt.date > today)
      : allAppointments.filter((appt) => appt.status === "Completed"); // Previous appointments

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
          <p className="mt-1 text-gray-600">Here's your schedule</p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            // Determine background color based on stat label
            let bgColor = "";
            if (stat.label.includes("Today's")) bgColor = "bg-[#7692ff]";
            else if (stat.label.includes("Upcoming")) bgColor = "bg-[#5fbff9]";
            else if (stat.label.includes("Previous")) bgColor = "bg-[#abd2fa]";

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`cursor-pointer rounded-lg shadow p-6 ${bgColor} 
          ${
            selectedTab ===
            (stat.label.includes("Upcoming")
              ? "upcoming"
              : stat.label.includes("Previous")
              ? "past"
              : "today")
              ? "border-black border-2"
              : ""
          }`}
                onClick={() => {
                  setSelectedTab(
                    stat.label.includes("Upcoming")
                      ? "upcoming"
                      : stat.label.includes("Previous")
                      ? "past"
                      : "today"
                  );
                }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-black">
                      {stat.label}
                    </h3>
                    <p className="mt-1 text-3xl font-semibold text-black">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Appointments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {selectedTab === "today"
                ? "Today's Appointments"
                : selectedTab === "upcoming"
                ? "Upcoming Appointments"
                : "Previous Appointments"}
            </h2>
            <div className="space-y-4">
              {filteredAppointments.length === 0 ? (
                <p className="text-gray-500">No appointments found.</p>
              ) : (
                filteredAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{appointment.patient}</h3>
                        <p className="text-sm text-gray-500">
                          {appointment.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.time} - {appointment.status}
                        </p>
                        {selectedTab !== "today" && (
                          <p className="text-sm text-gray-500">
                            Date: {appointment.date}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-2 items-center">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {selectedTab === "today" &&
                          isAppointmentMissed(appointment) && (
                            <span className="text-red-500 italic">Missed</span>
                          )}
                        {selectedTab === "today" &&
                          appointment.status !== "Completed" &&
                          !isAppointmentMissed(appointment) && (
                            <Button size="sm" className="flex items-center">
                              <Video className="w-4 h-4 mr-2" />
                              Start Call
                            </Button>
                          )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
