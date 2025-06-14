
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Heart, 
  Gift, 
  Settings, 
  HelpCircle,
  User
} from 'lucide-react';

import { Drawer, DrawerContent, DrawerOverlay, DrawerClose } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const sidebarItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'My Orders', path: '/orders', icon: Package },
  { name: 'Cart', path: '/cart', icon: ShoppingCart },
  { name: 'Wishlist', path: '/wishlist', icon: Heart },
  { name: 'Rewards', path: '/rewards', icon: Gift },
  { name: 'Settings', path: '/settings', icon: Settings },
  { name: 'Help', path: '/help', icon: HelpCircle },
];

const Sidebar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Mobile, show Drawer with a hamburger menu externally, so the sidebar remains hidden on mobile
  if (isMobile) {
    // Sidebar drawer should generally be triggered externally (e.g. from a Header). 
    // Optionally returning null means only Header-triggered sidebar nav.
    return null;
  }

  return (
    <aside className="bg-white border-r border-border w-64 min-h-screen hidden md:block transition-all duration-300">
      <div className="p-6">
        {/* User Widget for dashboard, sidebar */}
        <div className="flex items-center gap-2 mb-7">
          <div className="inline-flex items-center justify-center w-11 h-11 border-2 border-primary rounded-full bg-accent">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-base text-foreground">Sarah</div>
            <div className="text-xs text-muted-foreground">Shopping enthusiast</div>
          </div>
        </div>
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
