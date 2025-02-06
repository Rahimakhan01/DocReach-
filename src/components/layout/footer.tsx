import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#15191c] text-[#EFE9F4]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#5FBFF9]">About DocReach</h3>
            <p className="text-sm">
              Your smart gateway to digital healthcare, connecting patients with qualified doctors
              through innovative technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#5FBFF9]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-[#16BAC5]">About Us</a></li>
              <li><a href="/services" className="hover:text-[#16BAC5]">Services</a></li>
              <li><a href="/doctors" className="hover:text-[#16BAC5]">Find Doctors</a></li>
              <li><a href="/contact" className="hover:text-[#16BAC5]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#5FBFF9]">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#16BAC5]" />
                <span>123 Healthcare Ave, Medical District</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#16BAC5]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#16BAC5]" />
                <span>contact@docreach.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#5FBFF9]">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-[#16BAC5]">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#16BAC5]">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-[#16BAC5]">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#5FBFF9] mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DocReach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}