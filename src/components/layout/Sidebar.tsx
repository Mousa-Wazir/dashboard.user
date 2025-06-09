
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Heart, 
  Gift, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const sidebarItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'My Orders', path: '/orders', icon: Package },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
    { name: 'Wishlist', path: '/wishlist', icon: Heart },
    { name: 'Rewards', path: '/rewards', icon: Gift },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Help', path: '/help', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="bg-white border-r border-border w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">My Account</h2>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
