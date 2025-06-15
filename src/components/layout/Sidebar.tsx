
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
  User,
  Menu
} from 'lucide-react';
import { Drawer, DrawerContent, DrawerOverlay, DrawerClose, DrawerTrigger } from '@/components/ui/drawer';
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

  // Mobile: hide sidebar, show Drawer with trigger (hamburger)
  if (isMobile) {
    return (
      <>
        {/* Sidebar hamburger only for dashboard links, fixed on left */}
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-accent border border-border text-muted-foreground shadow-lg"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open dashboard menu"
        >
          <Menu className="h-7 w-7" />
        </button>
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} shouldScaleBackground>
          <DrawerOverlay />
          <DrawerContent className="p-0 max-w-xs w-full">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
              <div className="inline-flex items-center justify-center w-11 h-11 border-2 border-primary rounded-full bg-accent">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-base text-foreground">Sarah</div>
                <div className="text-xs text-muted-foreground">Shopping enthusiast</div>
              </div>
              <DrawerClose asChild>
                <button className="ml-auto p-1 rounded hover:bg-muted transition">
                  <span className="sr-only">Close</span>
                  &times;
                </button>
              </DrawerClose>
            </div>
            <nav className="space-y-2 mt-2 px-6">
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
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  // Desktop: show sidebar always on the left
  return (
    <aside className="bg-white border-r border-border w-64 min-h-screen block transition-all duration-300 fixed top-0 left-0 z-40 h-full">
      <div className="p-6 pt-24 md:pt-6">
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
