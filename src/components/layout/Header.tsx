
import React, { useState } from 'react';
import { Bell, User, Search, ShoppingCart, X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Drawer, DrawerContent, DrawerClose, DrawerOverlay } from '@/components/ui/drawer';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'About Us', path: '/about' },
];

interface HeaderProps {
  cartItemCount?: number;
}

const Header = ({ cartItemCount = 3 }: HeaderProps) => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const notifications = [
    { id: 1, message: "Your order #1234 has been shipped", time: "2 hours ago", type: "order" },
    { id: 2, message: "Item in your wishlist is now on sale", time: "1 day ago", type: "wishlist" },
    { id: 3, message: "You earned 50 reward points", time: "2 days ago", type: "rewards" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative w-full">
          {/* Left side: Hamburger + Logo */}
          <div className="flex items-center w-fit">
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:bg-accent transition-colors mr-2"
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 mr-1">
                  <rect x="2" y="8" width="28" height="16" rx="6" fill="#1E2572"/>
                  <circle cx="16" cy="16" r="5" fill="#fff"/>
                </svg>
                <span className="text-primary-foreground font-bold text-sm hidden sm:inline">L</span>
              </div>
              <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                Localena
              </Link>
            </div>
          </div>

          {/* Nav: Desktop only */}
          <nav className="hidden md:flex space-x-8 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => console.log('Logout clicked')}
              className="text-sm px-2 text-destructive hover:underline ml-2"
            >
              Logout
            </button>
          </nav>

          {/* Right side: Actions */}
          <div className="flex items-center space-x-1 sm:space-x-4 ml-auto">
            {/* Search (hidden on xs) */}
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-44 sm:w-64 pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-border rounded-lg shadow-lg z-50 animate-fade-in">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <h3 className="font-semibold">Notifications</h3>
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="p-1 hover:bg-accent rounded"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 border-b border-border last:border-b-0 hover:bg-accent/50 transition-colors">
                        <p className="text-sm text-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for mobile navigation */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} shouldScaleBackground>
        <DrawerOverlay />
        <DrawerContent className="p-0">
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                    <rect x="2" y="8" width="28" height="16" rx="6" fill="#1E2572"/>
                    <circle cx="16" cy="16" r="5" fill="#fff"/>
                  </svg>
                  <span className="text-primary-foreground font-bold text-sm hidden">L</span>
                </div>
                <span className="text-xl font-bold text-primary">Localena</span>
              </div>
              <DrawerClose asChild>
                <button className="p-2 rounded-md hover:bg-accent transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </DrawerClose>
            </div>
            <nav className="flex flex-col gap-1 mt-3 mb-6 px-5">
              {/* Mobile nav: always visible here, never in header */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  console.log('Logout clicked');
                }}
                className="text-base px-3 py-3 text-destructive hover:underline transition-all text-left"
              >
                Logout
              </button>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
