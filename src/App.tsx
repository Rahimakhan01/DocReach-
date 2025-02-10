import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/auth';
import { Navbar } from './components/layout/navbar';
import { Footer } from './components/layout/footer';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { DashboardPage } from './pages/dashboard';
import { DoctorDashboardPage } from './pages/doctor-dashboard';
import { BookAppointmentPage } from './pages/bookAppointment';
import Records  from './pages/records';
import Tracker  from './pages/tracker';
import Message  from './pages/message';




function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/doctor-dashboard"
                element={
                  <PrivateRoute>
                    <DoctorDashboardPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bookAppointment"
                element={
                  <PrivateRoute>
                    <BookAppointmentPage />
                  </PrivateRoute>
                }
              />
            <Route
                path="/records"
                element={
                  <PrivateRoute>
                    <Records/>
                  </PrivateRoute>
                }
              />
            <Route
                path="/message"
                element={
                  <PrivateRoute>
                    <Message />
                  </PrivateRoute>
                }
              />
            <Route
                path="/tracker"
                element={
                  <PrivateRoute>
                    <Tracker/>
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
