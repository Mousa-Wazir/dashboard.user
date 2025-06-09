import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  return <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-col sm:flex-row text-sm, text-xs mt-4, gap-2 w-full sm:justify-between ">
          {children}
        </main>
      </div>
    </div>;
};
export default Layout;