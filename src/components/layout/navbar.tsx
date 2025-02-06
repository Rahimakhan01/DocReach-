import { Link } from 'react-router-dom';
import { Stethoscope, User } from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '@/lib/auth';

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#091540] via-[#7692ff] to-[#3d518c] backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Stethoscope className="w-8 h-8 text-[#abd2fa]" />
          <span className="text-xl font-bold text-white">DocReach</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to={user?.role === 'doctor' ? '/doctor-dashboard' : '/dashboard'}>
                <Button variant="ghost" className="flex items-center space-x-2 text-[#35f7e7] hover:text-[#3d518c]">
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={logout}
                className="flex items-center space-x-2 text-[#35f7e7] hover:text-[#3d518c]"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button className="bg-[rgb(79,42,246)] text-white hover:bg-[#16bac5]">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
              <Button className="bg-[rgb(79,42,246)] text-white hover:bg-[#16bac5]">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
