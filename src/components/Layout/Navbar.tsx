import React from 'react';
import { User, Menu } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
  user: { name: string; farmName: string };
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, user }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🍎</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Apple Farm Manager</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.farmName}</p>
          </div>
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;